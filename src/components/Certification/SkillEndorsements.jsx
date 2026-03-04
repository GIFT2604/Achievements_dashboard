import { motion } from 'framer-motion';
import { HiOutlineThumbUp } from 'react-icons/hi';
import { skillEndorsements } from '../../data/dashboardData';
import './SkillEndorsements.css';

export default function SkillEndorsements() {
    const maxCount = Math.max(...skillEndorsements.map(e => e.count));

    return (
        <div className="endorsements-section">
            <h3 className="section-title">
                <HiOutlineThumbUp /> Skill Endorsements
            </h3>
            <div className="endorsements-list">
                {skillEndorsements.map((item, idx) => (
                    <motion.div
                        key={item.skill}
                        className="endorsement-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08, duration: 0.4 }}
                    >
                        <div className={`endorsement-rank ${idx < 3 ? 'top-3' : ''}`}>
                            {idx + 1}
                        </div>
                        <span className="endorsement-skill">{item.skill}</span>
                        <div className="endorsement-bar-bg">
                            <motion.div
                                className="endorsement-bar-fill"
                                initial={{ width: 0 }}
                                animate={{ width: `${(item.count / maxCount) * 100}%` }}
                                transition={{ delay: 0.3 + idx * 0.08, duration: 0.8 }}
                            />
                        </div>
                        <span className="endorsement-count">{item.count}</span>
                        <span className="endorsement-top">by {item.topEndorser}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
