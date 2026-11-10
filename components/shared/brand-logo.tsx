import Image from "next/image";

type BrandLogoProps = {
  size?: "small" | "medium" | "large";
};

const logoSizes = {
  small: 28,
  medium: 36,
  large: 48,
};

export default function BrandLogo({ size = "medium" }: BrandLogoProps) {
  const dimension = logoSizes[size];

  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/logo.png"
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
