
import styles from './styles.module.css'
const CustomInputTwo = ({ parraf, value, name, placeholder, onChange, onKeyUp, error }) => {

  return (
    <div className={`${styles.customInputContainer} ${styles.inputEffect}`}>
      <label className={styles.labelInput} >{parraf}</label>
      <input
        className={styles.effect17}
        type="text"
        placeholder=''
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        onKeyUp={onKeyUp} />
      <span className={styles.focusBorder}></span>
      {
        (error?.email.length && name === 'email') || (error?.phone.length && name === 'phone') ?
          <div className={styles.warnModal}>
            <p className={styles.warnParraf} >
              {
                name === 'email' ? error.email :
                  name === 'phone' ? error.phone : null
              }
            </p>
          </div>
          : null
      }
    </div>
  )
}

export default CustomInputTwo;