import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineCheckCircle } from 'react-icons/hi';
import { FiThumbsUp } from 'react-icons/fi';
import { languageProficiency, certificates, skillEndorsements } from '../../data/dashboardData';
import './PortfolioSkills.css';

export default function PortfolioSkills() {
    return (
        <div className="portfolio-skills-section">
            {/* Language Proficiency */}
            <div className="portfolio-skills-card">
                <h3 className="section-title">
                    <HiOutlineAcademicCap /> Technical Skills
                </h3>
                <div className="portfolio-skills-bars">
                    {languageProficiency.map((lang, i) => (
                        <motion.div
                            key={lang.name}
                            className="portfolio-skill-row"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06 }}
                        >
                            <div className="portfolio-skill-label">
                                <span className="portfolio-skill-name">{lang.name}</span>
                                <span className="portfolio-skill-level">{lang.level}</span>
                            </div>
                            <div className="portfolio-skill-bar-track">
                                <motion.div
                                    className="portfolio-skill-bar-fill"
                                    style={{ background: lang.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${lang.quality}%` }}
                                    transition={{ duration: 0.8, delay: 0.2 + i * 0.06 }}
                                />
                            </div>
                            <span className="portfolio-skill-pct">{lang.quality}%</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="portfolio-skills-bottom">
                {/* Certifications */}
                <div className="portfolio-certs-card">
                    <h3 className="section-title">
                        <HiOutlineCheckCircle /> Certifications
                    </h3>
                    <div className="portfolio-certs-list">
                        {certificates.map((cert, i) => (
                            <motion.div
                                key={cert.id}
                                className="portfolio-cert-item"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <div className={`portfolio-cert-status ${cert.verified ? 'verified' : 'pending'}`}>
                                    {cert.verified ? '✓' : '⏳'}
                                </div>
                                <div className="portfolio-cert-info">
                                    <h4>{cert.title}</h4>
                                    <span>{cert.issuer} • {new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                </div>
                                {cert.verified && (
                                    <span className="portfolio-cert-badge">Verified</span>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Endorsements */}
                <div className="portfolio-endorse-card">
                    <h3 className="section-title">
                        <FiThumbsUp /> Endorsements
                    </h3>
                    <div className="portfolio-endorse-list">
                        {skillEndorsements.map((item, i) => (
                            <motion.div
                                key={item.skill}
                                className="portfolio-endorse-item"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <div className="portfolio-endorse-bar-wrap">
                                    <div className="portfolio-endorse-header">
                                        <span className="portfolio-endorse-skill">{item.skill}</span>
                                        <span className="portfolio-endorse-count">{item.count}</span>
                                    </div>
                                    <div className="portfolio-endorse-bar">
                                        <motion.div
                                            className="portfolio-endorse-fill"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(item.count / 24) * 100}%` }}
                                            transition={{ duration: 0.7, delay: 0.2 + i * 0.06 }}
                                        />
                                    </div>
                                    <span className="portfolio-endorse-top">Top: {item.topEndorser}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
