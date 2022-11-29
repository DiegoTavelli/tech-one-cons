import styles from './stylesPrev.module.css'


const ButtonFormPrev = ({ onClickFnc }) => {
  return (
    <div
      onClick={(e) => onClickFnc(e)}
      className={styles.slide}
    ><span></span></div>
  )
}

export default ButtonFormPrev;