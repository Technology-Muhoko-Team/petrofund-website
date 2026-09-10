import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProgramSection from "./programSection";

const ScholarshipsHeader = () => {
  return (
    <section>
      <div className="bg-[#4F3996] relative bottom-35 md:bottom-20 lg:bottom-0 mb-10 shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto">
        <Image
          src="/Logo/newlogo3.png"
          width={500}
          height={500}
          alt="Scholarships Header Logo"
          className="w-48 h-auto sm:w-64 md:w-72 lg:w-[500px]"
        />

        <div className="flex flex-col lg:flex-row mt-10 sm:mt-16 lg:mt-20 relative justify-center items-center w-full gap-6 lg:gap-0">
          <div className="w-full lg:w-[45%]">
            <h1 className="text-white font-semibold text-xl">
              PETROFUND NAMIBIA
              <br />
              SCHOLARSHIPS 2027
            </h1>
            <p className="text-justify text-white mt-4 text-sm">
              <strong>Namibia’s oil and gas industry continues to gain momentum</strong> with the
              journey from recent commercial discoveries to production firmly on track. In
              response to the growing opportunities within the sector, the Petroleum
              Training and Education Fund (PETROFUND) has aligned its training and
              development initiatives to build a highly skilled Namibian workforce for the
              upstream oil and gas industry. As part of this commitment, PETROFUND is
              pleased to announce the availability of 2027 Master's Degree Scholarships in
              selected upstream petroleum disciplines. These scholarships are aimed at
              equipping qualified Namibians with the specialised knowledge and skills
              required to participate meaningfully in the country's rapidly evolving oil and
              gas value chain.
            </p>
          </div>
          <div className="hidden lg:block w-full lg:w-[50%] overflow-hidden">
            <Image
              src="/SectionImages/scholars.png"
              width={650}
              height={650}
              alt="Scholarships Header Image"
              className="hidden lg:block lg:absolute lg:bottom-[-48px] lg:right-[-5px]"
            />
          </div>
        </div>
      </div>
      <ProgramSection />
      {/* Scholarship Info */}
      <main className="min-h-screen mb-10 relative bottom-35 md:bottom-0 lg:bottom-0 py-8 px-4 sm:py-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Section 1: Scholarship Opportunities */}
          <section className="rounded-2xl bg-[#4F3996] p-6 shadow-lg sm:p-8">
            <h1 className="mb-4 text-xl font-bold text-white">
              Scholarship Opportunities:
            </h1>
            <p className="mb-6 text-base leading-relaxed text-white sm:text-sm">
              The following scholarships are open to high-performing, dedicated
              Namibians eager to join the upstream petroleum industry and pursue
              full-time studies in the following fields:
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {/*PETROLEUM ENGINEERING */}
              <AccordionItem
                value="undergraduate"
                className="rounded-lg border-2 border-purple-200 bg-purple-50 px-4"
              >
                <AccordionTrigger className="text-left text-lg font-bold text-purple-900 hover:no-underline sm:text-lg">
                  PETROLEUM ENGINEERING
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>Master of Science (MSc.) Oil and Gas Engineering</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Petroleum Engineering</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Subsea Engineering</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Reservoir Engineering</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Drilling and Well Engineering</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Offshore Oil and Gas Engineering</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Petroleum Production Engineering</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Naval Engineering</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Marine Engineering</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Corrosion Engineering</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Fire Safety Engineering</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Aerospace Engineering</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Process Safety</span>
                    </li>
                  </ul>
                 
                </AccordionContent>
              </AccordionItem>

              {/* Postgraduate at UNAM */}
              <AccordionItem
                value="unam"
                className="rounded-lg border-2 border-orange-200 bg-orange-50 px-4"
              >
                <AccordionTrigger className="text-left text-lg font-bold text-orange-700 hover:no-underline sm:text-lg">
                  PETROLEUM ICT AND ROBOTICS
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-purple-600">•</span>
                      <span>MSc. IT for the Energy Industry</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-purple-600">•</span>
                      <span>MSc. in International Energy Studies and Data Analytics</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-purple-600">•</span>
                      <span>MSc. in Oil and Gas Innovation</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-purple-600">•</span>
                      <span>MSc. in Data Science specialising in oil and gas</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-purple-600">•</span>
                      <span>MSc. Robotics specialising in oil and gas</span>
                    </li>
                  </ul>
                 
                </AccordionContent>
              </AccordionItem>

              {/* Postgraduate Overseas */}
              <AccordionItem
                value="overseas"
                className="rounded-lg border-2 border-purple-200 bg-purple-50 px-4"
              >
                <AccordionTrigger className="text-left text-lg font-bold text-purple-900 hover:no-underline sm:text-lg">
                  PETROLEUM LAW
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>LLM Oil and Gas</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>LLM International Oil and Gas Law with Policy</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>LLM Energy, Economics and Law</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
  value="petroleum-finance-economics"
  className="rounded-lg border-2 border-purple-200 bg-purple-50 px-4"
>
  <AccordionTrigger className="text-left text-lg font-bold text-purple-900 hover:no-underline sm:text-lg">
    PETROLEUM FINANCE AND ECONOMICS
  </AccordionTrigger>
  <AccordionContent>
    <ul className="space-y-2 text-gray-700">
      <li className="flex items-start gap-2">
        <span className="mt-1 text-orange-600">•</span>
        <span>MSc. Energy Economics and Finance</span>
      </li>

      <li className="flex items-start gap-2">
        <span className="mt-1 text-orange-600">•</span>
        <span>MSc. Energy, Economics and Law</span>
      </li>

      <li className="flex items-start gap-2">
        <span className="mt-1 text-orange-600">•</span>
        <span>MSc. International Energy Studies and Finance</span>
      </li>
    </ul>
  </AccordionContent>
</AccordionItem>

<AccordionItem
  value="maritime-affairs"
  className="rounded-lg border-2 border-purple-200 bg-purple-50 px-4"
>
  <AccordionTrigger className="text-left text-lg font-bold text-purple-900 hover:no-underline sm:text-lg">
    MARITIME AFFAIRS
  </AccordionTrigger>
  <AccordionContent>
    <div className="space-y-3">
      <div>
        <p className="font-semibold text-gray-800">
          MSc. in Maritime Affairs specialising in:
        </p>

        <ul className="mt-2 space-y-2 text-gray-700">
          <li className="flex items-start gap-2 pl-4">
            <span className="mt-1 text-orange-600">•</span>
            <span>Maritime Energy Management</span>
          </li>

          <li className="flex items-start gap-2 pl-4">
            <span className="mt-1 text-orange-600">•</span>
            <span>Maritime Safety and Environmental Administration</span>
          </li>

          <li className="flex items-start gap-2 pl-4">
            <span className="mt-1 text-orange-600">•</span>
            <span>Shipping Management and Logistics</span>
          </li>

          <li className="flex items-start gap-2 pl-4">
            <span className="mt-1 text-orange-600">•</span>
            <span>Port Management</span>
          </li>
        </ul>
      </div>
    </div>
  </AccordionContent>
</AccordionItem>

<AccordionItem
  value="logistics-supply-chain"
  className="rounded-lg border-2 border-purple-200 bg-purple-50 px-4"
>
  <AccordionTrigger className="text-left text-lg font-bold text-purple-900 hover:no-underline sm:text-lg">
    LOGISTICS AND SUPPLY CHAIN MANAGEMENT
  </AccordionTrigger>
  <AccordionContent>
    <ul className="space-y-2 text-gray-700">
      <li className="flex items-start gap-2">
        <span className="mt-1 text-orange-600">•</span>
        <span>MSc. in Procurement and Supply Chain Management</span>
      </li>
    </ul>
  </AccordionContent>
</AccordionItem>
            </Accordion>
            {/* </CHANGE> */}
          </section>

          {/* Section 2: Requirements */}
          <section className="rounded-2xl bg-white/95 shadow-lg">
            <div className="rounded-t-2xl bg-[#F47C20] px-6 py-4 sm:px-8">
              <h2 className=" font-bold text-white sm:text-xl">
                Requirements for All Scholarships
              </h2>
            </div>
            <div className="p-6 sm:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {/* Eligibility Requirements */}
                <AccordionItem
                  value="eligibility"
                  className="rounded-lg border-2 border-purple-200 bg-purple-50 px-4"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-purple-900 hover:no-underline">
                    Eligibility Requirements
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pt-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>Namibian citizenship</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>
                         A relevant honours degree with a minimum average of 60%.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>
                          Be available to commence studies in January 2027 (SADC scholarships) or September 2027 (overseas scholarships).
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>
                          Provide proof of admission for the intended master's programme (for overseas scholarships).
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>
                          Submit certified copies of all required supporting documents, certified by the Namibian Police.
                        </span>
                      </li>
                       <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>
                          Complete the relevant PETROFUND online application form at https://esaspetrofund.org or submit an application through a regional office.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>
                          Where applicable, complete and pass an approved English language proficiency test after receiving a PETROFUND scholarship offer.
                        </span>
                      </li>
                         <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>
                         Applicants are advised that only applications for the fields of study specified in this scholarship announcement will be considered.
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Study Commencement & Admission */}
                <AccordionItem
                  value="admission"
                  className="rounded-lg border-2 border-orange-200 bg-orange-50 px-4"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-orange-700 hover:no-underline ">
                    Information for Applications
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pt-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                          ✓
                        </span>
                        <span>
                        Candidates with no access to the internet in their area or who cannot apply through our website can access the manual application forms at
                        their nearest regional offices.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                          ✓
                        </span>
                        <span>
                         Scholarship applications must be submitted online via https://esaspetrofund.org. Applicants submitting through regional offices may post
                        their applications to PETROFUND, 2027 Scholarships, Private Bag 13196, Windhoek, deliver them by courier to PETROFUND Head Office, 41
                        Schanzenweg, Eros, Windhoek or email completed applications to petrofund@namcor.com.na.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                          ✓
                        </span>
                        <span>
                        Only shortlisted candidates will be contacted and invited for oral interviews. Interview details will be communicated directly to shortlisted
                        applicants.
                        </span>
                      </li>
                         <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                          ✓
                        </span>
                        <span>
                        A guide to completing the application form, together with information on recommended universities offering the advertised postgraduate
                        programmes, is available on the PETROFUND website or upon request via email.
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Recommended Universities */}
<AccordionItem
  value="recommended-universities"
  className="rounded-lg border-2 border-purple-200 bg-purple-50 px-4"
>
  <AccordionTrigger className="text-left text-lg font-bold text-purple-900 hover:no-underline">
    Recommended Universities
  </AccordionTrigger>

  <AccordionContent>
    <div className="space-y-4 pt-2">

      {/* 1. NUST */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          1. Namibia University of Science and Technology
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          Namibia
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. in Logistics and Supply Chain Management</li>
          <li>• MSc. in Data Science</li>
        </ul>

        <div className="mt-3 space-y-2">
          <a
            href="https://www.nust.na/programmes/master-logistics-and-supply-chain-management"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            Logistics & Supply Chain Management Programme
          </a>

          <a
            href="https://fci.nust.na/master-data-science"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            Data Science Programme
          </a>
        </div>
      </div>

      {/* 2. WITS */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          2. University of the Witwatersrand
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          South Africa
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. in Data Science</li>
        </ul>

        <a
          href="https://www.wits.ac.za/course-finder/postgraduate/science/msc-data-science/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block break-all font-semibold text-purple-700 underline hover:text-orange-600"
        >
          Visit Programme Website
        </a>
      </div>

      {/* 3. UTP */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          3. Universiti Teknologi PETRONAS
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          Malaysia
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. Drilling Engineering</li>
        </ul>

        <a
          href="https://www.utp.edu.my/Pages/Admission/Postgraduate/Master-by-Coursework/MSC-in-Drilling-Engineering-by-Coursework-and-Dissertation.aspx"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block break-all font-semibold text-purple-700 underline hover:text-orange-600"
        >
          Visit Programme Website
        </a>
      </div>

      {/* 4. Shanghai Maritime University */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          4. Shanghai Maritime University (SMU)
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          China
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>
            • MSc. in Maritime Affairs – International Transport Logistics
            (Shipping and Finance)
          </li>
        </ul>

        <a
          href="https://smuiec.shmtu.edu.cn/2024/0927/c6983a237931/page.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block break-all font-semibold text-purple-700 underline hover:text-orange-600"
        >
          Visit Programme Website
        </a>
      </div>

      {/* 5. World Maritime University */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          5. World Maritime University
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          Sweden
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. in Maritime Affairs – Maritime Energy Management</li>
          <li>
            • MSc. in Maritime Affairs – Maritime Safety and Environmental
            Administration
          </li>
          <li>• MSc. in Maritime Affairs – Shipping Management and Logistics</li>
          <li>• MSc. in Maritime Affairs – Port Management</li>
        </ul>

        <a
          href="https://www.wmu.se/programmes/msc-malmo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block break-all font-semibold text-purple-700 underline hover:text-orange-600"
        >
          Visit Programme Website
        </a>
      </div>

      {/* 6. IFP */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          6. French Institute of Petroleum / Institut Français du Pétrole (IFP)
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          France
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. Petroleum Engineering and Project Development</li>
        </ul>

        <a
          href="https://www.ifp-school.com/en/training/specialized-engineering-graduate-degree/petroleum-engineering-and-project-development"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block break-all font-semibold text-purple-700 underline hover:text-orange-600"
        >
          Visit Programme Website
        </a>
      </div>

      {/* 7. Nantes */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          7. Nantes Université, Centrale Nantes
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          France
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>
            • MSc. Marine Technology: Atlantic Master on Ship Operation and
            Naval Engineering
          </li>
        </ul>

        <a
          href="https://www.ec-nantes.fr/study/masters/atlantic-master-on-ship-operation-naval-engineering"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block break-all font-semibold text-purple-700 underline hover:text-orange-600"
        >
          Visit Programme Website
        </a>
      </div>

      {/* 8. ENSTA Bretagne */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          8. ENSTA Bretagne
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          France
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. Marine Engineering</li>
        </ul>

        <a
          href="https://www.ensta-bretagne.fr/en/msc-marine-engineering-program"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block break-all font-semibold text-purple-700 underline hover:text-orange-600"
        >
          Visit Programme Website
        </a>
      </div>

      {/* 9. University of Aberdeen */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          9. University of Aberdeen
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          Scotland
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. Offshore Engineering</li>
          <li>• MSc. Oil and Gas Engineering</li>
          <li>• MSc. Process Safety</li>
          <li>• MSc. Oil and Gas Law with Professional Skills, LLM</li>
          <li>• MSc/LLM Energy Economics and Law</li>
          <li>• MSc. in Data Science</li>
        </ul>

        <div className="mt-3 space-y-2">
          <a
            href="https://www.abdn.ac.uk/study/postgraduate-taught/degree-programmes/1143/offshore-engineering"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Offshore Engineering
          </a>

          <a
            href="https://www.abdn.ac.uk/study/postgraduate-taught/degree-programmes/210/oil-and-gas-engineering/"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Oil and Gas Engineering
          </a>

          <a
            href="https://www.abdn.ac.uk/study/postgraduate-taught/degree-programmes/249/process-safety/"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Process Safety
          </a>

          <a
            href="https://www.abdn.ac.uk/study/postgraduate-taught/degree-programmes/218/oil-and-gas-law-with-professional-skills/"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            Oil and Gas Law with Professional Skills
          </a>

          <a
            href="https://www.abdn.ac.uk/business/research/centres/acreef/msc-llm-eel/"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc/LLM Energy Economics and Law
          </a>

          <a
            href="https://www.abdn.ac.uk/study/postgraduate-taught/degree-programmes/1198/data-science/"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Data Science
          </a>
        </div>
      </div>

      {/* 10. Robert Gordon University */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          10. Robert Gordon University
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          Scotland
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. Oil and Gas Engineering</li>
          <li>• MSc. Procurement and Supply Chain Management</li>
          <li>• MSc. IT for the Energy Industry</li>
          <li>• MSc. Robotics</li>
        </ul>

        <div className="mt-3 space-y-2">
          <a
            href="https://www.rgu.ac.uk/study/courses/928-pgcert-pgdip-msc-oil-and-gas-engineering"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Oil and Gas Engineering
          </a>

          <a
            href="https://www.rgu.ac.uk/study/courses/pgcert-pgdip-msc-procurement-and-supply-chain-management"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Procurement and Supply Chain Management
          </a>

          <a
            href="https://www.rgu.ac.uk/study/courses/pgcert-pgdip-msc-it-for-the-energy-industry"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. IT for the Energy Industry
          </a>

          <a
            href="https://www.rgu.ac.uk/study/courses/pgcert-pgdip-msc-robotics"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Robotics
          </a>
        </div>
      </div>

      {/* 11. University of Dundee */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          11. University of Dundee
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          Scotland
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. International Oil and Gas Law and Policy LLM</li>
          <li>• MSc. International Energy Studies and Data Analytics</li>
          <li>• MSc. in Oil and Gas Innovation</li>
        </ul>

        <div className="mt-3 space-y-2">
          <a
            href="https://www.dundee.ac.uk/postgraduate/international-oil-gas-law-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            International Oil and Gas Law and Policy
          </a>

          <a
            href="https://www.dundee.ac.uk/postgraduate/international-energy-studies-data-analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            International Energy Studies and Data Analytics
          </a>

          <p className="text-sm italic text-gray-500">
            Programme website for MSc. Oil and Gas Innovation was not provided
            in the source document.
          </p>
        </div>
      </div>

      {/* 12. Heriot-Watt */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          12. Heriot-Watt University
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          Scotland
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. Petroleum Engineering</li>
        </ul>

        <a
          href="https://www.hw.ac.uk/uk/study/postgraduate/petroleum-engineering.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block break-all font-semibold text-purple-700 underline hover:text-orange-600"
        >
          Visit Programme Website
        </a>
      </div>

      {/* 13. University of Edinburgh */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          13. University of Edinburgh
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          Scotland
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. in Data Science</li>
        </ul>

        <a
          href="https://study.ed.ac.uk/programmes/postgraduate-taught/902-data-science"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block break-all font-semibold text-purple-700 underline hover:text-orange-600"
        >
          Visit Programme Website
        </a>
      </div>

      {/* 14. University of Strathclyde */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          14. University of Strathclyde Glasgow
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          Scotland
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. Marine Engineering</li>
          <li>• MSc. Aerospace Engineering</li>
          <li>• MSc. Advanced Naval Architecture</li>
          <li>• MSc. Procurement and Supply Chain Management</li>
        </ul>

        <div className="mt-3 space-y-2">
          <a
            href="https://www.strath.ac.uk/courses/postgraduatetaught/marineengineering/"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Marine Engineering
          </a>

          <a
            href="https://www.strath.ac.uk/courses/postgraduatetaught/aerospaceengineering/"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Aerospace Engineering
          </a>

          <a
            href="https://www.strath.ac.uk/courses/postgraduatetaught/advancednavalarchitecture/"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Advanced Naval Architecture
          </a>

          <a
            href="https://www.strath.ac.uk/courses/postgraduatetaught/supplychainprocurementmanagement/"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Procurement and Supply Chain Management
          </a>
        </div>
      </div>

      {/* 15. University of Lancashire */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          15. University of Lancashire
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          England
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. Fire Safety Engineering</li>
          <li>• MSc. Oil and Gas Engineering</li>
          <li>• MSc. Aerospace Engineering</li>
        </ul>

        <div className="mt-3 space-y-2">
          <a
            href="https://www.uclan.ac.uk/postgraduate/courses/fire-safety-engineering-msc"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Fire Safety Engineering
          </a>

          <a
            href="https://www.uclan.ac.uk/postgraduate/courses/oil-gas-engineering-msc"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Oil and Gas Engineering
          </a>

          <a
            href="https://www.lancashire.ac.uk/postgraduate/courses/aerospace-engineering-msc"
            target="_blank"
            rel="noopener noreferrer"
            className="block break-all font-semibold text-purple-700 underline hover:text-orange-600"
          >
            MSc. Aerospace Engineering
          </a>
        </div>
      </div>

      {/* 16. University of Manchester */}
      <div className="rounded-lg border border-purple-200 bg-white p-4">
        <h3 className="font-bold text-purple-900">
          16. University of Manchester
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          England
        </p>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• MSc. Aerospace Engineering</li>
        </ul>

        <a
          href="https://www.manchester.ac.uk/study/masters/courses/list/08025/msc-aerospace-engineering/#course-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block break-all font-semibold text-purple-700 underline hover:text-orange-600"
        >
          Visit Programme Website
        </a>
      </div>

    </div>
  </AccordionContent>
</AccordionItem>
              </Accordion>
              {/* </CHANGE> */}

              <div className="mt-6 rounded-lg bg-purple-50 p-4">
                <h3 className="mb-3 text-lg font-bold text-purple-900">
                  Enquiries:
                </h3>
                <p className="mb-2 text-gray-700 text-sm">
                  All enquiries should be directed to Ms. Elizabeth Muundjua or
                  Ms. Loide Ashaadhila at{" "}
                  <a
                    href="tel:+26461400443"
                    className="font-bold text-purple-700 hover:underline"
                  >
                    +264 61 400 443
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:petrofund@namcor.com.na"
                    className="font-bold text-purple-700 hover:underline"
                  >
                    petrofund@namcor.com.na
                  </a>
                  .
                </p>
                <h3 className="mb-3 text-lg font-bold text-purple-900">
                  DEADLINE FOR SUBMITTING APPLICATIONS:
                </h3>
                <p className="mb-2 text-gray-700 text-sm">
                  The closing date for submitting scholarship applications
                  is <strong>Friday, 30th October 2026 at 23:59</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="rounded-2xl bg-[#F47C20] text-white p-6 text-center shadow-lg sm:p-8">
            <p className="mb-4 ">
              For more information, visit the PETROFUND website.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 text-gray-600 sm:flex-row sm:gap-8">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-purple-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-white">petrofund@namcor.com.na</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-purple-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-white">+264 61 400 443</span>
              </div>
              <span className="text-white hover:text-[#4F3996] transition-all duration-300">
                Visit{" "}
                <a
                  href="https://esaspetrofund.org/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ESAS Petrofund
                </a>
              </span>
            </div>
          </footer>
        </div>
      </main>
    </section>
  );
};

export default ScholarshipsHeader;
