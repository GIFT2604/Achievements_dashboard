import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiGlobe, FiMail, FiStar } from 'react-icons/fi';
import { userInfo, portfolioSummary } from '../../data/dashboardData';
import './PortfolioSummary.css';

const iconMap = {
    github: <FiGithub />,
    linkedin: <FiLinkedin />,
    globe: <FiGlobe />,
    mail: <FiMail />,
};

export default function PortfolioSummary() {
    const xpProgress = (userInfo.xp % 1000) / 10; // percent within current level

    return (
        <motion.div
            className="portfolio-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="portfolio-hero-glow" />
            <div className="portfolio-hero-content">
                <div className="portfolio-hero-avatar">
                    <span>{userInfo.avatar}</span>
                    <div className="portfolio-hero-badge">
                        <FiStar />
                    </div>
                </div>

                <div className="portfolio-hero-info">
                    <h2>{userInfo.name}</h2>
                    <p className="portfolio-hero-title">{portfolioSummary.title}</p>
                    <p className="portfolio-hero-bio">{portfolioSummary.bio}</p>

                    <div className="portfolio-hero-level">
                        <span className="portfolio-level-label">Level {userInfo.level}</span>
                        <div className="portfolio-xp-bar">
                            <motion.div
                                className="portfolio-xp-fill"
                                initial={{ width: 0 }}
                                animate={{ width: `${xpProgress}%` }}
                                transition={{ duration: 1, delay: 0.3 }}
                            />
                        </div>
                        <span className="portfolio-xp-text">{userInfo.xp.toLocaleString()} XP</span>
                    </div>

                    <div className="portfolio-hero-socials">
                        {portfolioSummary.socialLinks.map(link => (
                            <a key={link.label} href={link.url} className="portfolio-social-btn" title={link.label}>
                                {iconMap[link.icon]}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="portfolio-highlights">
                {portfolioSummary.highlights.map((item, i) => (
                    <motion.div
                        key={item.label}
                        className="portfolio-highlight-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                    >
                        <span className="portfolio-highlight-value">{item.value}</span>
                        <span className="portfolio-highlight-label">{item.label}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
