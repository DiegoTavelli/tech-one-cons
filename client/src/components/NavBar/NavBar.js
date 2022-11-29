import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import ButtonNavBar from '../CustomComponents/CustomButtons/ButtonNavBar/ButtonNavBar'


function NavBar() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/')
  }
  const goTable = () => {
    navigate('/users')
  }

  return (
    <div className={styles.navBarContainer}>
      <ButtonNavBar value='Create' onClickFnc={goHome} />
      <ButtonNavBar value='Users' onClickFnc={goTable} />

    </div>
  )
}

export default NavBar;