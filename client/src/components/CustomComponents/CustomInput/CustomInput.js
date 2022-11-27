import styles from './styles.module.css'

const CustomInput = ({ parraf, value, name, placeholder, onChange, onKeyUp, error }) => {


  return (
    <div className={styles.inputContainer}>
      <p className={styles.parrafInput}>
        {parraf}
      </p>
      <input
        type='text'
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        onKeyUp={onKeyUp}
      />
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



export default CustomInput;
