import styles from './styles.module.css'


const ButtonDownload = ({ onClickFnc }) => {
  return (
    <div
      onClick={(e) => onClickFnc(e)}
      className={styles.downloadButton}
    >
      <span>Download</span>
      <span>Excel</span>
    </div>
  )
}

export default ButtonDownload;