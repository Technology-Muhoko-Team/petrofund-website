import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { base_url } from "@/components/data/data";

interface Trustee {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  position: string;
  email: string;
  phone: string;
  full_bio_html: string;
  linkedin: string;
  bio_snippet: string;
  profile_image_url: string;
  is_active: boolean;
  updated_at: string;
}

interface TrusteesPageProps {
  params: { id: string };
}

// Server Component (async)
export default async function TrusteeDetailPage(props: TrusteesPageProps) {
  // Await params in case it's a promise
  const { id } = await props.params;

  // Fetch all trustees (or ideally fetch a single trustee by ID)
  const res = await fetch(`${base_url}/api/trustees`);
  if (!res.ok) notFound();

  const data = await res.json();
  const trustees: Trustee[] = data.data ?? [];

  // Find trustee by ID
  const trustee = trustees.find((e) => e.id === Number(id));
  if (!trustee) notFound();

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link href="/about/board-of-trustees-page">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Team
            </Button>
          </Link>
        </div>
      </div>

      {/* Trustee Profile */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left Column - Image and Contact */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={trustee.profile_image_url || "/placeholder.svg"}
                  alt={trustee.full_name}
                  className="w-full object-contain rounded-lg"
                />
              </div>

              <div className="mt-8">
                <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                  {trustee.full_name}
                </h1>
                <p className="mt-2 text-lg font-medium text-accent">
                  {trustee.position}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-3 space-y-12">
            {/* Biography */}
            <div>
              <h2 className="text-4xl text-[#F47C20] font-bold mb-6">
                Biography
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: trustee.full_bio_html }}
                className="space-y-4 text-muted-foreground text-justify leading-relaxed"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
