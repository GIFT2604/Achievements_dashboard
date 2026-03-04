import { motion } from 'framer-motion';
import { HiOutlineCode } from 'react-icons/hi';
import { languageProficiency } from '../../data/dashboardData';
import './LanguageHeatmap.css';

export default function LanguageHeatmap() {
    return (
        <div className="heatmap-section">
            <h3 className="section-title">
                <HiOutlineCode /> Language Proficiency Heatmap
            </h3>
            <div className="heatmap-grid">
                {languageProficiency.map((lang, idx) => (
                    <motion.div
                        key={lang.name}
                        className="heatmap-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08, duration: 0.4 }}
                        style={{ '--card-accent': lang.color }}
                    >
                        <div
                            style={{
                                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                                background: lang.color, borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                            }}
                        />
                        <div className="heatmap-card-header">
                            <span className="heatmap-card-lang">{lang.name}</span>
                            <span className={`heatmap-card-level level-${lang.level}`}>
                                {lang.level}
                            </span>
                        </div>
                        <div className="heatmap-card-stats">
                            <div className="heatmap-stat">
                                <span className="heatmap-stat-label">Time Spent</span>
                                <span className="heatmap-stat-value">{lang.hours}h</span>
                            </div>
                            <div className="heatmap-stat">
                                <span className="heatmap-stat-label">Code Quality</span>
                                <span className="heatmap-stat-value" style={{ color: lang.color }}>
                                    {lang.quality}%
                                </span>
                            </div>
                            <div className="heatmap-quality-bar">
                                <motion.div
                                    className="heatmap-quality-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${lang.quality}%` }}
                                    transition={{ delay: idx * 0.08 + 0.3, duration: 1 }}
                                    style={{ background: lang.color }}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
