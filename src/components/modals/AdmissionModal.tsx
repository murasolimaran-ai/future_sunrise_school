import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { X, CheckCircle2, Phone, Mail, MapPin, Sparkles, Building2, User, GraduationCap } from 'lucide-react';

export const AdmissionModal: React.FC = () => {
  const { isAdmissionModalOpen, closeAdmissionModal } = useModal();

  const [formData, setFormData] = useState({
    studentName: '',
    preferredBranch: 'Kovur - Main Branch',
    fatherName: '',
    applyingFor: 'Grade 1',
    currentSchool: '',
    motherName: '',
    contactNo: '',
    email: '',
    foundUs: 'Search Engine',
    address: '',
    city: 'Chennai',
    pincode: '',
    consentAgreed: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isAdmissionModalOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Please enter student name.';
    }
    if (!formData.preferredBranch) {
      newErrors.preferredBranch = 'Please select a preferred branch.';
    }
    if (!formData.fatherName.trim()) {
      newErrors.fatherName = 'Please enter father name.';
    }
    if (!formData.motherName.trim()) {
      newErrors.motherName = 'Please enter mother name.';
    }
    if (!formData.applyingFor) {
      newErrors.applyingFor = 'Please select the grade applying for.';
    }
    if (!formData.currentSchool.trim()) {
      newErrors.currentSchool = 'Please enter current school or preschool.';
    }
    
    // Indian phone format check: 10 digits starting with 6-9
    const cleanPhone = formData.contactNo.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.contactNo = 'Please enter contact number.';
    } else if (cleanPhone.length !== 10 || !/^[6-9]/.test(cleanPhone)) {
      newErrors.contactNo = 'Please enter a valid 10-digit mobile number (starting with 6, 7, 8, or 9).';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.foundUs) {
      newErrors.foundUs = 'Please tell us where you found us.';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Please enter your residential address.';
    }

    if (!formData.consentAgreed) {
      newErrors.consentAgreed = 'Please confirm consent to be contacted.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Local successful validation
      setIsSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setErrors({});
    closeAdmissionModal();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#102A43]/75 backdrop-blur-xs transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admission-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeAdmissionModal();
      }}
    >
      <div className="relative w-full max-w-[840px] max-h-[92vh] flex flex-col bg-white rounded-xl shadow-2xl border border-[#D4A72C]/30 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#102A43] text-white px-5 sm:px-8 py-5 flex items-start justify-between border-b-2 border-[#D4A72C] shrink-0">
          <div>
            <div className="flex items-center gap-2 text-[#D4A72C] text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Academic Session 2026–27</span>
            </div>
            <h2 id="admission-modal-title" className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
              Admission Enquiry Form
            </h2>
            <p className="text-white/80 text-xs sm:text-sm mt-1">
              Fill up the form & one of our faculty members will reach you soon.
            </p>
          </div>

          <button
            onClick={closeAdmissionModal}
            className="w-10 h-10 -mr-2 -mt-2 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C]"
            aria-label="Close admission modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto px-5 sm:px-8 py-6 flex-1 bg-[#F8F6F0]/40">
          {isSubmitted ? (
            <div className="py-10 px-4 text-center max-w-md mx-auto flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#102A43] text-[#D4A72C] flex items-center justify-center mb-5 shadow-lg border border-[#D4A72C]/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43] mb-2">
                Thank You! 🎓
              </h3>
              <p className="text-sm sm:text-base text-[#263238] leading-relaxed mb-6">
                Your admission enquiry for <span className="font-semibold text-[#102A43]">{formData.studentName}</span> ({formData.applyingFor}) has been received successfully. Our admissions counselor will contact you within 24 business hours.
              </p>
              <div className="w-full bg-white p-4 rounded-lg border border-slate-200 text-left text-xs text-slate-600 mb-6 space-y-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-slate-700">Selected Branch:</span>
                  <span>{formData.preferredBranch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-slate-700">Contact Number:</span>
                  <span>+91 {formData.contactNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-slate-700">Enquiry Status:</span>
                  <span className="text-emerald-700 font-semibold">Priority Review</span>
                </div>
              </div>
              <button
                onClick={resetAndClose}
                className="w-full sm:w-auto px-8 py-3 bg-[#102A43] text-white font-medium text-sm rounded-lg hover:bg-[#1D3A5F] transition-colors shadow-md"
              >
                Back to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Branch Selection Highlight */}
              <div className="bg-white p-4 rounded-lg border border-[#102A43]/10 shadow-xs">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Preferred Branch <span className="text-rose-600">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'Kovur - Main Branch', label: 'Kovur (Main)', desc: 'Pre-KG to Gr 12' },
                    { id: 'Rathinamangalam', label: 'Rathinamangalam', desc: 'Pre-KG to Gr 10' },
                    { id: 'Angadu (RedHills)', label: 'Angadu (RedHills)', desc: 'Pre-KG to Gr 8' }
                  ].map((branch) => (
                    <label
                      key={branch.id}
                      className={`flex flex-col p-2.5 rounded-md border text-left cursor-pointer transition-all ${
                        formData.preferredBranch === branch.id
                          ? 'border-[#102A43] bg-[#102A43]/5 ring-1 ring-[#102A43]'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="preferredBranch"
                          value={branch.id}
                          checked={formData.preferredBranch === branch.id}
                          onChange={(e) => setFormData({ ...formData, preferredBranch: e.target.value })}
                          className="text-[#102A43] focus:ring-[#D4A72C]"
                        />
                        <span className="text-xs font-semibold text-[#102A43]">{branch.label}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 ml-5 mt-0.5">{branch.desc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Two-column layout for student & grade */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Student Name <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Aarav Sharma"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white text-sm rounded-lg border ${
                        errors.studentName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-[#102A43]'
                      } focus:outline-none`}
                    />
                  </div>
                  {errors.studentName && <p className="text-rose-600 text-xs mt-1">{errors.studentName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Applying For Grade <span className="text-rose-600">*</span>
                  </label>
                  <select
                    value={formData.applyingFor}
                    onChange={(e) => setFormData({ ...formData, applyingFor: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-white text-sm rounded-lg border border-slate-300 focus:border-[#102A43] focus:outline-none"
                  >
                    {[
                      'Pre-KG', 'LKG', 'UKG',
                      'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
                      'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
                      'Grade 11', 'Grade 12'
                    ].map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Parents Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Father Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Sharma"
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white text-sm rounded-lg border ${
                      errors.fatherName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-[#102A43]'
                    } focus:outline-none`}
                  />
                  {errors.fatherName && <p className="text-rose-600 text-xs mt-1">{errors.fatherName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Mother Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    value={formData.motherName}
                    onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                    className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white text-sm rounded-lg border ${
                      errors.motherName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-[#102A43]'
                    } focus:outline-none`}
                  />
                  {errors.motherName && <p className="text-rose-600 text-xs mt-1">{errors.motherName}</p>}
                </div>
              </div>

              {/* Current School & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Current School Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Little Scholars Preschool / None"
                    value={formData.currentSchool}
                    onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                    className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white text-sm rounded-lg border ${
                      errors.currentSchool ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-[#102A43]'
                    } focus:outline-none`}
                  />
                  {errors.currentSchool && <p className="text-rose-600 text-xs mt-1">{errors.currentSchool}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Contact No. <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-xs font-semibold text-slate-500">+91</span>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="98765 43210"
                      value={formData.contactNo}
                      onChange={(e) => setFormData({ ...formData, contactNo: e.target.value.replace(/\D/g, '') })}
                      className={`w-full min-h-[44px] pl-11 pr-3.5 py-2.5 bg-white text-sm rounded-lg border ${
                        errors.contactNo ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-[#102A43]'
                      } focus:outline-none`}
                    />
                  </div>
                  {errors.contactNo && <p className="text-rose-600 text-xs mt-1">{errors.contactNo}</p>}
                </div>
              </div>

              {/* Email & Referral */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white text-sm rounded-lg border ${
                      errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-[#102A43]'
                    } focus:outline-none`}
                  />
                  {errors.email && <p className="text-rose-600 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Where did you find us? <span className="text-rose-600">*</span>
                  </label>
                  <select
                    value={formData.foundUs}
                    onChange={(e) => setFormData({ ...formData, foundUs: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-white text-sm rounded-lg border border-slate-300 focus:border-[#102A43] focus:outline-none"
                  >
                    {[
                      'Search Engine',
                      'Facebook',
                      'Instagram',
                      'LinkedIn',
                      'YouTube',
                      'Offline Banner / Posters',
                      'Friend / Relative',
                      'School Event',
                      'Others'
                    ].map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Residential Address <span className="text-rose-600">*</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Door No, Street Name, Area..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className={`w-full px-3.5 py-2.5 bg-white text-sm rounded-lg border ${
                    errors.address ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-[#102A43]'
                  } focus:outline-none`}
                />
                {errors.address && <p className="text-rose-600 text-xs mt-1">{errors.address}</p>}
              </div>

              {/* City & Pincode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    City <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Chennai"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-white text-sm rounded-lg border border-slate-300 focus:border-[#102A43] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Pincode <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="600128"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '') })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-white text-sm rounded-lg border border-slate-300 focus:border-[#102A43] focus:outline-none"
                  />
                </div>
              </div>

              {/* Privacy note & Consent checkbox */}
              <div className="pt-2 border-t border-slate-200">
                <p className="text-[11px] text-slate-500 leading-normal mb-2.5">
                  Please note that your personal information entered by you is used only for internal admission purposes and to contact you regarding admission.
                </p>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consentAgreed}
                    onChange={(e) => setFormData({ ...formData, consentAgreed: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded text-[#102A43] focus:ring-[#D4A72C]"
                  />
                  <span className="text-xs text-slate-700 font-medium select-none">
                    I agree to be contacted regarding my admission enquiry. <span className="text-rose-600">*</span>
                  </span>
                </label>
                {errors.consentAgreed && <p className="text-rose-600 text-xs mt-1">{errors.consentAgreed}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[48px] bg-[#D4A72C] hover:bg-[#B3881E] text-[#102A43] font-bold text-sm sm:text-base py-3 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>Submit Admission Enquiry →</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
