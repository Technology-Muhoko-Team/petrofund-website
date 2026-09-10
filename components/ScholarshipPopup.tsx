"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ScholarshipPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only show the popup on the homepage
    if (pathname !== "/") {
      return;
    }

    // PETROFUND 2027 Scholarship deadline
    // 30 October 2026 at 23:59 Namibia time
    const deadline = new Date("2026-10-30T23:59:00+02:00");

    const now = new Date();

    // Only show before the deadline
    if (now < deadline) {
      setIsOpen(true);
    }
  }, [pathname]);

  // Don't show after deadline
  if (!isOpen) {
    return null;
  }

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-3 sm:p-5 md:p-8">

      {/* POPUP CONTAINER */}
      <div
        className="
          relative
          flex
          max-h-[94vh]
          w-full
          max-w-6xl
          flex-col
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
          sm:rounded-3xl
          lg:flex-row
        "
      >

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close scholarship announcement"
          className="
            absolute
            right-3
            top-3
            z-30
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white
            text-2xl
            font-bold
            leading-none
            text-gray-800
            shadow-lg
            transition
            hover:scale-110
            hover:bg-gray-100
            sm:right-4
            sm:top-4
            sm:h-11
            sm:w-11
          "
        >
          ×
        </button>

        {/* =====================================================
            IMAGE SECTION
        ====================================================== */}
        <div
          className="
            relative
            flex
            w-full
            shrink-0
            items-center
            justify-center
            bg-[#4F3996]
            px-3
            py-4
            sm:px-6
            sm:py-6
            lg:w-[58%]
            lg:px-8
            lg:py-8
          "
        >

          {/* 
            object-contain is important.
            It prevents the scholarship artwork from being cropped.
          */}
          <Image
            src="/SectionImages/scholarship-popup.png"
            alt="PETROFUND Namibia 2027 Scholarships"
            width={1400}
            height={800}
            priority
            className="
              h-auto
              max-h-[38vh]
              w-full
              object-contain
              sm:max-h-[42vh]
              lg:max-h-[78vh]
            "
          />

        </div>

        {/* =====================================================
            CONTENT SECTION
        ====================================================== */}
        <div
          className="
            flex
            min-h-0
            w-full
            flex-1
            flex-col
            justify-center
            overflow-y-auto
            bg-white
            px-5
            py-6
            sm:px-8
            sm:py-8
            lg:w-[42%]
            lg:px-10
            lg:py-10
          "
        >

          {/* LABEL */}
          <div className="mb-3">
            <span
              className="
                inline-flex
                rounded-full
                bg-[#4F3996]/10
                px-3
                py-1.5
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#4F3996]
                sm:px-4
                sm:py-2
                sm:text-sm
              "
            >
              PETROFUND NAMIBIA
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              text-3xl
              font-extrabold
              leading-[1.05]
              text-[#4F3996]
              sm:text-4xl
              lg:text-5xl
            "
          >
            2027
            <br />

            <span className="text-[#F47C20]">
              SCHOLARSHIPS
            </span>

            <br />

            ARE OPEN
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              text-sm
              leading-relaxed
              text-gray-600
              sm:mt-5
              sm:text-base
            "
          >
            PETROFUND is offering 2027 Master's Degree Scholarships
            in selected petroleum, energy, maritime, technology and
            related fields.
          </p>

          <p
            className="
              mt-3
              text-sm
              font-semibold
              leading-relaxed
              text-gray-800
              sm:text-base
            "
          >
            Empowering Namibians with the knowledge and skills to
            participate meaningfully in Namibia's evolving oil and
            gas industry.
          </p>

          {/* DEADLINE */}
          <div
            className="
              mt-5
              rounded-xl
              border-l-4
              border-[#F47C20]
              bg-orange-50
              px-4
              py-3
              sm:mt-6
              sm:px-5
              sm:py-4
            "
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-[#4F3996]
                sm:text-sm
              "
            >
              Application Deadline
            </p>

            <p
              className="
                mt-1
                text-sm
                font-bold
                text-[#F47C20]
                sm:text-base
              "
            >
              Friday, 30 October 2026 at 23:59
            </p>
          </div>

          {/* BUTTONS */}
          <div
            className="
              mt-5
              flex
              flex-col
              gap-3
              sm:mt-6
              sm:flex-row
            "
          >

            {/* APPLY NOW */}
            <a
              href="https://esaspetrofund.org"
              onClick={closePopup}
              className="
                inline-flex
                min-h-[48px]
                flex-1
                items-center
                justify-center
                rounded-lg
                bg-[#F47C20]
                px-5
                py-3
                text-sm
                font-bold
                text-white
                shadow-md
                transition-all
                hover:-translate-y-0.5
                hover:bg-[#d96812]
                hover:shadow-lg
                sm:text-base
              "
            >
              APPLY NOW
              <span className="ml-2 text-lg">
                →
              </span>
            </a>

            {/* MAYBE LATER */}
            <button
              type="button"
              onClick={closePopup}
              className="
                min-h-[48px]
                flex-1
                rounded-lg
                border-2
                border-[#4F3996]
                px-5
                py-3
                text-sm
                font-bold
                text-[#4F3996]
                transition
                hover:bg-[#4F3996]
                hover:text-white
                sm:text-base
              "
            >
              MAYBE LATER
            </button>

          </div>

          {/* SMALL FOOTNOTE */}
          <p
            className="
              mt-4
              text-center
              text-[11px]
              leading-relaxed
              text-gray-400
              sm:text-xs
            "
          >
            Applications close at 23:59 on 30 October 2026.
          </p>

        </div>
      </div>
    </div>
  );
}