export type SecurityFocus = {
  title: string;
  description: string;
  topics: string[];
};

export const securityFocus: SecurityFocus[] = [
  {
    title: "Web Application Security",
    description:
      "Developing a stronger understanding of common web application vulnerabilities and the practices that help prevent them.",
    topics: [
      "OWASP Top 10",
      "Authentication & authorization",
      "Input validation",
      "Secure application design",
    ],
  },
  {
    title: "Hands-on Security Learning",
    description:
      "Learning through practical labs and vulnerability analysis to better understand how applications can be attacked and defended.",
    topics: [
      "Security labs",
      "Vulnerability analysis",
      "Web security testing",
      "Adversarial thinking",
    ],
  },
];
