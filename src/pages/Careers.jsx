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
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import useSeo from '../hooks/useSeo';

// Careers images provided by AGTPL
import techImg from '../assets/careers/work-with-advanced-technology.jpg';
import envImg from '../assets/careers/supportive-work-environment.jpg';
import learningImg from '../assets/careers/learning-and-growth.jpg';

export default function Careers() {
  useSeo(
    'Careers | Ascent Green Technologies Private Limited',
    'Build your future with Ascent Green Technologies. Explore job opportunities in service engineering, project execution, and sales & marketing in Faridabad, Haryana.'
  );

  const opportunities = [
    {
      title: "Service Engineer",
      description: "Electronics/ Electrical engineers, and technical specialists."
    },
    {
      title: "Project Execution",
      description: "Post order Handling."
    },
    {
      title: "Sales & Marketing",
      description: "Sales engineers, business development executives, and marketing professionals."
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

  const email = "rahulbhat@ascentgtpl.com";
  const subject = "Application for [Job Position]";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <div className="w-full font-body bg-light-bg py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* ================= 1. HEADER & INTRO ================= */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] font-bold tracking-widest text-[#003ea5] uppercase block bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-xs inline-block">
            BUILD YOUR FUTURE WITH US
          </span>
          <h1 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark tracking-wide">
            Careers at Ascent Green Technologies Private Limited
          </h1>
          <div className="w-16 h-1 bg-green mx-auto"></div>
          
          <h2 className="text-xl sm:text-2xl font-semibold text-text-dark pt-2">
            Grow Your Career. Innovate with Us.
          </h2>

          <div className="space-y-4 text-text-muted-dark text-sm sm:text-base leading-relaxed text-left sm:text-center pt-2">
            <p>
              At <strong className="text-text-dark">Ascent Green Technologies Private Limited</strong>, we believe that our people are the foundation of our success. As an automation-focused company, we are committed to innovation, technology, quality, and continuous improvement.
            </p>
            <p>
              We provide an environment where talented and passionate individuals can develop their skills, explore new opportunities, and build rewarding careers. Whether you are an experienced professional or a fresh graduate, we welcome individuals who are eager to learn, take on challenges, and contribute to technological advancement.
            </p>
          </div>
        </section>

        {/* ================= 2. JOB OPPORTUNITIES ================= */}
        <section className="bg-light-surface border border-border p-6 sm:p-8 rounded-sm shadow-xs space-y-6">
          <div className="border-b border-border/70 pb-4">
            <div className="flex items-center gap-2 text-text-dark">
              <Briefcase className="text-[#003ea5]" size={22} />
              <h3 className="font-headings text-2xl font-bold">
                Job Opportunities
              </h3>
            </div>
            <p className="text-sm text-text-muted-dark mt-2">
              We offer opportunities for skilled professionals and fresh talent across different departments, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {opportunities.map((job, idx) => (
              <div 
                key={idx}
                className="bg-white border border-border p-5 rounded-xs flex flex-col justify-between hover:border-[#003ea5]/50 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-[#003ea5] font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="font-headings text-base font-bold text-text-dark">
                      {job.title}
                    </h4>
                  </div>
                  <p className="text-xs text-text-muted-light leading-relaxed pl-8">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 3. CAREER GROWTH & DEVELOPMENT ================= */}
        <section className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-text-dark">
              <TrendingUp className="text-green" size={22} />
              <h3 className="font-headings text-2xl font-bold">
                Career Growth &amp; Development
              </h3>
            </div>
            <p className="text-sm text-text-muted-dark mt-2">
              At <strong className="text-text-dark">Ascent Green Technologies Private Limited</strong>, we believe career growth is a continuous journey. We encourage employees to enhance their professional capabilities through:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {growthPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div 
                  key={idx}
                  className="bg-light-surface border border-border p-5 rounded-sm flex items-start gap-3.5 hover:shadow-xs transition-shadow"
                >
                  <div className="p-2 rounded-xs bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 mt-0.5">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-headings text-sm font-bold text-text-dark">
                      {point.title}
                    </h4>
                    <p className="text-xs text-text-muted-dark mt-1 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= 4. WHY JOIN ASCENT GREEN TECHNOLOGIES? ================= */}
        <section className="space-y-6">
          <div className="text-center sm:text-left">
            <h3 className="font-headings text-2xl font-bold text-text-dark">
              Why Join Ascent Green Technologies?
            </h3>
            <div className="w-12 h-1 bg-green mt-2 sm:mx-0 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyJoinUs.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-light-surface border border-border rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group"
              >
                <div className="h-48 bg-slate-100 overflow-hidden border-b border-border">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-headings text-base font-bold text-text-dark mb-2 group-hover:text-green transition-colors">
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
        <section className="bg-gradient-to-br from-slate-900 via-[#0a2540] to-slate-900 text-white p-8 sm:p-10 rounded-sm shadow-md space-y-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-green-bright uppercase block">
              JOIN OUR TEAM
            </span>
            <h3 className="font-headings text-2xl sm:text-3xl font-bold text-white">
              Are you passionate about technology, automation, and innovation?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Do you want to be part of a team that works towards creating smarter and more efficient solutions? We are always interested in connecting with talented individuals who are enthusiastic, dedicated, and ready to grow with us.
            </p>
            <p className="text-sm font-medium text-slate-200">
              Take the next step in your career and become a part of Ascent Green Technologies Private Limited.
            </p>
          </div>

          {/* Apply Now Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm space-y-4">
            <h4 className="font-headings text-xl font-bold text-white">
              Apply Now
            </h4>
            <p className="text-xs text-slate-200">
              Interested candidates can share their updated resume with our HR team.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-3 rounded-xs">
                <Mail size={16} className="text-green-bright shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Email</span>
                  <a href={mailtoLink} className="text-white hover:text-green-bright font-semibold underline">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-3 rounded-xs">
                <Send size={16} className="text-green-bright shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Subject Line</span>
                  <span className="text-white font-semibold font-mono text-[11px]">{subject}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-3 rounded-xs sm:col-span-2">
                <MapPin size={16} className="text-green-bright shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Location</span>
                  <span className="text-white font-semibold">Faridabad, Haryana</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={mailtoLink}
                className="inline-flex items-center gap-2 bg-green hover:bg-green-bright text-white px-6 py-3 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                <span>Send Resume via Email</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Tagline Footer */}
          <div className="border-t border-white/15 pt-6 text-center space-y-1">
            <p className="text-xs italic text-slate-300">
              Your future starts here
            </p>
            <p className="font-headings text-sm sm:text-base font-bold text-white tracking-wide">
              Let's Grow Together. Let's Innovate Together.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
