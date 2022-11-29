import styles from './styles.module.css'

const CustomView = ({ keys, values }) => {
  return (
    <div className={styles.customViewContainer}>
      <p className={styles.parrafKey}>
        {keys}
      </p>
      <p className={styles.parrafValue}>
        {values ? values : '---'}
      </p>
    </div>
  )
}

export default CustomView;