"use client";
import Link from "next/link";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import MiniHero from "@/components/miniHero";
import { useState, useEffect } from "react";
import { base_url } from "@/components/data/data";
import Image from "next/image";
import { motion } from "framer-motion";
import ManagementHeader from "@/components/boardheader";

interface Trustee {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  position: string;
  email: string;
  phone: string;
  full_bio_html: string;
  bio_snippet: string;
  profile_image_url: string;
  is_active: boolean;
  updated_at: string;
  order: number;
  linkedin: string;
}

interface HeroImage {
  id: number;
  image_url: string;
  title: string;
  subtitle: string;
  page: string;
  created_at: string;
}

export default function TrusteesTeamPage() {
  const [trustees, setTrustees] = useState<Trustee[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [heroImage, setHeroImage] = useState<HeroImage | null>(null);
  const [heroError, setHeroError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil((trustees?.length || 0) / itemsPerPage);

  const paginatedTrustees = trustees?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    async function fetchTrustees() {
      try {
        const res = await fetch(`${base_url}/api/trustees`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        // Sort trustees by the `order` field ascending
        const sortedTrustees: Trustee[] = (data.data ?? []).sort(
          (a: Trustee, b: Trustee) => a.order - b.order
        );
        setTrustees(sortedTrustees);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    async function fetchHero() {
      try {
        const res = await fetch(`${base_url}/api/hero-images`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const boardHero = data?.data?.find(
          (img: HeroImage) => img.page === "Board Of Trustees"
        );
        setHeroImage(boardHero || null);
      } catch (err: any) {
        setHeroError(err.message);
      }
    }

    fetchTrustees();
    fetchHero();
  }, []);

  return (
    <>
      {/* Dynamic MiniHero — No loading state, no skeleton */}
      <MiniHero
        imageSrc={heroImage?.image_url || "/SectionImages/DesertHero.jpg"}
        title={heroImage?.title || "Board of Trustees"}
        subtitle={
          heroImage?.subtitle ||
          "Guiding the Vision and Governance of Petrofund"
        }
      />

      <ManagementHeader
        title="Our Board Of Trustees"
        subtitle="The PETROFUND Deed of Trust allows for the appointment of a Board of Trustees comprising representatives from petroleum exploration companies holding oil and gas exploration licenses in Namibia, as well as the Ministry of Industries, Mines and Energy, the National Petroleum Corporation of Namibia (NAMCOR), the Ministry of Education, Innovation, Youth, Sport, Arts and Culture and the Namibian Petroleum Operators Association (NAMPOA).
The Board of Trustees is chaired by the Executive Director of the Ministry of Industries, Mines and Energy, and with the exception of the Board Chairperson, trustees serve a three-year term. The appointment of trustees is made by the Minister of Industries, Mines and Energy. All institutions are allowed to nominate representatives for the minister's appointment.

"
        title2="Board Appointments
"
        subtitle2="
The Board of Trustees is appointed by the Minister of Industries, Mines and Energy in the Republic of Namibia. Representatives are nominated by the Ministry of Industries, Mines and Energy, the National Petroleum Corporation of Namibia (NAMCOR), the Ministry of Education, Innovation, Youth, Sport, Arts and Culture and the Namibian Petroleum Operators Association (NAMPOA) for the Minister's consideration to serve as members of the PETROFUND Board of Trustees.  Trustees, except the Chairperson, are appointed for a term of three (3) years."
      />

      <div className="min-h-screen bg-background">
        <section className="container mx-auto px-4 py-16 md:py-24">
          {loading ? (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-[#F47C20] rounded-full animate-spin"></div>
              </div>
              <p className="text-lg font-medium text-[#F47C20] mt-4">
                Loading...
              </p>
            </div>
          ) : error ? (
            <p className="text-red-500 text-center">Error: {error}</p>
          ) : paginatedTrustees && paginatedTrustees.length > 0 ? (
            <div className="grid gap-8 max-w-5xl mx-auto">
              {paginatedTrustees.map((trustee, index) => (
                <motion.div
                  key={trustee.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="md:w-64 lg:w-80 flex-shrink-0">
                    <div className="relative h-80 md:h-[450px] w-full">
                      <Image
                        src={trustee.profile_image_url || "/Icons/person.svg"}
                        alt={trustee.full_name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-3xl font-bold text-[#4F3996] mb-2">
                        {trustee.full_name}
                      </h3>
                      <p className="text-md font-medium text-[#4F3996] mb-4">
                        {trustee.position}
                      </p>

                      <div className="flex gap-3 mb-6">
                        {trustee.email && (
                          <a
                            href={`mailto:${trustee.email}`}
                            className="w-10 h-10 bg-[#4F3996] text-white rounded flex items-center justify-center hover:bg-[#F47C20] transition-colors duration-300"
                          >
                            <Mail size={20} />
                          </a>
                        )}
                        <a
                          href={trustee.linkedin}
                          className="w-10 h-10 bg-[#4F3996] text-white rounded flex items-center justify-center hover:bg-[#F47C20] transition-colors duration-300"
                        >
                          <Linkedin size={20} />
                        </a>
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed text-justify mb-6">
                        {trustee.bio_snippet}
                      </p>
                    </div>

                    <div>
                      <Link
                        href={`/about/board-of-trustees-page/${trustee.id}`}
                      >
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-[#F47C20] text-white px-8 py-1 rounded-full font-medium hover:bg-[#4F3996] transition-colors duration-300 flex items-center gap-2 shadow-md"
                        >
                          Read More
                          <ArrowRight size={15} />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="col-span-full flex justify-center">
              <p className="w-full text-center text-lg text-muted-foreground mt-12">
                No trustee information is currently available. Please check back
                later.
              </p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center mt-10 gap-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-[#4F3996] text-white rounded disabled:opacity-50"
              >
                Previous
              </button>

              <span className="text-lg font-medium">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-[#4F3996] text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
