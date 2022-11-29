import styles from './styles.module.css'


const CustomButton = ({ onClickFnc, value }) => {
  return (
    <button
      onClick={(e) => onClickFnc(e)}
      className={`${styles.bn632Hover} ${styles.bn26}`}
    >{value}</button>
  )
}

export default CustomButton;