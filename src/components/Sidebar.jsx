import { HiOutlineChartBar, HiOutlineBriefcase, HiOutlineLightningBolt, HiOutlineAcademicCap } from 'react-icons/hi';
import { FiAward, FiGrid, FiSettings, FiUser } from 'react-icons/fi';
import { userInfo } from '../data/dashboardData';
import './Sidebar.css';

const navItems = [
    { id: 'overview', label: 'Overview', icon: <FiGrid /> },
    { id: 'skills', label: 'Skill Mastery', icon: <HiOutlineChartBar /> },
    { id: 'projects', label: 'Project Milestones', icon: <HiOutlineBriefcase /> },
    { id: 'performance', label: 'Performance', icon: <HiOutlineLightningBolt /> },
    { id: 'certification', label: 'Certification', icon: <HiOutlineAcademicCap /> },
    { id: 'portfolio', label: 'Portfolio', icon: <FiUser /> },
];

export default function Sidebar({ activeSection, onSectionChange }) {
    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <div className="sidebar-brand-icon">
                    <FiAward />
                </div>
                <h2>Achievements</h2>
            </div>

            <nav className="sidebar-nav">
                {navItems.map(item => (
                    <div
                        key={item.id}
                        className={`sidebar-nav-item ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => onSectionChange(item.id)}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
            </nav>

            <div className="sidebar-user">
                <div className="sidebar-user-avatar">{userInfo.avatar}</div>
                <div className="sidebar-user-info">
                    <h4>{userInfo.name}</h4>
                    <span>Level {userInfo.level} • {userInfo.xp.toLocaleString()} XP</span>
                </div>
                <span className="sidebar-user-rank">{userInfo.rank}</span>
            </div>
        </aside>
    );
}
