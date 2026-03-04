import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineChartBar, HiOutlineBriefcase, HiOutlineLightningBolt, HiOutlineAcademicCap } from 'react-icons/hi';
import { FiAward, FiCode, FiTarget, FiTrendingUp } from 'react-icons/fi';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Skill Mastery
import LanguageHeatmap from './components/SkillMastery/LanguageHeatmap';
import RadarChart from './components/SkillMastery/RadarChart';
import CodeReviewGauge from './components/SkillMastery/CodeReviewGauge';

// Projects
import ProjectGallery from './components/Projects/ProjectGallery';
import ComplexityBadges from './components/Projects/ComplexityBadges';
import CollaborativeKudos from './components/Projects/CollaborativeKudos';

// Performance
import DebuggerStreak from './components/Performance/DebuggerStreak';
import NLCodeAccuracy from './components/Performance/NLCodeAccuracy';
import CleanCodeLines from './components/Performance/CleanCodeLines';

// Certification
import CertificateCards from './components/Certification/CertificateCards';
import ProfileMeter from './components/Certification/ProfileMeter';
import SkillEndorsements from './components/Certification/SkillEndorsements';

// Portfolio
import PortfolioSummary from './components/Portfolio/PortfolioSummary';
import PortfolioProjects from './components/Portfolio/PortfolioProjects';
import PortfolioSkills from './components/Portfolio/PortfolioSkills';

import { performanceStats, codeReviewScore, certificates, complexityBadges } from './data/dashboardData';

import './App.css';

const overviewStats = [
  {
    label: 'AI Code Review',
    value: codeReviewScore.overall,
    suffix: '/100',
    icon: <FiCode />,
    color: '#7c3aed',
    bg: 'rgba(124, 58, 237, 0.12)',
    accent: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  },
  {
    label: 'Debugger Streak',
    value: performanceStats.debuggerStreak.current,
    suffix: ' errors',
    icon: <FiTarget />,
    color: '#f97316',
    bg: 'rgba(249, 115, 22, 0.12)',
    accent: 'linear-gradient(135deg, #f97316, #fbbf24)',
  },
  {
    label: 'Badges Earned',
    value: complexityBadges.filter(b => b.earned).length,
    suffix: `/${complexityBadges.length}`,
    icon: <FiAward />,
    color: '#ffd700',
    bg: 'rgba(255, 215, 0, 0.12)',
    accent: 'linear-gradient(135deg, #ffd700, #f59e0b)',
  },
  {
    label: 'Certificates',
    value: certificates.filter(c => c.verified).length,
    suffix: ' verified',
    icon: <FiTrendingUp />,
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.12)',
    accent: 'linear-gradient(135deg, #10b981, #34d399)',
  },
];

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

function OverviewSection() {
  return (
    <>
      <div className="overview-stats">
        {overviewStats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="overview-stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            style={{ '--card-accent': stat.color }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
              background: stat.accent, borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
            }} />
            <div className="overview-stat-icon" style={{ background: stat.bg, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="overview-stat-value" style={{ color: stat.color }}>
              {stat.value}<span style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 400 }}>{stat.suffix}</span>
            </div>
            <div className="overview-stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      <LanguageHeatmap />
      <RadarChart />
      <CodeReviewGauge />
    </>
  );
}

function SkillsSection() {
  return (
    <>
      <LanguageHeatmap />
      <RadarChart />
      <CodeReviewGauge />
    </>
  );
}

function ProjectsSection() {
  return (
    <>
      <ProjectGallery />
      <ComplexityBadges />
      <CollaborativeKudos />
    </>
  );
}

function PerformanceSection() {
  return (
    <>
      <DebuggerStreak />
      <NLCodeAccuracy />
      <CleanCodeLines />
    </>
  );
}

function CertificationSection() {
  return (
    <>
      <CertificateCards />
      <ProfileMeter />
      <SkillEndorsements />
    </>
  );
}

function PortfolioSection() {
  return (
    <>
      <PortfolioSummary />
      <PortfolioProjects />
      <PortfolioSkills />
    </>
  );
}

const sections = {
  overview: OverviewSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  performance: PerformanceSection,
  certification: CertificationSection,
  portfolio: PortfolioSection,
};

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const ActiveComponent = sections[activeSection];

  return (
    <div className="app-layout">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="app-main">
        <Header activeSection={activeSection} />
        <div className="app-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
