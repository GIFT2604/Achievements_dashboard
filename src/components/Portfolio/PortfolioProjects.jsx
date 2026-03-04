import { motion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineExternalLink } from 'react-icons/hi';
import { projects } from '../../data/dashboardData';
import './PortfolioProjects.css';

const gradients = {
    ecommerce: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    chat: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    api: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    weather: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    portfolio: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    devops: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
};

const icons = {
    ecommerce: '🛒', chat: '💬', api: '⚡',
    weather: '🌤️', portfolio: '🎨', devops: '🚀',
};

export default function PortfolioProjects() {
    return (
        <div className="portfolio-projects-section">
            <h3 className="section-title">
                <HiOutlineBriefcase /> Project Portfolio
            </h3>
            <div className="portfolio-projects-grid">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        className="portfolio-project-card"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08, duration: 0.45 }}
                        whileHover={{ y: -4 }}
                    >
                        <div
                            className="portfolio-project-banner"
                            style={{ background: gradients[project.thumbnail] }}
                        >
                            <span className="portfolio-project-emoji">{icons[project.thumbnail]}</span>
                            <span className={`portfolio-project-level level-${project.complexity.toLowerCase()}`}>
                                {project.complexity}
                            </span>
                        </div>
                        <div className="portfolio-project-body">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <div className="portfolio-project-stack">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="portfolio-stack-chip">{tech}</span>
                                ))}
                            </div>
                            <div className="portfolio-project-footer">
                                <span className="portfolio-project-date">
                                    {new Date(project.completedAt).toLocaleDateString('en-US', {
                                        month: 'short', day: 'numeric', year: 'numeric'
                                    })}
                                </span>
                                <button className="portfolio-project-link">
                                    <HiOutlineExternalLink /> View
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
