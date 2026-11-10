"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import BrandLogo from "@/components/shared/brand-logo";
import { authClient } from "@/lib/auth-client";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }

    setIsPending(true);

    try {
      const { error } = await authClient.signUp.email({
        name,
        email,
        password,
      });

      if (error) {
        setErrorMessage(
          error.message || "Something went wrong. Please try again.",
        );
        return;
      }

      setSuccessMessage("Your account has been created successfully!");
    } catch {
      setErrorMessage("Unable to create your account. Please try again.");
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

      {/* Register Card */}
      <div className="rounded-2xl border border-border/80 bg-surface/95 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-xl font-bold text-foreground sm:text-2xl">
            Create your account
          </h1>

          <p className="mt-2 text-xs leading-5 text-muted sm:text-sm">
            Start building your career journey with JobTrack.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-xs font-medium text-foreground"
            >
              Full name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={inputClass}
              required
            />
          </div>

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
            <label
              htmlFor="password"
              className="mb-1.5 block text-xs font-medium text-foreground"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={`${inputClass} pr-20`}
                minLength={8}
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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-xs font-medium text-foreground"
            >
              Confirm password
            </label>

            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className={inputClass}
              required
            />
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

          {/* Success Message */}
          {successMessage && (
            <p
              role="status"
              className="rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-2.5 text-xs text-green-400"
            >
              {successMessage}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-xl bg-gradient-to-r from-primary to-[#7950DB] py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Creating account..." : "Create account"}
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-5 text-center text-xs text-muted sm:text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary-light transition hover:text-foreground"
          >
            Sign in
          </Link>
        </p>
      </div>

      {/* Footer */}
      <p className="mt-4 text-center text-[10px] tracking-wide text-muted/60">
        YOUR CAREER JOURNEY STARTS HERE
      </p>
    </div>
  );
}
