import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CustomInputTwo from '../CustomComponents/CustomInputTwo/CustomInputTwo'
import CustomTextArea from '../CustomComponents/CustomTextArea/CustomTextArea';
import CustomDatePicker from '../CustomComponents/CustomDatePicker/CustomDatePicker';
import { setAcademics } from '../../store/actions/index'
import ButtonFormNext from '../CustomComponents/CustomButtons/ButtonForm/ButtonFormNext';
import ButtonFormPrev from '../CustomComponents/CustomButtons/ButtonForm/ButtonFormPrev';
import styles from './styles.module.css'

function UserAcademics() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const academicsData = useSelector((store) => store.academics)

  const newDate = new Date();
  const newDateString = newDate.toDateString()
  const [startDate, setStartDate] = useState(newDate);
  const [endDate, setEndDate] = useState(newDate);

  const [academicState, setAcademicState] = useState({
    institution: '',
    degree: '',
    fieldOfStudy: '',
    activities: '',
    description: '',
    start: newDateString,
    end: newDateString,
  })

  const {
    institution,
    degree,
    fieldOfStudy,
    activities,
    description,
  } = academicState;

  useEffect(() => {
    if (academicsData) {
      setAcademicState(academicsData)
    }
  }, [])

  const onChange = (e) => {
    setAcademicState({
      ...academicState,
      [e.target.name]: e.target.value
    })
  }

  const onChangePicker = () => {
    setAcademicState({
      ...academicState,
      start: startDate.toDateString(),
      end: endDate.toDateString()
    })
  }

  const goBackButton = () => {
    dispatch(setAcademics(academicState));
    navigate('/');
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!institution || !degree) return alert('Institution & Degree are required')
    dispatch(setAcademics(academicState))
    navigate('/summary')
  }

  return (
    <div className={styles.academicsContainer}>
      <div>
        <ButtonFormPrev onClickFnc={goBackButton} />
        <ButtonFormNext onClickFnc={onSubmit} />
      </div>
      <form className={styles.formAcademicsContainer}>
        <CustomInputTwo
          parraf='Institution *'
          name='institution'
          value={institution}
          onChange={onChange}
        />
        <CustomInputTwo
          parraf='Degree *'
          name='degree'
          value={degree}
          onChange={onChange}
        />
        <CustomInputTwo
          parraf='Field Of Study'
          name='fieldOfStudy'
          value={fieldOfStudy}
          onChange={onChange}
        />
        <CustomInputTwo
          parraf='Activities'
          name='activities'
          value={activities}
          onChange={onChange}
        />
        <CustomDatePicker
          onChangePicker={onChangePicker}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <CustomTextArea
          parraf='Description'
          name='description'
          value={description}
          onChange={onChange}
        />
      </form>
    </div>
  )
}

export default UserAcademics;