
import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // 1. Get the current user's session
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    // 2. Check if the user is authenticated
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // 3. Get companies owned by the current user
    const companies = await prisma.company.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // 4. Return companies
    return NextResponse.json(
      { companies },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to fetch companies:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // 1. Get the current user's session
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    // 2. Check authentication
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // 3. Read the request body
    const body = await request.json();

    // 4. Extract company data
    const { name, website, industry, location } = body;

    // 5. Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { message: "Company name is required" },
        { status: 400 }
      );
    }

    // 6. Create company in database
    const company = await prisma.company.create({
      data: {
        name: name.trim(),
        website: website || null,
        industry: industry || null,
        location: location || null,
        userId: session.user.id,
      },
    });

    // 7. Return created company
    return NextResponse.json(
      { message: "Company created successfully", company },
      { status: 201 }
    );
     } catch (error) {
      if (
        error &&
        typeof error === "object" &&
        "code" in error &&
        error.code === "P2002"
      ) {
        return NextResponse.json(
          { message: "A company with this name already exists" },
          { status: 409 }
        );
      }

      console.error("Failed to create company:", error);

      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
}