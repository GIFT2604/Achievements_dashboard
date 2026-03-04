import { motion } from 'framer-motion';
import { FiAward, FiCheck } from 'react-icons/fi';
import { complexityBadges } from '../../data/dashboardData';
import './ComplexityBadges.css';

export default function ComplexityBadges() {
    return (
        <div className="badges-section">
            <h3 className="section-title">
                <FiAward /> Complexity Badges
            </h3>
            <div className="badges-grid">
                {complexityBadges.map((badge, idx) => (
                    <motion.div
                        key={badge.id}
                        className={`badge-card ${badge.earned ? 'earned' : 'locked'}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.07, duration: 0.3 }}
                    >
                        <div className="badge-icon">{badge.icon}</div>
                        <div className="badge-content">
                            <h4>
                                {badge.name}
                                {badge.earned && <FiCheck className="badge-earned-check" />}
                            </h4>
                            <p>{badge.description}</p>
                            {badge.earned ? (
                                <span className="badge-date">
                                    Earned {new Date(badge.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </span>
                            ) : (
                                <>
                                    <span className="badge-progress-text">{badge.progress}% complete</span>
                                    <div className="badge-progress-bar">
                                        <motion.div
                                            className="badge-progress-fill"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${badge.progress}%` }}
                                            transition={{ delay: idx * 0.07 + 0.3, duration: 0.8 }}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
