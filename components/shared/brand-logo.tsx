import Image from "next/image";

type BrandLogoProps = {
  size?: "small" | "medium" | "large";
};

const logoSizes = {
  small: 32,
  medium: 40,
  large: 52,
};

export default function BrandLogo({ size = "medium" }: BrandLogoProps) {
  const dimension = logoSizes[size];

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo-transparent.png"
        alt="JobTrack logo"
        width={dimension}
        height={dimension}
        priority
        className="object-contain"
      />

      <span className="text-xl font-bold tracking-tight text-foreground">
        JobTrack
      </span>
    </div>
  );
}
