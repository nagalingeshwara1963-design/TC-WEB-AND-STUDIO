import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/Eyebrow";
import { BASE_PATH, EMAIL, GOATCOUNTER_CODE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | TC Web & Studio",
  description: "How the TC Web & Studio website handles your information: what the enquiry form sends, visit counting, and how to contact us.",
  alternates: { canonical: `${BASE_PATH}/privacy/` },
};

const UPDATED = "18 October 2026";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Eyebrow>Privacy</Eyebrow>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-[#180f2d] mb-3">Privacy policy</h1>
            <p className="text-sm text-[#5e5377] mb-10">Last updated: {UPDATED}</p>

            <div className="space-y-8 text-base text-[#3c3252] leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:font-display [&_h2]:text-[#180f2d] [&_h2]:mb-2">
              <div>
                <h2>Who we are</h2>
                <p>
                  TC Web &amp; Studio is a creative and digital studio based in Mysore, Karnataka. This page explains what happens to your
                  information when you use this website.
                </p>
              </div>

              <div>
                <h2>The enquiry form</h2>
                <p>
                  The form on this site does not store anything on our servers. When you press &quot;Send on WhatsApp&quot;, your answers are
                  put into a WhatsApp message on your own device. Nothing is sent until you choose to send that message in WhatsApp.
                </p>
              </div>

              <div>
                <h2>WhatsApp, Instagram and email</h2>
                <p>
                  When you message us on WhatsApp, follow us on Instagram or email us, those services handle your messages under their
                  own privacy policies. We only use what you send us to reply to your enquiry and to work on your project.
                </p>
              </div>

              {GOATCOUNTER_CODE && (
                <div>
                  <h2>Visit counting</h2>
                  <p>
                    We use GoatCounter, a privacy-friendly visit counter, to see how many people visit the site, which pages they view, and
                    roughly where visits come from. It does not use cookies and does not collect your name, phone number or email. We also
                    count clicks on our WhatsApp, Instagram and email buttons, without identifying who clicked.
                  </p>
                </div>
              )}

              <div>
                <h2>Fonts and videos</h2>
                <p>
                  The site loads fonts from Google Fonts, so Google may see your device&apos;s IP address when the page loads. Our videos and
                  images are served from this website.
                </p>
              </div>

              <div>
                <h2>We never sell your data</h2>
                <p>We don&apos;t sell, rent or share your information with anyone for advertising.</p>
              </div>

              <div>
                <h2>Questions</h2>
                <p>
                  If you have any questions about your information, or want us to delete messages you&apos;ve sent, email us at{" "}
                  <a href={`mailto:${EMAIL}`} className="font-semibold text-purple-800 underline underline-offset-4">
                    {EMAIL}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
