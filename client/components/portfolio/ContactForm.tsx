import { useState } from "react";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  AlertCircle,
  CheckCircle,
  FileText,
  MapPin,
  Sparkles,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbz2MKNmtMAtlQ4Gj2pD5IWvGtE--uqei5-mLm4FmFUHU7TNgNrHii86n2KdouW-kEg/exec";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setStatus("loading");
    setErrorMessage("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    if (formData.number.trim()) {
      const phoneRegex = /^\+?[0-9\s\-]{7,20}$/;
      if (!phoneRegex.test(formData.number.trim())) {
        setStatus("error");
        setErrorMessage("Please enter a valid phone number");
        return;
      }
    }

    try {
      const body = new URLSearchParams();
      body.append("name", formData.name);
      body.append("number", formData.number);
      body.append("email", formData.email);
      body.append("subject", formData.subject);
      body.append("message", formData.message);

      const res = await fetch(WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status} ${res.statusText}`);
      }

      const json = await res.json();
      if (json && json.result === "success") {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        throw new Error(json?.error || "Unknown server response");
      }
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(
        error.message || "Failed to send message. Please try again.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Luxury Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-600"></div>
            <Sparkles className="text-yellow-600" size={20} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-600"></div>
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Have a project in mind? Let's discuss how we can work together to
            create something extraordinary
          </p>
        </div>

        {/* Luxury Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-600/30 rounded-2xl p-8 hover:border-yellow-600/60 transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-600 to-amber-600 flex items-center justify-center mb-5 shadow-lg shadow-yellow-600/20">
                <Mail className="text-black" size={28} />
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Email</h3>
              <p className="text-gray-400 text-sm">hello@example.com</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-600/30 rounded-2xl p-8 hover:border-yellow-600/60 transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-600 to-amber-600 flex items-center justify-center mb-5 shadow-lg shadow-yellow-600/20">
                <Phone className="text-black" size={28} />
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Phone</h3>
              <p className="text-gray-400 text-sm">+1 (234) 567-890</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-600/30 rounded-2xl p-8 hover:border-yellow-600/60 transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-600 to-amber-600 flex items-center justify-center mb-5 shadow-lg shadow-yellow-600/20">
                <MapPin className="text-black" size={28} />
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Location</h3>
              <p className="text-gray-400 text-sm">City, Country</p>
            </div>
          </div>
        </div>

        {/* Main Content - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form - Luxury Design */}
          <div
            className="group relative"
            style={{
              animation: `fadeInUp 0.6s ease-out both`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-amber-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-600/40 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-8 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-white">
                  Send a Message
                </h2>
              </div>

              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300 mb-2 tracking-wide"
                  >
                    FULL NAME <span className="text-yellow-600">*</span>
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none group-focus-within:text-yellow-600 transition-colors" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/50 border border-gray-800 focus:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600/20 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300 mb-2 tracking-wide"
                  >
                    EMAIL ADDRESS <span className="text-yellow-600">*</span>
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none group-focus-within:text-yellow-600 transition-colors" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/50 border border-gray-800 focus:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600/20 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="number"
                    className="block text-sm font-semibold text-gray-300 mb-3 tracking-wide"
                  >
                    PHONE NUMBER{" "}
                    <span className="text-gray-500 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none group-focus-within:text-yellow-600 transition-colors" />
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/50 border border-gray-800 focus:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600/20 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-300 mb-3 tracking-wide"
                  >
                    SUBJECT{" "}
                    <span className="text-gray-500 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <div className="relative group">
                    <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none group-focus-within:text-yellow-600 transition-colors" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project collaboration"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/50 border border-gray-800 focus:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600/20 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-300 mb-2 tracking-wide"
                  >
                    MESSAGE <span className="text-yellow-600">*</span>
                  </label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500 pointer-events-none group-focus-within:text-yellow-600 transition-colors" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/50 border border-gray-800 focus:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600/20 transition-all text-white placeholder:text-gray-600 resize-none"
                    />
                  </div>
                </div>

                {/* Success Message */}
                {status === "success" && (
                  <div className="p-4 rounded-xl bg-green-950/50 border border-green-600/50 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-green-400 font-medium">
                      Thank you! I'll get back to you shortly.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-950/50 border border-red-600/50 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-400 font-medium">{errorMessage}</p>
                  </div>
                )}

                {/* Luxury Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-yellow-600 to-amber-600 text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:from-yellow-500 hover:to-amber-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-yellow-600/30 hover:shadow-yellow-600/50"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Luxury Info Cards */}
          <div className="space-y-6">
            {/* Collaboration Types */}
            <div
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out 0.15s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-600/40 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-8 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-white">
                    Collaboration Types
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Paid Brand Collaborations",
                    "Long-term Partnerships",
                    "Ambassador Programs",
                    "Event Promotions",
                    "Content Creation",
                    "Consulting Services",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-gray-300 font-medium group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Response Time */}
            <div
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out 0.3s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/30 to-amber-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-yellow-600 via-amber-600 to-yellow-700 rounded-2xl p-6 shadow-xl shadow-yellow-600/20">
                <h3 className="font-bold text-black mb-2 text-lg flex items-center gap-2">
                  <Sparkles size={18} />
                  Response Time
                </h3>
                <p className="text-black/80 font-medium leading-relaxed text-sm">
                  I typically respond to inquiries within 24-48 hours. For
                  urgent projects, feel free to reach out directly.
                </p>
              </div>
            </div>

            {/* Follow Me */}
            <div
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out 0.45s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-600/40 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-1 w-8 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full"></div>
                  <h3 className="font-bold text-white text-lg">Follow Me</h3>
                </div>
                <p className="text-gray-400 mb-4 font-light text-sm">
                  Connect with me on social media for updates and
                  behind-the-scenes content
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Instagram", "LinkedIn", "X", "YouTube"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="px-5 py-2.5 text-sm font-bold text-black bg-gradient-to-r from-yellow-600 to-amber-600 rounded-lg hover:from-yellow-500 hover:to-amber-500 transition-all shadow-lg shadow-yellow-600/20 hover:shadow-yellow-600/40"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
