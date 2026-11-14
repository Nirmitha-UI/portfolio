import { Icons } from "@/components/icons";
import { Bot, HomeIcon, NotebookIcon, Layers, Sparkles } from "lucide-react";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";

// ---------------------------------------------------------------------------
// All personal content for the site lives in this one file.
// Anything in [square brackets] is a placeholder for you to fill in.
// Images: put files in /public and reference them as "/file-name.png".
// ---------------------------------------------------------------------------

export const DATA = {
  name: "Nirmitha Balasuriya",
  initials: "NB",
  url: "https://nirmitha-portfolio.pages.dev",
  location: "Malabe, Sri Lanka",
  locationLink: "https://www.google.com/maps/place/Malabe",
  description:
    "UI/UX Engineer, Product Designer and Web Developer from Sri Lanka. I design and build web, mobile and AI-powered products.",
  summary:
    "I'm a UI/UX Engineer and Product Designer focused on creating digital experiences where design, technology and AI come together. My experience is rooted in the media industry, where I've designed and developed AI-powered solutions, web and mobile products, and 50+ digital experiences across TV Derana and its related brands. I also work across FinTech, CRM, LMS, e-commerce and business management, turning complex requirements into simple, scalable and user-friendly products for clients in Sri Lanka, the UK and Australia. With a [Software Engineering background](/#education) and hands-on experience with Figma, Next.js, Tailwind, WordPress, Framer and Webflow, I bridge the gap between design and development. Some of the products I've worked on have been [recognized at BestWeb.lk and the National AI Awards](/#hackathons).",
  // Put your photo at /public/me.png (square, at least 400x400). Until then your initials show.
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Figma", logo: "/skills/figma.svg" },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", logo: "/skills/react.svg" },
    { name: "TypeScript", logo: "/skills/typescript.svg" },
    { name: "Tailwind CSS", logo: "/skills/tailwindcss.svg" },
    { name: "HTML & CSS", logo: "/skills/html5.svg" },
    { name: "WordPress", logo: "/skills/wordpress.svg" },
    { name: "Framer", logo: "/skills/framer.svg" },
    { name: "Webflow", logo: "/skills/webflow.svg" },
    { name: "Docker", logo: "/skills/docker.svg" },
    { name: "Kubernetes", logo: "/skills/kubernetes.svg" },
    { name: "AWS", logo: "/skills/amazonwebservices.svg" },
    { name: "AI Product Design", icon: Sparkles },
    { name: "AI Solutions", icon: Bot },
    { name: "Design Systems", icon: Layers },
  ] as {
    name: string;
    logo?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bnirmitha1@gmail.com",
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nirmitha99",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nirmithabalasuriya",
        icon: Icons.github,
        navbar: true,
      },
      Dribbble: {
        name: "Dribbble",
        url: "https://dribbble.com/nirmitha99",
        icon: Icons.dribbble,
        navbar: true,
      },
      Behance: {
        name: "Behance",
        url: "https://www.behance.net/nirmithbalasur",
        icon: Icons.behance,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@bnirmitha1",
        icon: Icons.medium,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:bnirmitha1@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Macro Labs",
      href: "",
      badges: [],
      location: "Colombo, Sri Lanka",
      title: "Senior UI/UX Engineer (Executive Grade)",
      logoUrl: "/work/macro-labs.jpg",
      start: "June 2026",
      end: "Present",
      description: "[Add your key responsibilities and products in this role.]",
    },
    {
      company: "Macro Labs",
      href: "",
      badges: [],
      location: "Colombo, Sri Lanka",
      title: "UI/UX Engineer (Executive Grade)",
      logoUrl: "/work/macro-labs.jpg",
      start: "June 2025",
      end: "June 2026",
      description: "[Add your key responsibilities and products in this role.]",
    },
    {
      company: "Derana Macroentertainment",
      href: "https://www.derana.lk",
      badges: [],
      location: "Colombo, Sri Lanka",
      title: "UI/UX Engineer",
      logoUrl: "/work/derana.jpg",
      start: "January 2024",
      end: "January 2025",
      description:
        "Designed and developed web and mobile products and digital experiences for TV Derana and its related brands. [Add more detail.]",
    },
    {
      company: "Derana Macroentertainment",
      href: "https://www.derana.lk",
      badges: [],
      location: "Colombo, Sri Lanka",
      title: "Associate UI/UX Engineer",
      logoUrl: "/work/derana.jpg",
      start: "September 2023",
      end: "January 2024",
      description: "[Add your key responsibilities and products in this role.]",
    },
    {
      company: "Derana Macroentertainment",
      href: "https://www.derana.lk",
      badges: [],
      location: "Colombo, Sri Lanka",
      title: "Associate UI/UX Designer",
      logoUrl: "/work/derana.jpg",
      start: "January 2023",
      end: "September 2023",
      description: "[Add your key responsibilities and products in this role.]",
    },
    {
      company: "Abeywickrama Motor Company",
      href: "",
      badges: [],
      location: "Sri Lanka",
      title: "System Maintainer",
      logoUrl: "/work/amt.jpg",
      start: "January 2022",
      end: "February 2023",
      description: "[Add your key responsibilities in this role.]",
    },
  ],
  education: [
    {
      school: "Cardiff Metropolitan University",
      href: "https://www.cardiffmet.ac.uk",
      degree: "BSc in Software Engineering",
      logoUrl: "/education/cardiff-met.jpg",
      start: "2022",
      end: "2023",
    },
    {
      school: "SQA: Scottish Qualifications Authority",
      href: "https://www.sqa.org.uk",
      degree: "HND in Computer Science",
      logoUrl: "/education/sqa.jpg",
      start: "2020",
      end: "2022",
    },
    {
      school: "ICBT Campus",
      href: "https://icbt.lk",
      degree: "Bachelor of Software Engineering",
      logoUrl: "/education/icbt.png",
      start: "",
      end: "",
    },
    {
      school: "Saegis Campus",
      href: "https://www.saegis.ac.lk",
      degree: "Computer Science",
      logoUrl: "/education/saegis.jpg",
      start: "2021",
      end: "2022",
    },
    {
      school: "D. S. Senanayake College",
      href: "",
      degree: "[Qualification, e.g. G.C.E. A/L]",
      logoUrl: "/education/ds-senanayake.png",
      start: "",
      end: "",
    },
  ],
  // Project cards. Add a screenshot to /public/projects/ and set `image`,
  // or set `video` to an .mp4 URL. Add website/source links in `links`.
  projects: [
    project({
      title: "Ada Derana Digital Platforms",
      href: "https://www.adaderana.lk",
      dates: "May 2025 – Present",
      description: "Redesigned and delivered a modern digital news experience for Ada Derana Sinhala, Ada Derana English and Ada Derana Tamil.",
      technologies: ["Figma", "Next.js", "Tailwind CSS", "React", "Framer Motion", "AWS"],
      image: "/projects/ada-derana-digital-platforms.png",
    }),
    project({
      title: "Ada Derana One CMS: AI-Powered CMS",
      href: "",
      dates: "May 2025 – Present",
      description: "Ada Derana One CMS is the central content management system powering Ada Derana's main news websites across Sinhala, English, Tamil, Biz Sinhala and Biz English.",
      technologies: ["Figma", "Next.js", "Tailwind CSS", "React", "NestJS", "AWS"],
      image: "/projects/ada-derana-one-cms.jpg",
    }),
    project({
      title: "Pixel Ceylon",
      href: "",
      dates: "June 2026",
      description: "Website for a web development company.",
      technologies: ["Figma", "Next.js", "Tailwind CSS", "React"],
      image: "/projects/pixel-ceylon.png",
    }),
    project({
      title: "Vauxhall Court Care Home",
      href: "",
      dates: "April 2026",
      description: "Compassionate, personalised care in a safe and welcoming environment.",
      technologies: ["Figma", "WordPress"],
      image: "/projects/vauxhall-court.webp",
    }),
    project({
      title: "Sen Destinations",
      href: "",
      dates: "August 2026",
      description: "Sen Destinations is a premier Destination Management Company headquartered in Colombo.",
      technologies: ["Figma", "WordPress"],
      image: "/projects/sen-destinations.png",
    }),
  ],
  // Shown in the "Awards & Achievements" timeline (the original Hackathons section).
  hackathons: [
    {
      title: "National AI Awards 2026: Best AI Solution in Media",
      dates: "2026",
      location: "Sri Lanka",
      description:
        "Received the Bronze Award at the National AI Awards 2026 for contributing to Ada Derana OneCMS, an AI-powered media solution developed by Macro Labs under Derana MacroEntertainment.\n\nOneCMS powers Ada Derana's digital news operations and integrates AI into the media workflow through features such as Multilingual AI Summaries, Language-Specific AI Voice, Narrative Audio, Story Intelligence, and Intelligent News Search.\n\nThe solution helps improve news production efficiency, content accessibility, and the overall digital news experience for users across multiple languages.\n\nRecognised under the Industry & Sector Excellence Awards – Best AI Solution in Media category.",
      image: "/awards/national-ai-expo.jpg",
      links: [],
    },
    {
      title: "BestWeb.lk 2026: Award Winner",
      dates: "2026",
      location: "Aruna.lk",
      description:
        "Proud to have received two prestigious recognitions at the BestWeb.lk 2026 Awards, celebrating excellence in digital innovation and user experience.\n\n🏆 Winner – Best Mobile User Experience (Media & Entertainment Website)\n🥉 Bronze Winner – Best Media & Entertainment Website\n\nAs the Senior UI/UX Engineer, I played a key role in designing and delivering a seamless, user-centric digital experience by leading the UI/UX strategy, improving usability, building scalable design systems, and ensuring responsive, accessible interfaces across platforms.",
      image: "/awards/bestweb.png",
      links: [],
    },
    {
      title: "Best News Website – Sinhala & Tamil | 27th Journalism Awards for Excellence 2025",
      dates: "2026",
      location: "Liberty Publishers (Pvt) Ltd",
      description:
        "Recognising the digital excellence of Liberty Publishers (Pvt) Ltd at the 27th Journalism Awards for Excellence 2025.\n\n• Aruna.lk – Winner of Best News Website among Sinhala Newspapers.\n• Thamilan.lk – Winner of Best News Website among Tamil Newspapers.\n• Aruna.lk – Merit Certificate for Best Video Storytelling (Sinhala).",
      image: "/awards/slpi.jpg",
      links: [],
    },
    {
      title: "BestWeb.lk 2024: The Best Mobile User Experience Website",
      dates: "2024",
      location: "Thamilan.lk / Aruna.lk",
      description: "Best Mobile User Experience Website in the Media, Sports & Entertainment category.",
      image: "/awards/bestweb.png",
      links: [],
    },
    {
      title: "25th Journalism Awards for Excellence: Best Designed News Website",
      dates: "2023",
      location: "TheMorning.lk & Thamilan.lk",
      description: "Recognized for the design of the TheMorning.lk and Thamilan.lk news websites.",
      image: "/awards/slpi.jpg",
      links: [],
    },
  ] as {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    links: { title: string; icon: React.ReactNode; href: string }[];
  }[],
} as const;

function project(p: {
  title: string;
  href: string;
  dates: string;
  description: string;
  technologies: string[];
  image: string;
}) {
  return {
    ...p,
    active: true,
    links: [] as { type: string; href: string; icon: React.ReactNode }[],
    video: "",
  };
}
