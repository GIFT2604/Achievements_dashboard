import { motion } from 'framer-motion';
import { FiAward, FiCheck, FiClock } from 'react-icons/fi';
import { certificates } from '../../data/dashboardData';
import './CertificateCards.css';

export default function CertificateCards() {
    return (
        <div className="certs-section">
            <h3 className="section-title">
                <FiAward /> Certificates Earned
            </h3>
            <div className="certs-grid">
                {certificates.map((cert, idx) => (
                    <motion.div
                        key={cert.id}
                        className="cert-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                    >
                        <div className="cert-card-header">
                            <div className="cert-icon"><FiAward /></div>
                            <span className={`cert-verified ${cert.verified ? 'is-verified' : 'is-pending'}`}>
                                {cert.verified ? <><FiCheck /> Verified</> : <><FiClock /> Pending</>}
                            </span>
                        </div>
                        <h4 className="cert-title">{cert.title}</h4>
                        <p className="cert-issuer">{cert.issuer}</p>
                        <div className="cert-meta">
                            <span className="cert-date">
                                {new Date(cert.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="cert-id">{cert.credentialId}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
