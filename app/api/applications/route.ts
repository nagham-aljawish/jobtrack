
import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // 1. Check authentication
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // 2. Fetch applications for the logged-in user
    const applications = await prisma.application.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        company: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // 3. Return applications
    return NextResponse.json(
      { applications },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to fetch applications:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}



export async function POST(request: Request) {
  try {
    // 1. Check authentication
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // 2. Read request body
    const body = await request.json();

    const {
      position,
      companyId,
      status,
      source,
      location,
      jobUrl,
      appliedAt,
      notes,
    } = body;

    // 3. Validate required fields
    if (
      typeof position !== "string" ||
      !position.trim() ||
      typeof companyId !== "string" ||
      !companyId.trim()
    ) {
      return NextResponse.json(
        { message: "Position and company are required" },
        { status: 400 }
      );
    }

    // 4. Validate status
    const validStatuses = [
      "WISHLIST",
      "APPLIED",
      "SCREENING",
      "INTERVIEW",
      "ASSESSMENT",
      "OFFER",
      "REJECTED",
      "WITHDRAWN",
    ];

    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        { message: "Invalid application status" },
        { status: 400 }
      );
    }

    // 5. Validate source
    const validSources = [
      "LINKEDIN",
      "COMPANY_WEBSITE",
      "INDEED",
      "REFERRAL",
      "OTHER",
    ];

    if (source && !validSources.includes(source)) {
      return NextResponse.json(
        { message: "Invalid application source" },
        { status: 400 }
      );
    }

    // 6. Check company ownership
    const company = await prisma.company.findFirst({
      where: {
        id: companyId,
        userId: session.user.id,
      },
    });

    if (!company) {
      return NextResponse.json(
        { message: "Company not found" },
        { status: 404 }
      );
    }

    // 7. Validate application date
    let applicationDate: Date | null = null;

    if (appliedAt) {
      applicationDate = new Date(appliedAt);

      if (Number.isNaN(applicationDate.getTime())) {
        return NextResponse.json(
          { message: "Invalid application date" },
          { status: 400 }
        );
      }
    }

    // 8. Create application
    const application = await prisma.application.create({
      data: {
        position: position.trim(),
        companyId: company.id,
        userId: session.user.id,
        status: status || "APPLIED",
        source: source || "OTHER",
        location: location || null,
        jobUrl: jobUrl || null,
        appliedAt: applicationDate,
        notes: notes || null,
      },
      include: {
        company: true,
      },
    });

    // 9. Return created application
    return NextResponse.json(
      {
        message: "Application created successfully",
        application,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create application:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
