import { motion } from 'framer-motion';
import { HiOutlineFire, HiOutlineTrendingUp } from 'react-icons/hi';
import { performanceStats, streakHistory } from '../../data/dashboardData';
import './DebuggerStreak.css';

export default function DebuggerStreak() {
    const { debuggerStreak } = performanceStats;
    const maxStreak = Math.max(...streakHistory);

    return (
        <div className="streak-section">
            <h3 className="section-title">
                <HiOutlineFire /> The "Debugger" Streak
            </h3>
            <div className="streak-card">
                <div className="streak-top">
                    <motion.div
                        className="streak-number-wrap"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                    >
                        <div className="streak-number">{debuggerStreak.current}</div>
                        <div className="streak-label">Current Streak</div>
                    </motion.div>
                    <div className="streak-meta">
                        <div className="streak-meta-item">
                            <span className="streak-meta-label">Best Streak</span>
                            <span className="streak-meta-value">{debuggerStreak.best}</span>
                        </div>
                        <div className="streak-meta-item">
                            <span className="streak-meta-label">Trend</span>
                            <span className="streak-trend">
                                <HiOutlineTrendingUp /> Going strong
                            </span>
                        </div>
                    </div>
                </div>
                <div className="streak-chart">
                    {streakHistory.map((val, idx) => (
                        <div key={idx} className="streak-bar-wrap">
                            <motion.div
                                className="streak-bar"
                                initial={{ height: 0 }}
                                animate={{ height: `${(val / maxStreak) * 100}%` }}
                                transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                                style={{
                                    opacity: idx === streakHistory.length - 1 ? 1 : 0.5,
                                }}
                            />
                            <span className="streak-bar-label">{val}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
