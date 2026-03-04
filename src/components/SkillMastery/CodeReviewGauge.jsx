import { motion } from 'framer-motion';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { codeReviewScore } from '../../data/dashboardData';
import './CodeReviewGauge.css';

export default function CodeReviewGauge() {
    const { overall, breakdown } = codeReviewScore;
    const circumference = 2 * Math.PI * 72;
    const offset = circumference - (overall / 100) * circumference;

    return (
        <div className="gauge-section">
            <h3 className="section-title">
                <HiOutlineShieldCheck /> AI Code Review Score
            </h3>
            <div className="gauge-container">
                <div className="gauge-chart-wrapper">
                    <div className="gauge-svg-wrapper">
                        <svg width="180" height="180" viewBox="0 0 180 180">
                            {/* Background ring */}
                            <circle
                                cx="90" cy="90" r="72"
                                fill="none"
                                stroke="rgba(255,255,255,0.06)"
                                strokeWidth="10"
                            />
                            {/* Animated progress ring */}
                            <motion.circle
                                cx="90" cy="90" r="72"
                                fill="none"
                                stroke="url(#gaugeGradient)"
                                strokeWidth="10"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                initial={{ strokeDashoffset: circumference }}
                                animate={{ strokeDashoffset: offset }}
                                transition={{ delay: 0.3, duration: 1.5, ease: 'easeOut' }}
                                transform="rotate(-90 90 90)"
                            />
                            <defs>
                                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="var(--accent-purple)" />
                                    <stop offset="100%" stopColor="var(--accent-cyan)" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="gauge-center-text">
                            <motion.div
                                className="gauge-score"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, duration: 0.4 }}
                            >
                                {overall}
                            </motion.div>
                            <div className="gauge-label">Clean Code</div>
                        </div>
                    </div>
                </div>

                <div className="gauge-breakdown">
                    {breakdown.map((item, idx) => (
                        <div key={item.label} className="gauge-breakdown-item">
                            <span className="gauge-breakdown-label">{item.label}</span>
                            <div className="gauge-breakdown-bar-bg">
                                <motion.div
                                    className="gauge-breakdown-bar-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.score}%` }}
                                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                                />
                            </div>
                            <span className="gauge-breakdown-value">{item.score}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
