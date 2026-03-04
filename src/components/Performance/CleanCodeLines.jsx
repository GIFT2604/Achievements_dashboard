import { motion } from 'framer-motion';
import { HiOutlineCode } from 'react-icons/hi';
import { performanceStats } from '../../data/dashboardData';
import './CleanCodeLines.css';

export default function CleanCodeLines() {
    const { cleanCodeLines } = performanceStats;
    const cleanPercent = ((cleanCodeLines.total - cleanCodeLines.filtered) / cleanCodeLines.total * 100).toFixed(1);
    const boilerplatePercent = (100 - cleanPercent).toFixed(1);

    return (
        <div className="cleancode-section">
            <h3 className="section-title">
                <HiOutlineCode /> Lines of Clean Code
            </h3>
            <div className="cleancode-card">
                <div className="cleancode-stats-grid">
                    <motion.div
                        className="cleancode-stat"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="cleancode-stat-value" style={{ color: 'var(--accent-cyan)' }}>
                            {cleanCodeLines.total.toLocaleString()}
                        </div>
                        <div className="cleancode-stat-label">Total Effective Lines</div>
                        <div className="cleancode-stat-sub">AI-filtered for quality</div>
                    </motion.div>
                    <motion.div
                        className="cleancode-stat"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="cleancode-stat-value" style={{ color: 'var(--accent-green)' }}>
                            +{cleanCodeLines.thisWeek}
                        </div>
                        <div className="cleancode-stat-label">This Week</div>
                        <div className="cleancode-stat-sub">New clean lines</div>
                    </motion.div>
                    <motion.div
                        className="cleancode-stat"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="cleancode-stat-value" style={{ color: 'var(--text-muted)' }}>
                            {cleanCodeLines.filtered.toLocaleString()}
                        </div>
                        <div className="cleancode-stat-label">Boilerplate Filtered</div>
                        <div className="cleancode-stat-sub">Excluded from metrics</div>
                    </motion.div>
                </div>

                <div className="cleancode-visual">
                    <div className="cleancode-bar-container">
                        <div className="cleancode-bar-bg">
                            <motion.div
                                className="cleancode-bar-clean"
                                initial={{ width: 0 }}
                                animate={{ width: `${cleanPercent}%` }}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                {cleanPercent}%
                            </motion.div>
                            <div className="cleancode-bar-boilerplate">
                                {boilerplatePercent}%
                            </div>
                        </div>
                    </div>
                    <div className="cleancode-legend">
                        <div className="cleancode-legend-item">
                            <div className="cleancode-legend-dot" style={{ background: 'var(--accent-purple)' }} />
                            Clean Code
                        </div>
                        <div className="cleancode-legend-item">
                            <div className="cleancode-legend-dot" style={{ background: 'rgba(255,255,255,0.15)' }} />
                            Boilerplate
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
