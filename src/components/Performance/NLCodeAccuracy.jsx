import { motion } from 'framer-motion';
import { HiOutlineTranslate } from 'react-icons/hi';
import { performanceStats, nlAccuracyHistory } from '../../data/dashboardData';
import './NLCodeAccuracy.css';

export default function NLCodeAccuracy() {
    const { nlCodeAccuracy } = performanceStats;
    const circumference = 2 * Math.PI * 46;
    const offset = circumference - (nlCodeAccuracy.current / 100) * circumference;

    return (
        <div className="nlcode-section">
            <h3 className="section-title">
                <HiOutlineTranslate /> Natural Language to Code Accuracy
            </h3>
            <div className="nlcode-card">
                <div className="nlcode-top">
                    <div className="nlcode-gauge-wrapper">
                        <svg width="120" height="120" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="46" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                            <motion.circle
                                cx="60" cy="60" r="46"
                                fill="none"
                                stroke="var(--accent-green)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                initial={{ strokeDashoffset: circumference }}
                                animate={{ strokeDashoffset: offset }}
                                transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
                                transform="rotate(-90 60 60)"
                            />
                        </svg>
                        <div className="nlcode-gauge-text">
                            <div className="nlcode-gauge-value">{nlCodeAccuracy.current}%</div>
                            <div className="nlcode-gauge-label">Accuracy</div>
                        </div>
                    </div>
                    <div className="nlcode-stats">
                        <div className="nlcode-stat-row">
                            <span className="nlcode-stat-label">Total Prompts</span>
                            <span className="nlcode-stat-value">{nlCodeAccuracy.total}</span>
                        </div>
                        <div className="nlcode-stat-row">
                            <span className="nlcode-stat-label">Successful</span>
                            <span className="nlcode-stat-value" style={{ color: 'var(--accent-green)' }}>
                                {nlCodeAccuracy.successful}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="nlcode-chart">
                    {nlAccuracyHistory.map((item, idx) => (
                        <div key={item.month} className="nlcode-chart-bar">
                            <span className="nlcode-chart-value">{item.accuracy}%</span>
                            <motion.div
                                className="nlcode-chart-fill"
                                initial={{ height: 0 }}
                                animate={{ height: `${item.accuracy * 0.8}px` }}
                                transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                                style={{
                                    background: idx === nlAccuracyHistory.length - 1
                                        ? 'var(--accent-green)'
                                        : 'rgba(16, 185, 129, 0.3)',
                                }}
                            />
                            <span className="nlcode-chart-label">{item.month}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
