import React, { useState } from 'react';
import { PageHero } from '../../components/layout/PageHero';
import { SCHOOL_INFO, contactData } from '../../data/schoolData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  MessageSquare
} from 'lucide-react';
import {
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
  LinkedInIcon,
  WhatsAppIcon
} from '../../components/ui/SocialIcons';

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    branch: 'Kovur - Main Campus',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError('Please fill in your name, contact phone, and message.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        eyebrow="CAMPUS CONNECT"
        title="Contact Our Campuses"
        subtitle="Reach out to our administrative deans, admissions officers, and campus coordinators."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-12 sm:py-16 bg-[#F8F6F0]">
        <div className="site-container space-y-12">
          
          {/* Main Contact Section: LEFT Google Map, RIGHT Comprehensive Contact Details */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* LEFT: Google Map */}
              <div className="lg:col-span-6 xl:col-span-7 relative min-h-[380px] lg:min-h-[500px] w-full bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-200">
                <iframe
                  title="Future Sunrise International School Campus Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9937748801967!2d80.1265882758839!3d13.036067713437175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260f0896ff62b%3A0x6b772c6cfb2f6ef3!2sKovur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full min-h-[380px] lg:min-h-[500px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-2 text-xs font-semibold text-[#102A43]">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A72C]" />
                  <span>Kovur Main Campus, Chennai</span>
                </div>
              </div>

              {/* RIGHT: Address, Phone, Email, Office Hours, WhatsApp, Social Media & CTA Buttons */}
              <div className="lg:col-span-6 xl:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4A72C] block mb-1">
                    Central Office
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43]">
                    Get in Touch
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2">
                    Our administrative deans and admissions counselors are here to assist with inquiries, campus visits, and academic admissions.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#102A43]/5 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#D4A72C]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#102A43]">Campus Address</p>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">{contactData.address}</p>
                    </div>
                  </div>

                  {/* Primary Phone: +91 98765 43210 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#102A43]/5 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-[#D4A72C]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#102A43]">Primary Telephone</p>
                      <a
                        href={contactData.phoneHref}
                        className="text-[#102A43] hover:text-[#1D4ED8] font-bold text-sm sm:text-base mt-0.5 inline-block"
                      >
                        {contactData.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#102A43]/5 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-[#D4A72C]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#102A43]">Email Inquiries</p>
                      <a
                        href={`mailto:${contactData.email}`}
                        className="text-slate-600 hover:text-[#102A43] mt-0.5 block"
                      >
                        {contactData.email}
                      </a>
                      <a
                        href={`mailto:${contactData.admissionEmail}`}
                        className="text-slate-500 hover:text-[#102A43] text-xs"
                      >
                        {contactData.admissionEmail}
                      </a>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#102A43]/5 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-[#D4A72C]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#102A43]">Office & Visiting Hours</p>
                      <p className="text-slate-600 mt-0.5">{contactData.officeHours}</p>
                      <p className="text-slate-500 text-xs">{contactData.administrativeHours}</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                      <WhatsAppIcon size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#102A43]">Admissions WhatsApp Desk</p>
                      <a
                        href={contactData.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:underline font-bold mt-0.5 block"
                      >
                        {contactData.phone} (Instant Chat)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media Channels with RECOGNIZABLE OFFICIAL PLATFORM BRAND COLOURS */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-700 block mb-2">
                    Follow Our School:
                  </span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={SCHOOL_INFO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:opacity-90 transition-transform hover:scale-105"
                      title="Instagram"
                      aria-label="Instagram"
                    >
                      <InstagramIcon size={20} />
                    </a>
                    <a
                      href={SCHOOL_INFO.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:opacity-90 transition-transform hover:scale-105"
                      title="YouTube"
                      aria-label="YouTube"
                    >
                      <YouTubeIcon size={20} />
                    </a>
                    <a
                      href={SCHOOL_INFO.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:opacity-90 transition-transform hover:scale-105"
                      title="Facebook"
                      aria-label="Facebook"
                    >
                      <FacebookIcon size={20} />
                    </a>
                    <a
                      href={SCHOOL_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:opacity-90 transition-transform hover:scale-105"
                      title="LinkedIn"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon size={20} />
                    </a>
                  </div>
                </div>

                {/* Action Buttons: Call School, WhatsApp, Get Directions */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <a
                    href={contactData.phoneHref}
                    className="min-h-[44px] px-3.5 py-2.5 bg-[#102A43] hover:bg-[#1D3A5F] text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4A72C]" />
                    <span>Call School</span>
                  </a>

                  <a
                    href={contactData.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <WhatsAppIcon size={16} />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Kovur+Chennai+Tamil+Nadu+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#102A43] font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 border border-slate-300/80"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#102A43]" />
                    <span>Get Directions</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Contact Form & Branches Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* 3 Campus Branches Breakdown */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#102A43]">
                  Our Campus Locations
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Three state-of-the-art campuses positioned strategically across Chennai.
                </p>
              </div>

              <div className="space-y-4">
                {SCHOOL_INFO.branches.map((branch) => (
                  <div key={branch.id} className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-base text-[#102A43]">{branch.name}</h4>
                      <span className="text-[10px] font-bold text-[#D4A72C] bg-[#D4A72C]/10 px-2 py-0.5 rounded uppercase">
                        {branch.grades}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#D4A72C] shrink-0 mt-0.5" />
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#D4A72C] shrink-0" />
                        <a href={`tel:${branch.phone}`} className="hover:text-[#102A43] font-medium">
                          {branch.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#D4A72C] shrink-0" />
                        <a href={`mailto:${branch.email}`} className="hover:text-[#102A43]">
                          {branch.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-[#102A43] text-white rounded-xl space-y-2">
                <h4 className="font-serif font-bold text-sm text-[#D4A72C]">Campus Visitor Guidelines</h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  To safeguard student well-being during active class hours, visitors are requested to carry government photo ID for security gate access passes.
                </p>
              </div>
            </div>

            {/* General Enquiry Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="mb-6">
                <h3 className="font-serif font-bold text-xl text-[#102A43]">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Have a question regarding admissions or academics? Leave your details below and our front office will respond within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-[#F8F6F0] rounded-xl border border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-[#102A43] text-[#D4A72C] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#102A43]">Inquiry Submitted Successfully</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you, <span className="font-semibold">{form.name}</span>. Your inquiry has been forwarded to the {form.branch} administration desk. Our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', branch: 'Kovur - Main Campus', message: '' });
                    }}
                    className="mt-3 text-xs font-bold text-[#102A43] underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && <p className="text-xs text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-200">{error}</p>}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Krishnan"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#102A43]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#102A43]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="parent@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#102A43]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Target Campus Branch</label>
                      <select
                        value={form.branch}
                        onChange={(e) => setForm({ ...form, branch: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#102A43]"
                      >
                        <option value="Kovur - Main Campus">Kovur (Main Campus)</option>
                        <option value="Rathinamangalam Campus">Rathinamangalam Campus</option>
                        <option value="Angadu (RedHills) Campus">Angadu (RedHills) Campus</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message or Inquiry Details *</label>
                    <textarea
                      rows={4}
                      placeholder="Please let us know your requirements or academic query..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#102A43]"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[44px] px-8 py-2.5 bg-[#102A43] hover:bg-[#1D3A5F] text-white font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
