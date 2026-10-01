import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | 1st Chicago Accounting";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-[oklch(0.18_0.04_240)]">
        <div className="container max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Privacy Policy
          </h1>
          <p className="text-blue-200 text-base">Effective Date: January 1, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-10">

            {/* Important Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                Important Notice Regarding Text Messaging Data
              </h2>
              <p>
                1st Chicago Accounting ("we," "us," or "our") does not share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">We collect the following types of information:</p>

              <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Name, email address, phone number, physical address</li>
                <li>Payment information when you make a purchase or request a quote</li>
                <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mb-2">Non-Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>IP address, browser type, device information</li>
                <li>Website usage patterns and analytics</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mb-2">Customer Communication</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Records of inquiries and service requests</li>
                <li>Appointment details and preferences</li>
                <li>Service history and feedback</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-3">We use collected data for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Providing and improving our services</li>
                <li>Processing transactions and payments</li>
                <li>Communicating with you about your inquiries, appointments, and promotions</li>
                <li>Enhancing website functionality and user experience</li>
                <li>Ensuring security and fraud prevention</li>
                <li>Maintaining records of your communication preferences and consent</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. SMS Messaging &amp; Compliance</h2>
              <h3 className="font-semibold text-gray-800 mb-3">Text Message Program Terms &amp; Conditions</h3>
              <p className="mb-4">
                By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders, customer support, and important updates.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">Opt-In &amp; Consent</h4>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>You will only receive messages if you have explicitly opted in</li>
                <li>We maintain timestamped records of all opt-in actions</li>
                <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
              </ul>

              <h4 className="font-semibold text-gray-800 mb-2">Opt-Out Instructions</h4>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>You can cancel SMS notifications at any time by replying "STOP"</li>
                <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
                <li>All opt-out requests are processed immediately</li>
              </ul>

              <h4 className="font-semibold text-gray-800 mb-2">Message Frequency &amp; Content</h4>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Message frequency varies based on your interactions with our business</li>
                <li>Messages will be directly related to the services you have requested</li>
                <li>We do not send promotional content without specific consent</li>
              </ul>

              <h4 className="font-semibold text-gray-800 mb-2">Help &amp; Support</h4>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Reply "HELP" for assistance or contact us at <a href="mailto:brad@1stchicagoaccounting.com" className="text-blue-600 hover:underline">brad@1stchicagoaccounting.com</a></li>
                <li>Customer support is available during regular business hours</li>
              </ul>

              <h4 className="font-semibold text-gray-800 mb-2">Carrier Information</h4>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Standard message and data rates may apply</li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
                <li>Supported carriers include AT&amp;T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
              </ul>

              <h4 className="font-semibold text-gray-800 mb-2">SMS Data Protection Statement</h4>
              <p className="mb-2">
                No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
              <p>
                We implement strict data protection measures to safeguard your SMS opt-in information and consent records.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Information Sharing &amp; Disclosure</h2>
              <p className="mb-4">We do not sell, rent, or trade personal information. We may share information with:</p>

              <h3 className="font-semibold text-gray-800 mb-2">Service Providers</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Third-party vendors who assist in our operations (e.g., payment processing, appointment scheduling)</li>
                <li>SMS aggregators and providers solely for the purpose of delivering messages you have consented to receive</li>
                <li>All service providers are contractually obligated to maintain confidentiality and security</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mb-2">Legal Compliance</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>If required by law, legal process, or to protect our rights</li>
                <li>In response to valid law enforcement requests or court orders</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mb-2">Business Transfers</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>In case of mergers, acquisitions, or sale of assets</li>
                <li>In such cases, your data remains protected under the terms of this policy</li>
              </ul>

              <p>
                All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the text message services.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="mb-4">We implement and maintain reasonable security measures to protect your personal information:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure access controls and authentication mechanisms</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Breach notification protocols in accordance with applicable laws</li>
                <li>Secure backup systems and disaster recovery procedures</li>
              </ul>
              <p>
                Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Cookies &amp; Tracking Technologies</h2>
              <p className="mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Analyze site traffic and user behavior</li>
                <li>Remember your preferences</li>
                <li>Improve website functionality and user experience</li>
                <li>Measure the effectiveness of our services</li>
              </ul>
              <p>
                You may control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Your Rights &amp; Choices</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing emails by clicking "unsubscribe" in our emails</li>
                <li>Opt-out of SMS messages by replying "STOP"</li>
                <li>Request information on how we process your data</li>
                <li>Withdraw consent at any time for future communications</li>
                <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
              </ul>
              <p>To exercise these rights, please contact us using the information in Section 10.</p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies. This privacy policy applies only to information collected by 1st Chicago Accounting.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this policy periodically. The latest version will always be available on our website with the effective date. For significant changes, we will notify you by email or through a notice on our website.
              </p>
            </div>

            {/* Section 10 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or how your information is handled, contact us at:
              </p>
              <div className="space-y-1 text-gray-700">
                <p className="font-semibold">1st Chicago Accounting</p>
                <p>2522 Bluestone Bay Dr., New Lenox, IL 60451</p>
                <p>Phone: <a href="tel:7084284980" className="text-blue-600 hover:underline">(708) 428-4980</a></p>
                <p>Email: <a href="mailto:brad@1stchicagoaccounting.com" className="text-blue-600 hover:underline">brad@1stchicagoaccounting.com</a></p>
                <p>Website: <a href="https://www.1stchicagoaccounting.com/" className="text-blue-600 hover:underline">https://www.1stchicagoaccounting.com/</a></p>
              </div>
              <p className="mt-5 text-sm text-gray-500 italic">
                By using our website and services, you consent to this Privacy Policy.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
