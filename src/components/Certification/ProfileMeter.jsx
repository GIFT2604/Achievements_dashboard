import { motion } from 'framer-motion';
import { FiCheck, FiMinus } from 'react-icons/fi';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { employerProfile } from '../../data/dashboardData';
import './ProfileMeter.css';

export default function ProfileMeter() {
    const { completionPercent, sections } = employerProfile;
    const circumference = 2 * Math.PI * 38;
    const offset = circumference - (completionPercent / 100) * circumference;

    return (
        <div className="profile-section">
            <h3 className="section-title">
                <HiOutlineUserCircle /> Employer-Ready Profile
            </h3>
            <div className="profile-card">
                <div className="profile-top">
                    <div className="profile-meter-wrapper">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                            <motion.circle
                                cx="50" cy="50" r="38"
                                fill="none"
                                stroke="var(--accent-cyan)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                initial={{ strokeDashoffset: circumference }}
                                animate={{ strokeDashoffset: offset }}
                                transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
                                transform="rotate(-90 50 50)"
                            />
                        </svg>
                        <div className="profile-meter-text">
                            <div className="profile-meter-value">{completionPercent}%</div>
                            <div className="profile-meter-label">Complete</div>
                        </div>
                    </div>
                    <div className="profile-info">
                        <h4>Profile Completion</h4>
                        <p>Complete all sections to be visible on the Employer Talent Portal and receive job matching.</p>
                    </div>
                </div>
                <div className="profile-checklist">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={section.name}
                            className={`profile-check-item ${section.complete ? 'complete' : ''}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05, duration: 0.3 }}
                        >
                            <div className={`profile-check-icon ${section.complete ? 'done' : 'pending'}`}>
                                {section.complete ? <FiCheck /> : <FiMinus />}
                            </div>
                            <span className="profile-check-name">{section.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
