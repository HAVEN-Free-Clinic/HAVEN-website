import Image from "next/image";

interface PageHeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  tall?: boolean;
}

export function PageHero({ imageSrc, imageAlt, title, subtitle, tall = false }: PageHeroProps) {
  return (
    <section
      className={`relative w-full bg-black overflow-hidden ${
        tall
          ? "h-[500px] sm:h-[600px] md:h-[700px] lg:h-[846px]"
          : "h-[340px] sm:h-[380px] md:h-[420px] lg:h-[480px]"
      }`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover opacity-80"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-[600px] h-[300px] bg-black/15 blur-[75px] rounded-[400px]" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-[140px] sm:pt-[160px] md:pt-[180px] lg:pt-[220px]">
        {subtitle && (
          <h2 className="font-['Merriweather',serif] font-bold text-white text-[18px] sm:text-[20px] md:text-[24px] mb-2 md:mb-4">
            {subtitle}
          </h2>
        )}
        <h1 className="font-['Merriweather',serif] font-bold text-white text-[30px] sm:text-[38px] md:text-[46px] lg:text-[50px] leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}
