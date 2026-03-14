"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { base_url } from "@/components/data/data";

interface AboutUsResponse {
  id: number;
  about_summary: string;
  executive_summary: string;
  mandate: string;
  vision: string;
  mission: string;
  core_values: string;
  updated_at: string;
}

const Story = () => {
  // ✅ All hooks are at the top
  const [aboutData, setAboutData] = useState<AboutUsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await fetch(`${base_url}/api/about-us`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setAboutData(data?.data ?? null);
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    fetchAbout();
  }, []);

  // ✅ Conditional rendering only happens after hooks
  if (loading) {
    return (
      <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative bottom-45">
        <div className="bg-[#4F3996] shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] min-h-[400px]">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-[#F47C20] rounded-full animate-spin"></div>
            </div>
            <p className="text-white text-lg font-medium">Loading content...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center py-10">Error: {error}</p>;
  }

  return (
    <section className="flex justify-center items-center sm:relative sm:bottom-[20px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-[600px] bottom-24 lg:bottom-5 md:min-h-[500px] lg:h-auto relative w-[95%] md:bottom-30 rounded-tl-[85px] bg-[#4F3996] p-8 md:p-12 lg:p-10 shadow-4xl overflow-visible"
      >
        {/* Text Div */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="p-2 md:p-4 relative z-10 ml-0 2xl:ml-30"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-white text-center lg:text-left md:text-left text-xl md:text-xl lg:text-xl font-bold w-full md:w-[80%] lg:w-[50%] mb-4 md:mb-2"
          >
            Executive Summary
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-white text-justify w-full md:w-[100%] lg:w-[640px] space-y-3 md:space-y-4 text-sm md:text-xs leading-relaxed"
          >
            {aboutData?.executive_summary ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: aboutData.executive_summary,
                }}
                className="space-y-5 sm:space-y-6 md:space-y-8 text-white text-sm leading-relaxed max-w-5xl text-justify"
              ></div>
            ) : (
              <p className="text-white text-center text-lg max-w-4xl">
                Executive summary information is currently unavailable.
              </p>
            )}
          </motion.div>
        </motion.div>

        {/* Image Div */}
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          src="/SectionImages/CEO.png"
          alt="Story Image"
          className="hidden overflow-hidden lg:block ml-0 2xl:ml-80 object-cover absolute bottom-[-90] left-[700px] h-[800px] w-auto"
        />
      </motion.div>
    </section>
  );
};

export default Story;
