import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/andreaflether.png" alt="Andréa Alencar"/>
      <div>
        <strong>Andréa Alencar</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}