import { motion } from 'framer-motion';
import { HiOutlineCollection } from 'react-icons/hi';
import { projects } from '../../data/dashboardData';
import './ProjectGallery.css';

const thumbnailGradients = {
    ecommerce: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    chat: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    api: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    weather: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    portfolio: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    devops: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
};

const thumbnailIcons = {
    ecommerce: '🛒',
    chat: '💬',
    api: '⚡',
    weather: '🌤️',
    portfolio: '🎨',
    devops: '🚀',
};

export default function ProjectGallery() {
    return (
        <div className="gallery-section">
            <h3 className="section-title">
                <HiOutlineCollection /> Project Gallery
            </h3>
            <div className="gallery-grid">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        className="gallery-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                    >
                        <div
                            className="gallery-card-thumb"
                            style={{ background: thumbnailGradients[project.thumbnail] }}
                        >
                            {thumbnailIcons[project.thumbnail]}
                        </div>
                        <div className="gallery-card-body">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <div className="gallery-card-tags">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="gallery-card-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="gallery-card-footer">
                                <span className="gallery-card-date">
                                    Completed {new Date(project.completedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                                <span className={`gallery-card-complexity complexity-${project.complexity}`}>
                                    {project.complexity}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
