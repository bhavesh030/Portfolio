import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Globe,
  Wrench,
  GraduationCap,
  Briefcase,
  Menu,
  X,
  ArrowRight,
  Send,
  ChevronDown,
  MapPin,
  Star,
} from "lucide-react";

/* ---------- data ---------- */

const NAV_LINKS = ["About", "Skills", "Projects", "Education", "Experience", "Contact"];

const SKILL_CATEGORIES = [
  {
    icon: Code2,
    title: "Programming",
    gradient: "from-blue-500 to-cyan-400",
    glow: "#4f8ef7",
    skills: ["Python", "Java", "C#", "SQL"],
  },
  {
    icon: Globe,
    title: "Web Development",
    gradient: "from-purple-500 to-pink-400",
    glow: "#8b5cf6",
    skills: ["HTML", "CSS", "ASP.NET MVC"],
  },
];

const PROJECTS = [
  {
    title: "Movie Recommendation System",
    description:
      "Intelligent recommendation engine that suggests movies based on user preferences using collaborative filtering and content-based ML algorithms.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask"],
    github: "https://github.com/bhaveshyeole",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=360&fit=crop&auto=format",
    gradient: "from-blue-600/20 to-purple-600/20",
  },
  {
    title: "Smart Attendance System",
    description:
      "Automated attendance tracking with facial recognition technology, reducing manual overhead and improving accuracy in educational institutions.",
    tech: ["Python", "OpenCV", "Deep Learning", "Flask", "SQLite"],
    github: "https://github.com/bhaveshyeole",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=360&fit=crop&auto=format",
    gradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    title: "Image Processing Application",
    description:
      "Comprehensive image processing tool with real-time filters, transformations, and computer vision capabilities for analytical workflows.",
    tech: ["Python", "OpenCV", "NumPy", "Tkinter", "PIL"],
    github: "https://github.com/bhaveshyeole",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=360&fit=crop&auto=format",
    gradient: "from-cyan-600/20 to-blue-600/20",
  },
];

const CERTIFICATIONS = [];

/* ---------- helpers ---------- */

function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="h-px w-8 bg-gradient-to-r from-blue-500 to-purple-500" />
      <span
        className="text-xs font-mono uppercase tracking-[0.2em]"
        style={{ color: "#6b7aaa", fontFamily: "'Geist Mono', monospace" }}
      >
        {children}
      </span>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-4xl md:text-5xl font-bold mb-4"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}
    >
      {children}
    </h2>
  );
}

/* ---------- Glass card ---------- */
const glassStyle: React.CSSProperties = {
  background: "rgba(10, 15, 46, 0.6)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(79, 142, 247, 0.12)",
};

/* ---------- App ---------- */

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const scrolled = useScrolled();

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "education", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "#04061a",
        color: "#e8eeff",
        fontFamily: "'Figtree', sans-serif",
      }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(79,142,247,0.3); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(79,142,247,0.5); }
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(60px,-80px) scale(1.15); }
          66% { transform: translate(-40px,40px) scale(0.9); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(-70px,60px) scale(0.88); }
          66% { transform: translate(50px,-30px) scale(1.12); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,50px) scale(1.08); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .gradient-text {
          background: linear-gradient(135deg, #4f8ef7 0%, #8b5cf6 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #4f8ef7, #8b5cf6, #06b6d4, #4f8ef7);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(79,142,247,0.15);
          border-color: rgba(79,142,247,0.3) !important;
        }
        .btn-primary {
          background: linear-gradient(135deg, #4f8ef7, #6366f1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-primary:hover::after { opacity: 1; }
        .btn-primary span { position: relative; z-index: 1; }
        .btn-outline {
          border: 1px solid rgba(79,142,247,0.35);
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          border-color: rgba(79,142,247,0.7);
          background: rgba(79,142,247,0.08);
          box-shadow: 0 0 20px rgba(79,142,247,0.12);
        }
        .nav-link {
          position: relative;
          transition: color 0.2s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: linear-gradient(90deg, #4f8ef7, #8b5cf6);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .skill-tag {
          background: rgba(79,142,247,0.08);
          border: 1px solid rgba(79,142,247,0.15);
          transition: all 0.2s ease;
        }
        .skill-tag:hover {
          background: rgba(79,142,247,0.15);
          border-color: rgba(79,142,247,0.35);
        }
        .tech-tag {
          background: rgba(139,92,246,0.1);
          border: 1px solid rgba(139,92,246,0.2);
          font-family: 'Geist Mono', monospace;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: rgba(79,142,247,0.5) !important;
          box-shadow: 0 0 0 3px rgba(79,142,247,0.08);
        }
      `}</style>

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 h-16"
        style={{
          background: scrolled ? "rgba(4, 6, 26, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(79,142,247,0.1)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <button
          onClick={() => scrollTo("home")}
          className="text-lg font-bold tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <span className="gradient-text">BY</span>
          <span style={{ color: "#6b7aaa" }}>.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`nav-link text-sm font-medium ${activeSection === link.toLowerCase() ? "active" : ""}`}
              style={{ color: activeSection === link.toLowerCase() ? "#e8eeff" : "#6b7aaa" }}
            >
              {link}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold btn-primary text-white"
        >
          <span>Hire Me</span>
          <ArrowRight size={14} />
        </button>

        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#e8eeff" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-16 z-40 p-4"
          style={{
            background: "rgba(4, 6, 26, 0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(79,142,247,0.12)",
          }}
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
                style={{
                  color: activeSection === link.toLowerCase() ? "#4f8ef7" : "#94aeff",
                  background: activeSection === link.toLowerCase() ? "rgba(79,142,247,0.08)" : "transparent",
                }}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-3 px-4 py-3 rounded-xl text-sm font-semibold btn-primary text-white text-center"
            >
              <span>Hire Me</span>
            </button>
          </div>
        </motion.div>
      )}

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute rounded-full opacity-25"
            style={{
              width: 700,
              height: 700,
              top: "-10%",
              left: "-15%",
              background: "radial-gradient(circle, #4f8ef7 0%, transparent 70%)",
              animation: "blob1 18s ease-in-out infinite",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute rounded-full opacity-20"
            style={{
              width: 600,
              height: 600,
              bottom: "-10%",
              right: "-10%",
              background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
              animation: "blob2 22s ease-in-out infinite",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute rounded-full opacity-15"
            style={{
              width: 400,
              height: 400,
              top: "40%",
              left: "50%",
              background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
              animation: "blob3 14s ease-in-out infinite",
              filter: "blur(60px)",
            }}
          />
          {/* Grid overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(79,142,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.03) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(79,142,247,0.1)",
                    border: "1px solid rgba(79,142,247,0.25)",
                    color: "#94aeff",
                    fontFamily: "'Geist Mono', monospace",
                    letterSpacing: "0.05em",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#10b981", boxShadow: "0 0 8px #10b981" }}
                  />
                  Available for Internship
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-3 leading-none"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#e8eeff",
                }}
              >
                Bhavesh
                <br />
                <span className="gradient-text">Yeole</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-xl font-semibold mb-6"
                style={{ color: "#94aeff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Software Developer &amp; Engineering Student
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="text-base leading-relaxed mb-10 max-w-md"
                style={{ color: "#6b7aaa" }}
              >
                Passionate about Web Development, Python Programming, ASP.NET MVC Development, and
                Database Management. Seeking internship opportunities to gain industry experience
                and build impactful software solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollTo("projects")}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm btn-primary text-white"
                >
                  <span>View Projects</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm btn-outline"
                  style={{ color: "#e8eeff" }}
                >
                  <span>Contact Me</span>
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.75 }}
                className="flex items-center gap-6 mt-10"
              >
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/bhavesh-yeole", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:bhaveshyeole@gmail.com", label: "Email" },
                  { icon: Phone, href: "tel:+917304211205", label: "Phone" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center w-10 h-10 rounded-xl transition-all"
                    style={{
                      background: "rgba(79,142,247,0.08)",
                      border: "1px solid rgba(79,142,247,0.15)",
                      color: "#6b7aaa",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#4f8ef7";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#6b7aaa";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.15)";
                    }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Profile visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #4f8ef7, #8b5cf6, #06b6d4, #4f8ef7)",
                    padding: 3,
                    borderRadius: "50%",
                    filter: "blur(1px)",
                  }}
                />
                {/* Avatar container */}
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0d1540 0%, #1a0a3d 100%)",
                    border: "3px solid transparent",
                    backgroundClip: "padding-box",
                    boxShadow: "0 0 80px rgba(79,142,247,0.3), 0 0 40px rgba(139,92,246,0.2), inset 0 0 40px rgba(79,142,247,0.05)",
                  }}
                >
                  <div className="text-center">
                    <div
                      className="text-6xl font-black mb-2 gradient-text"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      BY
                    </div>
                    <div
                      className="text-xs font-medium tracking-widest uppercase"
                      style={{
                        color: "#6b7aaa",
                        fontFamily: "'Geist Mono', monospace",
                        letterSpacing: "0.25em",
                      }}
                    >
                      Developer
                    </div>
                  </div>

                  {/* Orbiting dots */}
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        background: i % 2 === 0 ? "#4f8ef7" : "#8b5cf6",
                        boxShadow: `0 0 8px ${i % 2 === 0 ? "#4f8ef7" : "#8b5cf6"}`,
                        top: `${50 + 47 * Math.sin((deg * Math.PI) / 180)}%`,
                        left: `${50 + 47 * Math.cos((deg * Math.PI) / 180)}%`,
                        transform: "translate(-50%, -50%)",
                        opacity: 0.7,
                      }}
                    />
                  ))}
                </div>

                {/* Floating badges */}
                {[
                  { label: "Python", color: "#4f8ef7", pos: { top: "5%", right: "-12%" } },
                  { label: "Web Dev", color: "#8b5cf6", pos: { bottom: "15%", left: "-18%" } },
                  { label: "ASP.NET MVC", color: "#06b6d4", pos: { bottom: "5%", right: "-8%" } },
                ].map(({ label, color, pos }) => (
                  <div
                    key={label}
                    className="absolute px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
                    style={{
                      ...pos,
                      background: `rgba(${color === "#4f8ef7" ? "79,142,247" : color === "#8b5cf6" ? "139,92,246" : "6,182,212"},0.12)`,
                      border: `1px solid ${color}30`,
                      color,
                      fontFamily: "'Geist Mono', monospace",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => scrollTo("about")}
          >
            <span className="text-xs" style={{ color: "#6b7aaa", fontFamily: "'Geist Mono', monospace", letterSpacing: "0.15em" }}>
              SCROLL
            </span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronDown size={16} style={{ color: "#4f8ef7" }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────── */}
      <section id="about" className="py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>About Me</SectionLabel>
            <SectionHeading>
              Building <span className="gradient-text">Software</span> That Matters
            </SectionHeading>
            <p className="text-base leading-relaxed max-w-xl mb-16" style={{ color: "#6b7aaa" }}>
              A dedicated engineering student focused on building practical web and software solutions
              that solve real-world problems.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeUp delay={0.1} className="lg:col-span-2">
              <div className="rounded-2xl p-8 h-full card-hover" style={glassStyle}>
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                    style={{ background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.2)" }}
                  >
                    <GraduationCap size={22} style={{ color: "#4f8ef7" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Engineering Student
                    </h3>
                    <p className="text-sm" style={{ color: "#6b7aaa" }}>
                      B.E. · Datta Meghe College of Engineering
                    </p>
                  </div>
                </div>
                <p className="text-base leading-relaxed" style={{ color: "#94aeff" }}>
                  Engineering student with skills in HTML, CSS, Python, Java, ASP.NET MVC, C#, and SQL.
                  Passionate about building web applications and continuously learning modern software
                  development technologies.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Web Development", "ASP.NET MVC", "Python", "Full Stack"].map((tag) => (
                    <span key={tag} className="skill-tag px-3 py-1 rounded-full text-xs font-medium" style={{ color: "#94aeff" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="rounded-2xl p-8 h-full card-hover" style={glassStyle}>
                <div className="text-center mb-6">
                  <div
                    className="text-5xl font-black mb-2 shimmer-text"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    6.8
                  </div>
                  <div className="text-sm font-medium" style={{ color: "#6b7aaa" }}>Current CGPA</div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Algorithms", val: 82 },
                    { label: "Web Development", val: 88 },
                    { label: "Programming", val: 90 },
                  ].map(({ label, val }) => (
                    <div key={label}>
                      <div className="flex justify-between text-xs mb-1" style={{ color: "#6b7aaa" }}>
                        <span>{label}</span>
                        <span>{val}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: "rgba(79,142,247,0.1)" }}>
                        <div
                          className="h-1.5 rounded-full"
                          style={{
                            width: `${val}%`,
                            background: "linear-gradient(90deg, #4f8ef7, #8b5cf6)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {[
              { icon: Globe, title: "Web Development", desc: "Building responsive web apps with HTML, CSS, JavaScript, and ASP.NET MVC.", color: "#8b5cf6" },
              { icon: Code2, title: "Python & Java", desc: "Writing clean, efficient code for backend logic, automation, and software solutions.", color: "#06b6d4" },
              { icon: Wrench, title: "Database Management", desc: "Designing and querying relational databases with SQL for structured data storage.", color: "#10b981" },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={0.1 * (i + 3)}>
                <div className="rounded-2xl p-6 card-hover" style={glassStyle}>
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <h4 className="font-bold mb-2 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7aaa" }}>
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────────────── */}
      <section id="skills" className="py-28 px-6 md:px-12" style={{ background: "rgba(10,15,46,0.3)" }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Technical Skills</SectionLabel>
            <SectionHeading>
              My <span className="gradient-text">Expertise</span>
            </SectionHeading>
            <p className="text-base leading-relaxed max-w-xl mb-16" style={{ color: "#6b7aaa" }}>
              A curated stack of languages and frameworks I use to build web and software solutions.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {SKILL_CATEGORIES.map((cat, i) => (
              <FadeUp key={cat.title} delay={0.1 * i}>
                <div
                  className="rounded-2xl p-6 h-full card-hover group"
                  style={{
                    ...glassStyle,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${cat.glow}08 0%, transparent 70%)`,
                    }}
                  />
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl mb-5 bg-gradient-to-br ${cat.gradient}`}
                    style={{ boxShadow: `0 4px 20px ${cat.glow}30` }}
                  >
                    <cat.icon size={22} className="text-white" />
                  </div>
                  <h3
                    className="font-bold text-base mb-4"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag px-3 py-1 rounded-full text-xs font-medium"
                        style={{ color: "#94aeff" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────────────── */}
      <section id="projects" className="py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Projects</SectionLabel>
            <SectionHeading>
              Featured <span className="gradient-text">Work</span>
            </SectionHeading>
            <p className="text-base leading-relaxed max-w-xl mb-16" style={{ color: "#6b7aaa" }}>
              A selection of AI and data science projects that demonstrate my technical capabilities.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <FadeUp key={project.title} delay={0.1 * i}>
                <div
                  className="rounded-2xl overflow-hidden card-hover group flex flex-col h-full"
                  style={glassStyle}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundColor: "#0a0f2e" }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent`}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,6,26,0.8) 0%, transparent 60%)" }} />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className="font-bold text-lg mb-3"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#6b7aaa" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-tag px-2.5 py-1 rounded-md text-xs" style={{ color: "#94aeff" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl btn-outline w-fit transition-all"
                      style={{ color: "#e8eeff" }}
                    >
                      <Github size={15} />
                      View on GitHub
                      <ExternalLink size={13} style={{ color: "#6b7aaa" }} />
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ───────────────────────────────────────────────── */}
      <section id="education" className="py-28 px-6 md:px-12" style={{ background: "rgba(10,15,46,0.3)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <SectionLabel>Education</SectionLabel>
            <SectionHeading>
              Academic <span className="gradient-text">Journey</span>
            </SectionHeading>
          </FadeUp>

          <div className="relative mt-16">
            {/* Timeline line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #4f8ef7, #8b5cf6, transparent)" }}
            />

            {[
              {
                year: "2022 – Present",
                degree: "B.E. Artificial Intelligence & Data Science",
                school: "Datta Meghe College of Engineering",
                location: "Airoli, Navi Mumbai",
                cgpa: "6.8",
                details: [
                  "Core subjects: Data Structures, OOP, Web Technology, Database Management, C#",
                  "Projects: Movie Recommendation System, Smart Attendance, Image Processing App",
                  "Active in Tech Clubs & Hackathons",
                ],
              },
              {
                year: "2020 – 2022",
                degree: "Higher Secondary Certificate (HSC)",
                school: "Science Stream",
                location: "Maharashtra State Board",
                cgpa: "72%",
                details: [
                  "Physics, Chemistry, Mathematics, Computer Science",
                  "Foundation in calculus, statistics, and programming",
                ],
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={0.15 * i}>
                <div className="relative flex gap-10 mb-10 pl-16">
                  {/* Node */}
                  <div
                    className="absolute left-0 top-6 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #4f8ef7, #8b5cf6)",
                      boxShadow: "0 0 20px rgba(79,142,247,0.4)",
                      border: "3px solid #04061a",
                    }}
                  >
                    <GraduationCap size={20} className="text-white" />
                  </div>

                  <div className="rounded-2xl p-7 w-full card-hover" style={glassStyle}>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div
                          className="text-xs font-medium mb-2"
                          style={{
                            color: "#4f8ef7",
                            fontFamily: "'Geist Mono', monospace",
                            letterSpacing: "0.1em",
                          }}
                        >
                          {item.year}
                        </div>
                        <h3
                          className="text-lg font-bold mb-1"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium" style={{ color: "#94aeff" }}>
                            {item.school}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-1" style={{ color: "#6b7aaa" }}>
                          <MapPin size={12} />
                          <span className="text-xs">{item.location}</span>
                        </div>
                      </div>
                      <div
                        className="px-4 py-2 rounded-xl text-center"
                        style={{ background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.2)" }}
                      >
                        <div
                          className="text-xl font-black shimmer-text"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {item.cgpa}
                        </div>
                        <div className="text-xs" style={{ color: "#6b7aaa" }}>CGPA</div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {item.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#6b7aaa" }}>
                          <span style={{ color: "#4f8ef7", marginTop: 4, flexShrink: 0 }}>▸</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ──────────────────────────────────────────────── */}
      <section id="experience" className="py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Experience</SectionLabel>
            <SectionHeading>
              Open to <span className="gradient-text">Opportunities</span>
            </SectionHeading>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <FadeUp delay={0.1}>
              <div
                className="rounded-2xl p-8 relative overflow-hidden card-hover"
                style={{
                  background: "linear-gradient(135deg, rgba(79,142,247,0.08) 0%, rgba(139,92,246,0.08) 100%)",
                  border: "1px solid rgba(79,142,247,0.2)",
                }}
              >
                <div
                  className="absolute -top-20 -right-20 w-56 h-56 rounded-full opacity-10"
                  style={{ background: "radial-gradient(circle, #4f8ef7, transparent)" }}
                />
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "#10b981", boxShadow: "0 0 10px #10b981" }}
                  />
                  <span className="text-sm font-semibold" style={{ color: "#10b981" }}>
                    Available for Internship
                  </span>
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Seeking Internship Roles
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7aaa" }}>
                  Actively seeking internship opportunities in Software Development, Web Development,
                  Python Development, ASP.NET MVC, and Database Management.
                </p>
                <button
                  onClick={() => scrollTo("contact")}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm btn-primary text-white"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </FadeUp>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, label: "Web Dev", color: "#4f8ef7", desc: "HTML, CSS, ASP.NET MVC applications" },
                { icon: Code2, label: "Python Dev", color: "#8b5cf6", desc: "Scripts, automation, backend APIs" },
                { icon: Wrench, label: "ASP.NET MVC", color: "#06b6d4", desc: "C# MVC web application development" },
                { icon: Briefcase, label: "Database", color: "#10b981", desc: "SQL, schema design, querying" },
              ].map((item, i) => (
                <FadeUp key={item.label} delay={0.1 + 0.1 * i}>
                  <div className="rounded-xl p-5 h-full card-hover" style={glassStyle}>
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg mb-3"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                    >
                      <item.icon size={18} style={{ color: item.color }} />
                    </div>
                    <div className="font-bold text-sm mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {item.label}
                    </div>
                    <div className="text-xs leading-relaxed" style={{ color: "#6b7aaa" }}>
                      {item.desc}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── CONTACT ─────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Contact</SectionLabel>
            <SectionHeading>
              Let&apos;s <span className="gradient-text">Connect</span>
            </SectionHeading>
            <p className="text-base leading-relaxed max-w-xl mb-16" style={{ color: "#6b7aaa" }}>
              Open to internship opportunities, collaborations, and interesting projects. Drop me a
              message — I usually respond within 24 hours.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <FadeUp delay={0.1}>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "bhaveshyeole@gmail.com", href: "mailto:bhaveshyeole@gmail.com", color: "#4f8ef7" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/bhavesh-yeole", href: "https://www.linkedin.com/in/bhavesh-yeole", color: "#8b5cf6" },
                  { icon: Phone, label: "Phone", value: "+91 73042 11205", href: "tel:+917304211205", color: "#06b6d4" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 rounded-2xl group card-hover"
                    style={glassStyle}
                  >
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 transition-all"
                      style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                    >
                      <item.icon size={20} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-xs font-medium mb-0.5" style={{ color: "#6b7aaa" }}>
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold" style={{ color: "#e8eeff" }}>
                        {item.value}
                      </div>
                    </div>
                    <ExternalLink
                      size={14}
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "#6b7aaa" }}
                    />
                  </a>
                ))}
              </div>
            </FadeUp>

            {/* Form */}
            <FadeUp delay={0.2}>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8"
                style={glassStyle}
              >
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Send a Message
                </h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "#6b7aaa" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all"
                      style={{
                        background: "rgba(79,142,247,0.05)",
                        border: "1px solid rgba(79,142,247,0.15)",
                        color: "#e8eeff",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "#6b7aaa" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all"
                      style={{
                        background: "rgba(79,142,247,0.05)",
                        border: "1px solid rgba(79,142,247,0.15)",
                        color: "#e8eeff",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "#6b7aaa" }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity or project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all resize-none"
                      style={{
                        background: "rgba(79,142,247,0.05)",
                        border: "1px solid rgba(79,142,247,0.15)",
                        color: "#e8eeff",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm btn-primary text-white"
                  >
                    {formSent ? (
                      <>
                        <span>Message Sent!</span>
                        <Star size={15} />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer
        className="py-12 px-6 md:px-12"
        style={{ borderTop: "1px solid rgba(79,142,247,0.1)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div
              className="text-xl font-black mb-1 gradient-text"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Bhavesh Yeole
            </div>
            <div className="text-xs" style={{ color: "#6b7aaa" }}>
              Software Developer &amp; Engineering Student · Maharashtra, India
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/bhavesh-yeole", label: "LinkedIn" },
              { icon: Mail, href: "mailto:bhaveshyeole@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+917304211205", label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg transition-all"
                style={{
                  background: "rgba(79,142,247,0.08)",
                  border: "1px solid rgba(79,142,247,0.15)",
                  color: "#6b7aaa",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#4f8ef7";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#6b7aaa";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.15)";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="text-xs text-center" style={{ color: "#6b7aaa" }}>
            © {new Date().getFullYear()} Bhavesh Yeole · Built with React &amp; ❤️
          </div>
        </div>
      </footer>
    </div>
  );
}
