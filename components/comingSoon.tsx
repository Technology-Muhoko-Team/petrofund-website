import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/SectionImages/Home.jpg"
          alt="Professional team background"
          fill
          className="object-cover object-top"
          quality={90}
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Logo */}
        <div className="mb-8 md:mb-2">
          <Image
            src="/Logo/newlogo.png"
            alt="PTEF Logo"
            width={400}
            height={400}
            className="w-80 md:w-90 h-auto drop-shadow-lg"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="text-center max-w-2xl relative md:bottom-20 bottom-10">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Something Great is Coming
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-white mb-8 drop-shadow-md leading-relaxed">
            We're building the future of petroleum training and education. Get
            ready for an experience like no other.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-[#F47C20] rounded-full opacity-70" />
        <div className="absolute top-20 right-12 w-2 h-2 bg-[#4F3996] rounded-full opacity-70" />
        <div className="absolute bottom-40 right-16 w-4 h-4 border-2 border-white/50 rounded-full opacity-50" />
      </div>
    </div>
  );
}
