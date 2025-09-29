'use client';

import { useEffect, useState } from 'react';
import styles from './MilestonesSection.module.css';

const milestones = [
  { number: 25, label: 'Branches', suffix: '' },
  { number: 8, label: 'ATM/CRM', suffix: '' },
  { number: 605.37, label: 'Advances', suffix: ' Cr' },
  { number: 1216.04, label: 'Deposits', suffix: ' Cr' },
];

export default function MilestonesSection() {
  const [counts, setCounts] = useState(milestones.map(() => 0));

  useEffect(() => {
    const animateCounters = () => {
      milestones.forEach((milestone, index) => {
        let current = 0;
        const increment = milestone.number / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= milestone.number) {
            current = milestone.number;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = current;
            return newCounts;
          });
        }, 20);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('milestones-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="milestones-section" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Milestones</h2>
        <div className={styles.grid}>
          {milestones.map((milestone, index) => (
            <div key={index} className={styles.milestoneItem}>
              <div className={styles.number}>
                {counts[index] < 10 && milestone.number >= 10 ? 
                  counts[index].toFixed(0) : 
                  milestone.number > 100 ? counts[index].toFixed(2) : 
                  counts[index].toFixed(0)
                }
                {milestone.suffix}
              </div>
              <div className={styles.label}>{milestone.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}