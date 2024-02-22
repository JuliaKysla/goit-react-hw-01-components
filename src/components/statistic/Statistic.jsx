import styles from './Statistic.module.css';
import { setRoundomColor } from './setRC';

export const Statistic = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: setRoundomColor() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistic;