/**
 * Contact Page — 1st Chicago Accounting
 * Design: Split layout — form left, contact info right.
 */
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  // Load the LeadConnector form embed script
  useEffect(() => {
    const scriptSrc = "https://link.msgsndr.com/js/form_embed.js";
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return;
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, oklch(0.66 0.16 218), transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label text-[oklch(0.66_0.16_218)] mb-3">Get in Touch</p>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's Talk About Your Business
            </h1>
            <div className="w-12 h-0.5 mb-5 mx-auto" style={{ backgroundColor: "oklch(0.66 0.16 218)" }} />
            <p className="text-white/75 text-lg leading-relaxed">
              Schedule a consultation with Brad Filmanowicz, CPA, MBA, EA. Serving small business owners in Chicago, Orland Park, and nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Schedule a Consultation
              </h2>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and Brad will be in touch within one business day.</p>

              <iframe
                src="https://api.leadconnectorhq.com/widget/form/ncooGQAgnji9RqUdJ9an"
                style={{ width: "100%", height: "700px", border: "none", borderRadius: "10px" }}
                id="inline-ncooGQAgnji9RqUdJ9an"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Form (Brad Chicago Accounting)"
                data-height="542"
                data-layout-iframe-id="inline-ncooGQAgnji9RqUdJ9an"
                data-form-id="ncooGQAgnji9RqUdJ9an"
                title="Website Form (Brad Chicago Accounting)"
              />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:7084284980" className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: "oklch(0.66 0.16 218)" }}>
                      <Phone size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Primary Phone</p>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-[oklch(0.66_0.16_218)] transition-colors">708-428-4980</p>
                    </div>
                  </a>
                  <a href="tel:3128871040" className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: "oklch(0.66 0.16 218)" }}>
                      <Phone size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Chicago Phone</p>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-[oklch(0.66_0.16_218)] transition-colors">312-887-1040</p>
                    </div>
                  </a>
                  <a href="mailto:brad@1stchicagoaccounting.com" className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: "oklch(0.66 0.16 218)" }}>
                      <Mail size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</p>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-[oklch(0.66_0.16_218)] transition-colors">brad@1stchicagoaccounting.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: "oklch(0.66 0.16 218)" }}>
                      <Clock size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Office Hours</p>
                      <p className="text-sm font-medium text-gray-900">Monday through Friday</p>
                      <p className="text-sm text-gray-600">9:00 AM to 5:00 PM CST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 space-y-4">
                <h3 className="text-base font-bold text-gray-900">Office Locations</h3>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: "oklch(0.22 0.06 250)" }}>
                    <MapPin size={15} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">New Lenox Office</p>
                    <p className="text-sm text-gray-700">2522 Bluestone Bay Dr.</p>
                    <p className="text-sm text-gray-700">New Lenox, IL 60451</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: "oklch(0.22 0.06 250)" }}>
                    <MapPin size={15} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Chicago Office</p>
                    <p className="text-sm text-gray-700">564 W Randolph St, 2nd Fl</p>
                    <p className="text-sm text-gray-700">Chicago, IL 60661</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 pt-1">Remote consultations available for clients nationwide.</p>
              </div>

              {/* Brad mini card */}
              <div className="rounded-xl p-5 border border-gray-100" style={{ backgroundColor: "oklch(0.97 0.008 80)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/manus-storage/brad_headshot_cd18b67a.png"
                    alt="Brad Filmanowicz"
                    className="w-12 h-12 rounded-full object-cover object-top border-2 border-white"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Brad Filmanowicz</p>
                    <p className="text-xs text-gray-500">CPA, MBA, EA</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Brad personally handles consultations with new clients. You will speak directly with the CPA, not a junior associate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
