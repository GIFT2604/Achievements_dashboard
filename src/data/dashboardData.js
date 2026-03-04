// ============================================================
// ACHIEVEMENTS DASHBOARD — MOCK DATA
// ============================================================

// --- Skill Mastery Matrix ---
export const languageProficiency = [
  { name: 'C#', hours: 124, quality: 92, level: 'Advanced', color: '#68217A' },
  { name: 'Python', hours: 98, quality: 88, level: 'Advanced', color: '#3776AB' },
  { name: 'JavaScript', hours: 156, quality: 85, level: 'Expert', color: '#F7DF1E' },
  { name: 'TypeScript', hours: 67, quality: 90, level: 'Intermediate', color: '#3178C6' },
  { name: 'SQL', hours: 45, quality: 78, level: 'Intermediate', color: '#CC2927' },
  { name: 'HTML/CSS', hours: 112, quality: 95, level: 'Expert', color: '#E44D26' },
  { name: 'Java', hours: 34, quality: 72, level: 'Beginner', color: '#007396' },
  { name: 'Rust', hours: 18, quality: 65, level: 'Beginner', color: '#CE412B' },
];

export const skillGapData = {
  labels: ['Syntax', 'Logic', 'Security', 'Scalability', 'Testing'],
  user: [88, 76, 62, 70, 80],
  industry: [85, 82, 78, 75, 80],
};

export const codeReviewScore = {
  overall: 87,
  breakdown: [
    { label: 'Readability', score: 92 },
    { label: 'Efficiency', score: 84 },
    { label: 'Best Practices', score: 88 },
    { label: 'Error Handling', score: 79 },
    { label: 'Documentation', score: 91 },
  ],
};

// --- Project-Based Milestones ---
export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce app with cart, auth, and payment integration',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    completedAt: '2026-02-10',
    thumbnail: 'ecommerce',
    complexity: 'Advanced',
  },
  {
    id: 2,
    title: 'Real-Time Chat App',
    description: 'WebSocket-based chat with rooms, typing indicators, and file sharing',
    techStack: ['React', 'Socket.io', 'MongoDB', 'Express'],
    completedAt: '2026-01-28',
    thumbnail: 'chat',
    complexity: 'Intermediate',
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'RESTful API with JWT auth, role-based access, and rate limiting',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    completedAt: '2026-01-15',
    thumbnail: 'api',
    complexity: 'Advanced',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Responsive weather app with geolocation and 5-day forecast',
    techStack: ['React', 'OpenWeather API', 'CSS3'],
    completedAt: '2025-12-20',
    thumbnail: 'weather',
    complexity: 'Beginner',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Animated portfolio with dark mode, CMS integration, and contact form',
    techStack: ['Next.js', 'Framer Motion', 'Sanity'],
    completedAt: '2025-12-05',
    thumbnail: 'portfolio',
    complexity: 'Intermediate',
  },
  {
    id: 6,
    title: 'CI/CD Pipeline Setup',
    description: 'Docker-based deployment pipeline with GitHub Actions and AWS ECS',
    techStack: ['Docker', 'GitHub Actions', 'AWS', 'Terraform'],
    completedAt: '2026-02-18',
    thumbnail: 'devops',
    complexity: 'Expert',
  },
];

export const complexityBadges = [
  { id: 1, name: 'Database Architect', icon: '🗄️', description: 'Mastered PostgreSQL integration', earned: true, date: '2026-01-15' },
  { id: 2, name: 'Cloud Ready', icon: '☁️', description: 'Deployed to AWS/Docker', earned: true, date: '2026-02-18' },
  { id: 3, name: 'API Master', icon: '🔗', description: 'Built 5+ RESTful APIs', earned: true, date: '2026-01-20' },
  { id: 4, name: 'Full-Stack Hero', icon: '🦸', description: 'Completed 3 full-stack projects', earned: true, date: '2026-02-10' },
  { id: 5, name: 'Security Guardian', icon: '🛡️', description: 'Implemented auth & encryption', earned: false, progress: 72 },
  { id: 6, name: 'DevOps Ninja', icon: '🥷', description: 'Set up CI/CD pipeline', earned: true, date: '2026-02-18' },
  { id: 7, name: 'Open Source Contributor', icon: '🌟', description: 'Merged 10+ PRs', earned: false, progress: 40 },
  { id: 8, name: 'Testing Champion', icon: '🧪', description: '90%+ test coverage', earned: false, progress: 85 },
];

export const collaborativeKudos = [
  { from: 'Dr. Sarah Chen', role: 'Instructor', message: 'Exceptional problem-solving skills and clean architecture patterns.', date: '2026-02-20', avatar: 'SC' },
  { from: 'Alex Rivera', role: 'Peer', message: 'Great code reviews — always catches edge cases.', date: '2026-02-15', avatar: 'AR' },
  { from: 'Prof. James Liu', role: 'Instructor', message: 'Outstanding mastery of database design principles.', date: '2026-02-01', avatar: 'JL' },
  { from: 'Maya Patel', role: 'Peer', message: 'Helped me debug a complex async issue. Amazing collaborator!', date: '2026-01-28', avatar: 'MP' },
];

// --- Real-Time Performance Stats ---
export const performanceStats = {
  debuggerStreak: { current: 47, best: 63, trend: 'up' },
  nlCodeAccuracy: { current: 84, total: 230, successful: 193, trend: 'up' },
  cleanCodeLines: { total: 12847, thisWeek: 432, filtered: 1893, trend: 'stable' },
};

export const streakHistory = [32, 18, 45, 12, 63, 27, 47];

export const nlAccuracyHistory = [
  { month: 'Sep', accuracy: 68 },
  { month: 'Oct', accuracy: 72 },
  { month: 'Nov', accuracy: 76 },
  { month: 'Dec', accuracy: 79 },
  { month: 'Jan', accuracy: 82 },
  { month: 'Feb', accuracy: 84 },
];

// --- Certification & Employability ---
export const certificates = [
  { id: 1, title: 'Full-Stack Web Development', issuer: 'SUMIC Academy', date: '2026-02-15', verified: true, credentialId: 'FSW-2026-0847' },
  { id: 2, title: 'Advanced React & TypeScript', issuer: 'SUMIC Academy', date: '2026-01-20', verified: true, credentialId: 'ART-2026-0312' },
  { id: 3, title: 'Database Design & SQL', issuer: 'SUMIC Academy', date: '2025-12-10', verified: true, credentialId: 'DDS-2025-1104' },
  { id: 4, title: 'Cloud Computing Fundamentals', issuer: 'SUMIC Academy', date: '2026-02-22', verified: false, credentialId: 'CCF-2026-0923' },
];

export const employerProfile = {
  completionPercent: 78,
  sections: [
    { name: 'Technical Skills', complete: true },
    { name: 'Project Portfolio', complete: true },
    { name: 'Code Samples', complete: true },
    { name: 'Video Introduction', complete: false },
    { name: 'Soft Skills Assessment', complete: false },
    { name: 'References', complete: true },
    { name: 'Career Preferences', complete: true },
    { name: 'Availability', complete: false },
  ],
};

export const skillEndorsements = [
  { skill: 'JavaScript', count: 24, topEndorser: 'Dr. Sarah Chen' },
  { skill: 'React', count: 19, topEndorser: 'Prof. James Liu' },
  { skill: 'Node.js', count: 16, topEndorser: 'Alex Rivera' },
  { skill: 'PostgreSQL', count: 12, topEndorser: 'Dr. Sarah Chen' },
  { skill: 'Docker', count: 8, topEndorser: 'Prof. James Liu' },
  { skill: 'TypeScript', count: 7, topEndorser: 'Maya Patel' },
];

// --- User Info ---
export const userInfo = {
  name: 'Gift Benson',
  avatar: 'GB',
  rank: 'Gold',
  xp: 8420,
  level: 28,
  joinDate: '2025-08-15',
};

// --- Portfolio Summary ---
export const portfolioSummary = {
  title: 'Full-Stack Developer',
  bio: 'Passionate full-stack developer with expertise in React, Node.js, and cloud technologies. Focused on building scalable, user-centric applications with clean architecture and modern best practices.',
  socialLinks: [
    { label: 'GitHub', url: '#', icon: 'github' },
    { label: 'LinkedIn', url: '#', icon: 'linkedin' },
    { label: 'Portfolio', url: '#', icon: 'globe' },
    { label: 'Email', url: '#', icon: 'mail' },
  ],
  highlights: [
    { label: 'Projects Completed', value: 6 },
    { label: 'Languages Mastered', value: 8 },
    { label: 'Certifications', value: 4 },
    { label: 'Endorsements', value: 86 },
  ],
};
