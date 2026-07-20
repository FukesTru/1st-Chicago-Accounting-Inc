import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service | 1st Chicago Accounting";
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
            Terms of Service
          </h1>
          <p className="text-blue-200 text-base">Effective Date: January 1, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-10">

            {/* SMS Messaging Terms */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                SMS Messaging Terms &amp; Compliance
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">1. Program Description</p>
                  <p>
                    This messaging program sends appointment confirmation and reminder messages to customers who have booked an appointment with 1st Chicago Accounting through our website at <a href="https://www.1stchicagoaccounting.com/" className="text-blue-600 hover:underline">https://www.1stchicagoaccounting.com/</a>, or via our scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is collected via web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations, appointment reminders, rescheduling updates, and customer support communications.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-1">2. Cancellation Instructions</p>
                  <p>
                    You can cancel the SMS service at any time. Simply text "STOP" to the same number that sent you messages. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-1">3. Support Information</p>
                  <p>
                    If you experience issues with the messaging program, reply with the keyword "HELP" for more assistance, or reach out directly to <a href="mailto:brad@1stchicagoaccounting.com" className="text-blue-600 hover:underline">brad@1stchicagoaccounting.com</a> or call <a href="tel:7084284980" className="text-blue-600 hover:underline">(708) 428-4980</a> during business hours.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-1">4. Carrier Liability</p>
                  <p>Carriers are not liable for delayed or undelivered messages.</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-1">5. Message &amp; Data Rates</p>
                  <p>
                    Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-1">6. Supported Carriers</p>
                  <p>
                    Our SMS program works with all major U.S. wireless carriers, including AT&amp;T, T-Mobile, Verizon, Sprint, and most regional carriers.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-1">7. Age Restriction</p>
                  <p>You must be 18 years or older to participate in our SMS program.</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-1">8. Privacy Policy</p>
                  <p>
                    For privacy-related inquiries, please refer to our Privacy Policy at <a href="/privacy-policy" className="text-blue-600 hover:underline">https://www.1stchicagoaccounting.com/privacy-policy</a>.
                  </p>
                </div>

                <p>
                  We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.
                </p>
              </div>
            </div>

            {/* General Terms */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">General Terms</h2>
              <p className="mb-4">
                This website (the "Site") is owned and operated by 1st Chicago Accounting ("COMPANY," "we" or "us"). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from 1st Chicago Accounting.
              </p>
              <p className="mb-4">
                Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.
              </p>
              <p>
                We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>

              <h3 className="font-semibold text-gray-800 mb-2">Our Limited License to You</h3>
              <p className="mb-4">
                This Site and all the materials available on the Site are the property of 1st Chicago Accounting and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use.
              </p>
              <p className="mb-4">
                You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us.
              </p>
              <p className="mb-6">
                Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site. However, you may download and/or print one copy of individual pages for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.
              </p>

              <h3 className="font-semibold text-gray-800 mb-2">Your License to Us</h3>
              <p>
                By posting or submitting any material (including comments, blog entries, social media posts, photos, and videos) to us via the Site, internet groups, or other digital venues, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material.
              </p>
            </div>

            {/* Disclaimers */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Disclaimers</h2>
              <p className="mb-4">
                Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites or the information, products, or services offered on or through the sites.
              </p>
              <p className="mb-4">
                The information, products, and services offered on or through the Site are provided "as is" and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.
              </p>
              <p>
                You agree at all times to indemnify and hold harmless 1st Chicago Accounting, its affiliates, and their respective officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, or representation under these Terms of Service.
              </p>
            </div>

            {/* Online Commerce */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Online Commerce</h2>
              <p className="mb-4">
                Certain sections of the Site may allow you to purchase products and services from third-party vendors. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services. If you make a purchase from a third party linked through the Site, the information obtained during your visit, including payment information, may be collected by both the merchant and us.
              </p>
              <p>
                Your participation in any dealings with third-party vendors is solely between you and the third party. 1st Chicago Accounting shall not be responsible for any loss or damage incurred as a result of such dealings.
              </p>
            </div>

            {/* Registration */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Registration &amp; Passwords</h2>
              <p className="mb-4">
                To access certain features of the Site, you may be required to register and create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.
              </p>
              <p>
                If you suspect unauthorized use of your account, notify us immediately at <a href="mailto:brad@1stchicagoaccounting.com" className="text-blue-600 hover:underline">brad@1stchicagoaccounting.com</a>. We are not liable for any loss or damage arising from your failure to comply with this obligation.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the state in which 1st Chicago Accounting operates. Any dispute arising under these Terms shall be resolved exclusively through binding arbitration in that jurisdiction.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Changes to Terms of Service</h2>
              <p>
                We may update these Terms of Service from time to time. The latest version will always be available on our website with the effective date.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="mb-4">For any questions regarding these Terms of Service, please contact us at:</p>
              <div className="space-y-1 text-gray-700">
                <p className="font-semibold">1st Chicago Accounting</p>
                <p>17646 Crestview Ct., Orland Park, IL 60467</p>
                <p>Phone: <a href="tel:7084284980" className="text-blue-600 hover:underline">(708) 428-4980</a></p>
                <p>Email: <a href="mailto:brad@1stchicagoaccounting.com" className="text-blue-600 hover:underline">brad@1stchicagoaccounting.com</a></p>
                <p>Website: <a href="https://www.1stchicagoaccounting.com/" className="text-blue-600 hover:underline">https://www.1stchicagoaccounting.com/</a></p>
              </div>
              <p className="mt-5 text-sm text-gray-500 italic">
                By using our website and services, you consent to these Terms of Service.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
