import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import CustomView from '../CustomComponents/CustomView/CustomView';
import styles from './styles.module.css'
import { postUser, getPersons } from '../../store/actions';
import ButtonFormPrev from '../CustomComponents/CustomButtons/ButtonForm/ButtonFormPrev';
import ButtonFormNext from '../CustomComponents/CustomButtons/ButtonForm/ButtonFormNext';

function Summary() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const personData = useSelector((store) => store.person)
  const academicsData = useSelector((store) => store.academics)


  const handleGoBack = (e) => {
    navigate('/academic')
  }

  const submit = (e) => {
    e.preventDefault();
    const finalSend = [personData, academicsData];
    dispatch(postUser(finalSend));
    dispatch(getPersons())
    navigate('/');
  }

  return (
    <div className={styles.summaryContainer} >
      <div style={{ position: 'absolute' }} >
        <ButtonFormPrev onClickFnc={handleGoBack} />
        <ButtonFormNext onClickFnc={submit} />
      </div>
      <div style={{ marginTop: '70px' }}>
        <h4>Personal Data</h4>
        {
          personData &&
          Object.entries(personData).map(([keys, values]) => {
            return <CustomView key={keys} keys={keys} values={values} />
          })
        }
      </div>
      <div style={{ marginTop: '70px' }}>
        <h4>Academics</h4>
        {
          academicsData &&
          Object.entries(academicsData).map(([keys, values]) => {
            return <CustomView key={keys} keys={keys} values={values} />
          })
        }
      </div>

    </div>
  )
}

export default Summary;