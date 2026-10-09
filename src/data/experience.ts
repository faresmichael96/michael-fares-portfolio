export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
  contributions: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    company: "NeoTechnologies",
    role: "Full-Stack Software Developer",
    startDate: "Jun 2022",
    endDate: "Present",
    location: "Hybrid",
    summary:
      "Contributing to an online investment platform that digitizes traditionally offline investment workflows for bank clients.",
    contributions: [
      "Develop frontend features using React and backend functionality using Python and Flask.",
      "Built a KYC onboarding feature to support identity verification before clients can begin investing.",
    ],
    technologies: ["React", "Python", "Flask"],
  },
  {
    company: "HelloTree",
    role: "Full Stack Web Developer",
    startDate: "Aug 2021",
    endDate: "Mar 2022",
    location: "On-site",
    summary:
      "Worked on frontend architecture, backend applications, and user-facing features across web and mobile experiences.",
    contributions: [
      "Implemented user interactions and improved cross-platform mobile usability.",
      "Resolved issues identified through customer feedback and testing.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Laravel"],
  },
  {
    company: "Whitebeard",
    role: "Software Developer",
    startDate: "Jun 2019",
    endDate: "Aug 2021",
    location: "On-site",
    summary:
      "Developed and maintained websites, implementing new features and improving existing software based on technical requirements and user feedback.",
    contributions: [
      "Developed new websites and implemented updates to existing web applications.",
      "Tested, debugged, and maintained software, resolving issues identified through customer feedback and testing.",
      "Improved code structure and ensured compatibility across browsers and devices.",
      "Collaborated with team members to clarify requirements, prioritize tasks, and resolve technical issues.",
    ],
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "Smarty"],
  },
];
