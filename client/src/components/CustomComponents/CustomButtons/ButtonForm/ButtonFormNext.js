import styles from './stylesNext.module.css'


const ButtonFormNext = ({ onClickFnc }) => {

  return (
    <div
      onClick={(e) => onClickFnc(e)}
      className={styles.slide}
    ><span ></span>
    </div>
  )
}

export default ButtonFormNext;