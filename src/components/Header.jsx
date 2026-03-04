import { FiSearch, FiBell } from 'react-icons/fi';
import './Header.css';

const sectionTitles = {
    overview: { title: 'Dashboard Overview', subtitle: 'Your achievements at a glance' },
    skills: { title: 'Skill Mastery Matrix', subtitle: 'Data-driven metrics for your coding proficiency' },
    projects: { title: 'Project-Based Milestones', subtitle: 'Proof you can build, not just solve' },
    performance: { title: 'Real-Time Performance', subtitle: 'Live stats that keep you engaged' },
    certification: { title: 'Certification & Employability', subtitle: 'Your pathway to career readiness' },
    portfolio: { title: 'Portfolio Generator', subtitle: 'Your generated portfolio — everything you\'ve built and learned' },
};

export default function Header({ activeSection }) {
    const { title, subtitle } = sectionTitles[activeSection] || sectionTitles.overview;

    return (
        <header className="header">
            <div className="header-left">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <div className="header-right">
                <div className="header-search">
                    <FiSearch />
                    <input type="text" placeholder="Search achievements..." />
                </div>
                <button className="header-notif">
                    <FiBell />
                    <span className="header-notif-badge" />
                </button>
            </div>
        </header>
    );
}
