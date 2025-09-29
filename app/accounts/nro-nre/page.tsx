import { Globe, DollarSign, Shield, Plane } from 'lucide-react';
import Link from 'next/link';
import styles from '../accounts.module.css';

export default function NRONREAccount() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.iconContainer}>
            <Globe size={60} />
          </div>
          <h1 className={styles.title}>NRO/NRE Account</h1>
          <p className={styles.subtitle}>Banking solutions for NRIs</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Account Overview</h2>
          <p className={styles.overview}>
            NRO (Non-Resident Ordinary) and NRE (Non-Resident External) accounts are 
            specially designed for Non-Resident Indians to manage their finances in India. 
            These accounts offer convenient banking solutions with attractive features.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Key Highlights</h2>
          <div className={styles.featuresList}>
            <div className={styles.feature}>
              <DollarSign className={styles.featureIcon} />
              <div>
                <h3>Multi-Currency Support</h3>
                <p>Handle multiple currencies with easy conversion facilities</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Shield className={styles.featureIcon} />
              <div>
                <h3>Tax Benefits</h3>
                <p>Tax-efficient banking solutions with proper compliance</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Plane className={styles.featureIcon} />
              <div>
                <h3>Global Access</h3>
                <p>Access your Indian account from anywhere in the world</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Account Benefits</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefit}>Attractive interest rates on deposits</div>
            <div className={styles.benefit}>Easy repatriation of funds</div>
            <div className={styles.benefit}>Online banking and mobile app access</div>
            <div className={styles.benefit}>Investment opportunities in India</div>
            <div className={styles.benefit}>Dedicated NRI customer service</div>
            <div className={styles.benefit}>Forex services and remittances</div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Eligibility Criteria</h2>
          <div className={styles.requirements}>
            <div className={styles.reqSection}>
              <h3>NRI Status</h3>
              <ul>
                <li>Non-Resident Indian citizens</li>
                <li>Person of Indian Origin (PIO)</li>
                <li>Overseas Citizen of India (OCI)</li>
                <li>Indian citizens working abroad</li>
              </ul>
            </div>
            <div className={styles.reqSection}>
              <h3>Requirements</h3>
              <ul>
                <li>Valid passport with visa</li>
                <li>Proof of overseas address</li>
                <li>Minimum deposit as per account type</li>
                <li>Age 18 years and above</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Documents Required</h2>
          <div className={styles.docCategories}>
            <div className={styles.docCategory}>
              <h3>Identity Documents</h3>
              <ul>
                <li>Valid Indian passport</li>
                <li>PAN Card</li>
                <li>Aadhaar Card (if available)</li>
                <li>Overseas employment visa</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Address Proof</h3>
              <ul>
                <li>Overseas address proof</li>
                <li>Indian address proof</li>
                <li>Utility bills (overseas)</li>
                <li>Employment letter</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Additional Documents</h3>
              <ul>
                <li>Passport size photographs</li>
                <li>Salary certificate</li>
                <li>Bank statements (overseas)</li>
                <li>Income tax returns</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Other Account Options</h2>
          <div className={styles.relatedAccounts}>
            <Link href="/accounts/savings" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Savings Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Savings Account</h3>
                <p>Save money to invest in the future</p>
              </div>
            </Link>
            <Link href="/accounts/current" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Current Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Current Account</h3>
                <p>Smooth transactions for your business</p>
              </div>
            </Link>
            <Link href="/accounts/corporate" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/4386173/pexels-photo-4386173.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Corporate Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Corporate Account</h3>
                <p>Advanced banking for large enterprises</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}