const faqData = [
  {
    question: "How do I join the developer community?",
    answer:
      "Joining our community is simple! You can sign up through our registration form, attend our weekly meetups, or contribute to our open-source projects on GitHub. We welcome developers of all skill levels.",
  },
  {
    question: "What are the community rules and guidelines?",
    answer:
      "We maintain a respectful and inclusive environment. Key rules include: be respectful to all members, no spam or self-promotion without permission, help others when possible, and follow our code of conduct in all interactions.",
  },
  {
    question: "Are there any membership fees?",
    answer:
      "Our basic community membership is completely free! We do offer premium memberships with additional benefits like priority support, exclusive workshops, and early access to new features.",
  },
  {
    question: "What events and activities do you organize?",
    answer:
      "We host weekly coding sessions, monthly tech talks, hackathons, code reviews, and networking events. We also organize study groups for various technologies and certification programs.",
  },
  {
    question: "Can I contribute to community projects?",
    answer:
      "We encourage all members to contribute to our open-source projects. Whether you're fixing bugs, adding features, or improving documentation, every contribution is valued and recognized.",
  },
 
];
const teamsByYear = {
  2024: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Lead Designer",
      image: "/placeholder.svg?height=300&width=300",
      isTopMember: true,
      about:
        "Passionate UI/UX designer with 5+ years of experience in creating user-centered digital experiences. Loves minimalist design and accessibility.",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahjohnson",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Frontend Developer",
      image: "/placeholder.svg?height=300&width=300",
      isTopMember: false,
      about:
        "React specialist and performance optimization enthusiast. Contributes to open-source projects and mentors junior developers.",
      linkedin: "https://linkedin.com/in/michaelchen",
      github: "https://github.com/michaelchen",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      image: "/placeholder.svg?height=300&width=300",
      isTopMember: true,
      about:
        "Strategic product leader with a background in agile methodologies. Bridges the gap between technical teams and business objectives.",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      github: "https://github.com/emilyrodriguez",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Backend Developer",
      image: "/placeholder.svg?height=300&width=300",
      isTopMember: false,
      about:
        "Full-stack developer specializing in Node.js and cloud architecture. Passionate about scalable systems and clean code practices.",
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim",
    },
  ],
  2023: [
    {
      id: 5,
      name: "Lisa Thompson",
      role: "UX Researcher",
      image: "/placeholder.svg?height=300&width=300",
      isTopMember: true,
      about:
        "User research expert with a psychology background. Specializes in user testing and behavioral analysis for digital products.",
      linkedin: "https://linkedin.com/in/lisathompson",
      github: "https://github.com/lisathompson",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "DevOps Engineer",
      image: "/placeholder.svg?height=300&width=300",
      isTopMember: false,
      about:
        "Infrastructure automation specialist with expertise in Docker, Kubernetes, and CI/CD pipelines. Ensures reliable deployments.",
      linkedin: "https://linkedin.com/in/jameswilson",
      github: "https://github.com/jameswilson",
    },
    {
      id: 7,
      name: "Anna Martinez",
      role: "Data Scientist",
      image: "/placeholder.svg?height=300&width=300",
      isTopMember: true,
      about:
        "Machine learning engineer with focus on predictive analytics. Transforms complex data into actionable business insights.",
      linkedin: "https://linkedin.com/in/annamartinez",
      github: "https://github.com/annamartinez",
    },
  ],
  2022: [
    {
      id: 8,
      name: "Robert Taylor",
      role: "Mobile Developer",
      image: "/placeholder.svg?height=300&width=300",
      isTopMember: false,
      about:
        "Cross-platform mobile developer with expertise in React Native and Flutter. Built apps with millions of downloads.",
      linkedin: "https://linkedin.com/in/roberttaylor",
      github: "https://github.com/roberttaylor",
    },
    {
      id: 9,
      name: "Sophie Anderson",
      role: "Security Engineer",
      image: "/placeholder.svg?height=300&width=300",
      isTopMember: true,
      about:
        "Cybersecurity specialist focused on application security and penetration testing. Keeps our systems safe and secure.",
      linkedin: "https://linkedin.com/in/sophieanderson",
      github: "https://github.com/sophieanderson",
    },
  ],
  2021: [
    {
      id: 10,
      name: "Alex Thompson",
      role: "Founding Member",
      image: "/placeholder.svg?height=300&width=300",
      isTopMember: true,
      about:
        "Visionary founder who started this community with a dream to connect developers worldwide. Still actively mentoring new members.",
      linkedin: "https://linkedin.com/in/alexthompson",
      github: "https://github.com/alexthompson",
    },
    {
      id: 11,
      name: "Maria Garcia",
      role: "Community Manager",
      image: "/placeholder.svg?height=300&width=300",
      isTopMember: true,
      about:
        "Heart of our community who organized the first meetups and built the foundation of our inclusive culture.",
      linkedin: "https://linkedin.com/in/mariagarcia",
      github: "https://github.com/mariagarcia",
    },
  ],
};


export default {
  "faqData":faqData,
  "teamsByYear":teamsByYear,
};  