import Image from "next/image";

export function FiveKSection() {
  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-20 py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Image */}
        <div className="w-full max-w-[900px] relative mb-[-60px] md:mb-[-80px] z-0">
          <Image
            src="/images/5k-event.jpg"
            alt="HAVEN Free Clinic 5K event"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>

        {/* Info Card */}
        <div className="bg-white border border-[#00356b]/10 w-full max-w-[660px] z-10 px-8 md:px-12 py-8 md:py-10 text-center shadow-sm">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-snug mb-4 max-w-[560px] mx-auto">
            Thank you for your support at the 11th Annual HAVEN
            Free Clinic 5K!
          </h3>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] md:text-[20px] lg:text-[22px] mb-4 max-w-[500px] mx-auto">
            With the help of our volunteers, sponsors, and
            donors we raised over{" "}
            <span className="font-semibold">$60,783</span> for
            the clinic!
          </p>
          <p className="font-['Poppins',sans-serif] text-black text-[14px] md:text-[17px] lg:text-[19px]">
            <span className="font-semibold">100% </span>
            of the proceeds will go{" "}
            <span className="font-semibold">
              towards patient care
            </span>
            .
          </p>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[1400px] h-px bg-[#00356b]/10 mt-12 md:mt-16" />
      </div>
    </section>
  );
}
