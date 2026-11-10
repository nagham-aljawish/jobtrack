"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import BrandLogo from "@/components/shared/brand-logo";
import { authClient } from "@/lib/auth-client";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setIsPending(true);

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        setErrorMessage(
          error.message || "Invalid email or password. Please try again.",
        );
        return;
      }

      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.href = "/dashboard";
    } catch {
      setErrorMessage("Unable to sign in. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div className="mx-auto w-full max-w-sm">
      {/* Logo */}
      <div className="mb-5 flex justify-center">
        <BrandLogo size="small" />
      </div>

      {/* Login Card */}
      <div className="rounded-2xl border border-border/80 bg-surface/95 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-xl font-bold text-foreground sm:text-2xl">
            Welcome back
          </h1>

          <p className="mt-2 text-xs leading-5 text-muted sm:text-sm">
            Sign in to continue your career journey.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-medium text-foreground"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={inputClass}
              required
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-xs font-medium text-foreground"
              >
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-xs font-medium text-primary-light transition hover:text-foreground"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={`${inputClass} pr-20`}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-primary-light transition hover:text-foreground"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p
              role="alert"
              className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-xs text-red-400"
            >
              {errorMessage}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-xl bg-gradient-to-r from-primary to-[#7950DB] py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-5 text-center text-xs text-muted sm:text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary-light transition hover:text-foreground"
          >
            Sign up
          </Link>
        </p>
      </div>

      {/* Footer */}
      <p className="mt-4 text-center text-[10px] tracking-wide text-muted/60">
        YOUR CAREER JOURNEY CONTINUES HERE
      </p>
    </div>
  );
}
