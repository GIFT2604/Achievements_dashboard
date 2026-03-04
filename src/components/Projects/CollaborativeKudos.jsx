import { motion } from 'framer-motion';
import { HiOutlineHeart } from 'react-icons/hi';
import { collaborativeKudos } from '../../data/dashboardData';
import './CollaborativeKudos.css';

export default function CollaborativeKudos() {
    return (
        <div className="kudos-section">
            <h3 className="section-title">
                <HiOutlineHeart /> Collaborative Work
            </h3>
            <div className="kudos-list">
                {collaborativeKudos.map((kudo, idx) => (
                    <motion.div
                        key={idx}
                        className="kudos-card"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                    >
                        <div className="kudos-avatar">{kudo.avatar}</div>
                        <div className="kudos-body">
                            <div className="kudos-header">
                                <span className="kudos-name">{kudo.from}</span>
                                <span className={`kudos-role role-${kudo.role}`}>{kudo.role}</span>
                            </div>
                            <p className="kudos-message">{kudo.message}</p>
                            <span className="kudos-date">
                                {new Date(kudo.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
