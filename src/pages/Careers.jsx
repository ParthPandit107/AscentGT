import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  Award, 
  Mail, 
  MapPin, 
  Send,
  ArrowRight,
  Clock,
  Building
} from 'lucide-react';
import useSeo from '../hooks/useSeo';

// Authentic career images provided by AGTPL
import techImg from '../assets/careers/work-with-advanced-technology.jpg';
import envImg from '../assets/careers/supportive-work-environment.jpg';
import learningImg from '../assets/careers/learning-and-growth.jpg';

export default function Careers() {
  useSeo(
    'Careers | Ascent Green Technologies Private Limited',
    'Build your future with Ascent Green Technologies. Explore corporate career opportunities in service engineering, project execution, and sales & marketing in Faridabad, Haryana.'
  );

  const opportunities = [
    {
      title: "Service Engineer",
      department: "Engineering & Field Services",
      description: "Electronics/ Electrical engineers, and technical specialists.",
      scope: "Hands-on commissioning, site troubleshooting, drive programming, and motor-pump control integration.",
      location: "Faridabad, Haryana",
      type: "Full-Time",
      subject: "Application for Service Engineer - AGTPL"
    },
    {
      title: "Project Execution",
      department: "Operations & Project Delivery",
      description: "Post order Handling.",
      scope: "Coordinating electro-mechanical deliverables, technical submittals, testing oversight, logistics, and client site handover.",
      location: "Faridabad, Haryana",
      type: "Full-Time",
      subject: "Application for Project Execution - AGTPL"
    },
    {
      title: "Sales & Marketing",
      department: "Commercial & Business Development",
      description: "Sales engineers, business development executives, and marketing professionals.",
      scope: "Client relationship management, technical proposal generation, and OEM account engagement across ABB, Yaskawa, and KSB portfolios.",
      location: "Faridabad, Haryana",
      type: "Full-Time",
      subject: "Application for Sales & Marketing - AGTPL"
    }
  ];

  const growthPoints = [
    {
      title: "Technical Skill Development",
      description: "Opportunities to learn new technologies, tools, and systems.",
      icon: Lightbulb
    },
    {
      title: "Training & Learning",
      description: "Continuous learning through practical experience and professional training.",
      icon: GraduationCap
    },
    {
      title: "Career Advancement",
      description: "Opportunities to take on greater responsibilities and grow into leadership roles.",
      icon: TrendingUp
    },
    {
      title: "Team Collaboration",
      description: "Working with experienced professionals and learning through teamwork.",
      icon: Users
    },
    {
      title: "Innovation & Creativity",
      description: "Encouraging employees to share ideas and contribute to innovative solutions.",
      icon: Award
    },
    {
      title: "Professional Development",
      description: "Building technical knowledge, communication skills, and leadership abilities.",
      icon: Briefcase
    }
  ];

  const whyJoinUs = [
    {
      title: "Work with Advanced Technology",
      image: techImg,
      description: "Gain exposure to modern automation systems and industrial technologies."
    },
    {
      title: "Supportive Work Environment",
      image: envImg,
      description: "Work in a collaborative environment that values ideas, teamwork, and knowledge sharing."
    },
    {
      title: "Learning & Growth",
      image: learningImg,
      description: "Develop your professional skills and build expertise through practical experience."
    }
  ];

  const hrEmail = "rahulbhat@ascentgtpl.com";
  const defaultSubject = "Application for [Job Position]";
  const defaultMailto = `mailto:${hrEmail}?subject=${encodeURIComponent(defaultSubject)}`;

  return (
    <div className="w-full font-body bg-light-bg py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* ================= 1. HEADER & INTRO ================= */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-sky-deep uppercase block">
            BUILD YOUR FUTURE WITH US
          </span>
          <h1 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">
            Careers at <span className="text-[#84cc16]">ASCENT </span><span className="text-black">GREEN TECHNOLOGIES PVT. LTD.</span>
          </h1>
          <div className="w-16 h-1 bg-green mx-auto"></div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-text-dark pt-2">
            Grow Your Career. Innovate with Us.
          </h2>

          <div className="space-y-4 text-text-muted-dark text-sm sm:text-base leading-relaxed text-left sm:text-center pt-2">
            <p>
              At <strong className="text-black"><span className="text-[#84cc16]">ASCENT </span>GREEN TECHNOLOGIES PVT. LTD.</strong>, we believe that our people are the foundation of our success. As an automation-focused company, we are committed to innovation, technology, quality, and continuous improvement.
            </p>
            <p>
              We provide an environment where talented and passionate individuals can develop their skills, explore new opportunities, and build rewarding careers. Whether you are an experienced professional or a fresh graduate, we welcome individuals who are eager to learn, take on challenges, and contribute to technological advancement.
            </p>
          </div>
        </section>

        {/* ================= 2. JOB OPPORTUNITIES ================= */}
        <section className="bg-white border border-border p-6 sm:p-8 rounded-sm shadow-xs space-y-6">
          <div className="border-b border-border/80 pb-4">
            <div className="flex items-center gap-2.5 text-text-dark">
              <Briefcase className="text-sky-deep" size={24} />
              <h3 className="font-headings text-2xl font-bold">
                Job Opportunities
              </h3>
            </div>
            <p className="text-sm text-text-muted-dark mt-2">
              We offer opportunities for skilled professionals and fresh talent across different departments, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunities.map((job, idx) => (
              <div 
                key={idx}
                className="bg-sky-pale/30 border border-border rounded-sm p-6 flex flex-col justify-between hover:border-sky-deep/50 hover:shadow-xs transition-all"
              >
                <div className="space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-sky-deep uppercase tracking-wider block">
                      {job.department}
                    </span>
                    <h4 className="font-headings text-lg font-bold text-black">
                      {job.title}
                    </h4>
                  </div>

                  <p className="text-xs text-text-dark font-medium leading-relaxed">
                    {job.description}
                  </p>

                  <p className="text-xs text-text-muted-light leading-relaxed">
                    {job.scope}
                  </p>

                  <div className="pt-2 text-[11px] text-text-muted-dark space-y-1 font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-sky-deep shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-sky-deep shrink-0" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-border/60 mt-5">
                  <a
                    href={`mailto:${hrEmail}?subject=${encodeURIComponent(job.subject)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-deep hover:text-green transition-colors"
                  >
                    <span>Apply for this Role</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 3. CAREER GROWTH & DEVELOPMENT ================= */}
        <section className="space-y-6">
          <div>
            <div className="flex items-center gap-2.5 text-text-dark">
              <TrendingUp className="text-green" size={24} />
              <h3 className="font-headings text-2xl font-bold">
                Career Growth &amp; Development
              </h3>
            </div>
            <p className="text-sm text-text-muted-dark mt-2">
              At <strong className="text-black"><span className="text-[#84cc16]">ASCENT </span>GREEN TECHNOLOGIES PVT. LTD.</strong>, we believe career growth is a continuous journey. We encourage employees to enhance their professional capabilities through:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {growthPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-border border-l-4 border-l-green p-5 rounded-sm hover:shadow-xs transition-shadow space-y-2"
                >
                  <div className="flex items-center gap-2.5 text-text-dark">
                    <Icon size={18} className="text-green shrink-0" />
                    <h4 className="font-headings text-sm font-bold text-black">
                      {point.title}
                    </h4>
                  </div>
                  <p className="text-xs text-text-muted-dark leading-relaxed pl-7">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= 4. WHY JOIN ASCENT GREEN TECHNOLOGIES? ================= */}
        <section className="space-y-6">
          <div className="text-center sm:text-left">
            <h3 className="font-headings text-2xl font-bold text-black">
              Why Join <span className="text-[#84cc16]">ASCENT </span><span className="text-black">GREEN TECHNOLOGIES</span>?
            </h3>
            <div className="w-12 h-1 bg-green mt-2 sm:mx-0 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyJoinUs.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-white border border-border rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group"
              >
                <div className="h-52 bg-slate-100 overflow-hidden border-b border-border">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-headings text-base font-bold text-black mb-2 group-hover:text-green transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-text-muted-dark leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 5. JOIN OUR TEAM & APPLY NOW ================= */}
        <section className="bg-white border-2 border-sky-deep/20 rounded-sm p-8 sm:p-10 shadow-xs space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-sky-deep uppercase block">
              JOIN OUR TEAM
            </span>
            <h3 className="font-headings text-2xl sm:text-3xl font-bold text-black">
              Are you passionate about technology, automation, and innovation?
            </h3>
            <p className="text-sm text-text-muted-dark leading-relaxed">
              Do you want to be part of a team that works towards creating smarter and more efficient solutions? We are always interested in connecting with talented individuals who are enthusiastic, dedicated, and ready to grow with us.
            </p>
            <p className="text-sm font-semibold text-black">
              Take the next step in your career and become a part of <span className="text-[#84cc16]">ASCENT </span><span className="text-black">GREEN TECHNOLOGIES PVT. LTD.</span>
            </p>
          </div>

          {/* Corporate Application Box */}
          <div className="bg-sky-pale/40 border border-border p-6 rounded-sm space-y-5">
            <div>
              <h4 className="font-headings text-xl font-bold text-black">
                Apply Now
              </h4>
              <p className="text-xs text-text-muted-dark mt-1">
                Interested candidates can share their updated resume with our HR team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-white border border-border p-4 rounded-xs space-y-1">
                <div className="flex items-center gap-2 text-sky-deep font-bold text-[10px] uppercase tracking-wider">
                  <Mail size={14} />
                  <span>Email</span>
                </div>
                <a href={defaultMailto} className="text-black hover:text-green font-semibold block text-sm">
                  {hrEmail}
                </a>
              </div>

              <div className="bg-white border border-border p-4 rounded-xs space-y-1">
                <div className="flex items-center gap-2 text-sky-deep font-bold text-[10px] uppercase tracking-wider">
                  <Send size={14} />
                  <span>Subject Line</span>
                </div>
                <span className="text-black font-semibold font-mono text-xs block">
                  {defaultSubject}
                </span>
              </div>

              <div className="bg-white border border-border p-4 rounded-xs space-y-1">
                <div className="flex items-center gap-2 text-sky-deep font-bold text-[10px] uppercase tracking-wider">
                  <MapPin size={14} />
                  <span>Location</span>
                </div>
                <span className="text-black font-semibold block text-sm">
                  Faridabad, Haryana
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={defaultMailto}
                className="inline-flex items-center gap-2 bg-green hover:bg-green-bright text-white px-7 py-3 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                <span>Send Resume via Email</span>
                <Send size={14} />
              </a>
            </div>
          </div>

          {/* Tagline Footer */}
          <div className="border-t border-border/80 pt-6 text-center space-y-1">
            <p className="text-xs italic text-text-muted-light">
              Your future starts here
            </p>
            <p className="font-headings text-base font-bold text-black tracking-wide">
              Let's Grow Together. Let's Innovate Together.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}