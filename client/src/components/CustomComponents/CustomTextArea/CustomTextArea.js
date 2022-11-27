import styles from './styles.module.css'

const CustomTextArea = ({ name, value, onChange }) => {
  return (
    <div className={styles.textAreaContainer}>
      <p className={styles.parrafTextArea}>
        {name}
      </p>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default CustomTextArea;