import Image from "next/image";

type LogoItem = {
  name: string;
  src: string;
  width: number;
  height: number;
};

type BrandMarqueeProps = {
  logos: LogoItem[];
  borderColorClass?: string;
  itemClassName?: string;
  imageClassName?: string;
};

export function BrandMarquee({
  logos,
  borderColorClass = "border-white",
  itemClassName = "flex h-16 w-48 items-center justify-center opacity-70 grayscale transition-opacity duration-300 hover:opacity-100",
  imageClassName = "h-10 w-auto object-contain",
}: BrandMarqueeProps) {
  return (
    <div
      className={`relative left-1/2 mt-10 w-screen -translate-x-1/2 overflow-hidden border-y ${borderColorClass} py-10`}
    >
      <div className="logo-marquee flex items-center gap-20">
        {logos.concat(logos).map((logo, index) => (
          <div key={`${logo.name}-${index}`} className={itemClassName}>
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={logo.width}
              height={logo.height}
              className={imageClassName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
