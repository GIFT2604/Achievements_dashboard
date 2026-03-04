import { motion } from 'framer-motion';
import { HiOutlineChartPie } from 'react-icons/hi';
import { skillGapData } from '../../data/dashboardData';
import './RadarChart.css';

const SIZE = 280;
const CENTER = SIZE / 2;
const LEVELS = 5;
const RADIUS = 110;

function polarToCartesian(angle, radius) {
    const rad = (Math.PI / 180) * (angle - 90);
    return {
        x: CENTER + radius * Math.cos(rad),
        y: CENTER + radius * Math.sin(rad),
    };
}

function getPolygonPoints(values, maxVal = 100) {
    const step = 360 / values.length;
    return values
        .map((v, i) => {
            const { x, y } = polarToCartesian(i * step, (v / maxVal) * RADIUS);
            return `${x},${y}`;
        })
        .join(' ');
}

export default function RadarChart() {
    const { labels, user, industry } = skillGapData;
    const step = 360 / labels.length;

    return (
        <div className="radar-section">
            <h3 className="section-title">
                <HiOutlineChartPie /> Skill Gap Analysis
            </h3>
            <div className="radar-container">
                <div className="radar-chart-wrapper">
                    <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
                        {/* Grid rings */}
                        {Array.from({ length: LEVELS }, (_, i) => {
                            const r = ((i + 1) / LEVELS) * RADIUS;
                            const points = labels
                                .map((_, j) => {
                                    const { x, y } = polarToCartesian(j * step, r);
                                    return `${x},${y}`;
                                })
                                .join(' ');
                            return (
                                <polygon
                                    key={i}
                                    points={points}
                                    fill="none"
                                    stroke="rgba(255,255,255,0.06)"
                                    strokeWidth="1"
                                />
                            );
                        })}

                        {/* Axis lines */}
                        {labels.map((_, i) => {
                            const { x, y } = polarToCartesian(i * step, RADIUS);
                            return (
                                <line
                                    key={i}
                                    x1={CENTER}
                                    y1={CENTER}
                                    x2={x}
                                    y2={y}
                                    stroke="rgba(255,255,255,0.06)"
                                    strokeWidth="1"
                                />
                            );
                        })}

                        {/* Industry polygon */}
                        <motion.polygon
                            points={getPolygonPoints(industry)}
                            fill="rgba(148, 163, 184, 0.1)"
                            stroke="rgba(148, 163, 184, 0.4)"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        />

                        {/* User polygon */}
                        <motion.polygon
                            points={getPolygonPoints(user)}
                            fill="rgba(0, 212, 255, 0.12)"
                            stroke="var(--accent-cyan)"
                            strokeWidth="2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
                        />

                        {/* User data points */}
                        {user.map((v, i) => {
                            const { x, y } = polarToCartesian(i * step, (v / 100) * RADIUS);
                            return (
                                <motion.circle
                                    key={i}
                                    cx={x}
                                    cy={y}
                                    r="4"
                                    fill="var(--accent-cyan)"
                                    stroke="var(--bg-primary)"
                                    strokeWidth="2"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                                />
                            );
                        })}

                        {/* Labels */}
                        {labels.map((label, i) => {
                            const { x, y } = polarToCartesian(i * step, RADIUS + 22);
                            return (
                                <text
                                    key={i}
                                    x={x}
                                    y={y}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill="var(--text-secondary)"
                                    fontSize="11"
                                    fontWeight="500"
                                >
                                    {label}
                                </text>
                            );
                        })}
                    </svg>
                </div>

                <div className="radar-legend">
                    {labels.map((label, i) => {
                        const gap = user[i] - industry[i];
                        return (
                            <div key={label} className="radar-legend-item">
                                <div
                                    className="radar-legend-dot"
                                    style={{ background: gap >= 0 ? 'var(--accent-green)' : 'var(--accent-red)' }}
                                />
                                <span className="radar-legend-label">{label}</span>
                                <div className="radar-legend-scores">
                                    <span className="radar-legend-user">{user[i]}%</span>
                                    <span className="radar-legend-industry">vs {industry[i]}%</span>
                                </div>
                                <span className={`radar-legend-gap ${gap >= 0 ? 'gap-positive' : 'gap-negative'}`}>
                                    {gap >= 0 ? '+' : ''}{gap}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
