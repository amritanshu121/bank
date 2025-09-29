import { PiggyBank, CreditCard, Clock, Building2, Home, TrendingUp, Car, GraduationCap, Shield, Heart } from 'lucide-react';
import styles from './ServicesGrid.module.css';

const services = [
  {
    icon: PiggyBank,
    title: "Saving Account",
    description: "Save money to invest in the future.",
    color: "#E3F2FD"
  },
  {
    icon: CreditCard,
    title: "Current Account",
    description: "Smooth transactions for your business.",
    color: "#F3E5F5"
  },
  {
    icon: Clock,
    title: "Fixed Deposits",
    description: "Invest money to secure tomorrow.",
    color: "#FFF3E0"
  },
  {
    icon: Building2,
    title: "RTGS/NEFT",
    description: "RTGS & NEFT facility available.",
    color: "#E8F5E8"
  },
  {
    icon: Home,
    title: "Housing Loan",
    description: "Let us help you get your home today.",
    color: "#FFF3E0"
  },
  {
    icon: TrendingUp,
    title: "Business Loan",
    description: "For every business need & growth.",
    color: "#F3E5F5",
    highlighted: true
  },
  {
    icon: Car,
    title: "Vehicle Loan",
    description: "Helps to give wheels to your dream.",
    color: "#E3F2FD"
  },
  {
    icon: GraduationCap,
    title: "Educational Loan",
    description: "It is more about dreams than money.",
    color: "#E8F5E8"
  },
  {
    icon: Shield,
    title: "General Insurance",
    description: "Security is a priority, not an option.",
    color: "#FFF3E0"
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Whatever tomorrow brings, I'm ready.",
    color: "#FFE6E6"
  }
];

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.serviceCard} ${service.highlighted ? styles.highlighted : ''}`}
              style={{ backgroundColor: service.color }}
            >
              <div className={styles.iconContainer}>
                <service.icon size={24} color="#8B4B6B" />
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}