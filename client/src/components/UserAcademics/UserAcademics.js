import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CustomInput from '../CustomComponents/CustomInput/CustomInput'
import CustomTextArea from '../CustomComponents/CustomTextArea/CustomTextArea';
import CustomDatePicker from '../CustomComponents/CustomDatePicker/CustomDatePicker';
import { setAcademics, postUser } from '../../store/actions/index'


function UserAcademics() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const personData = useSelector((store) => store.person)
  const academicsData = useSelector((store) => store.academics)

  const newDate = new Date();
  const [startDate, setStartDate] = useState(newDate);
  const [endDate, setEndDate] = useState(newDate);

  const [academicState, setAcademicState] = useState({
    institution: '',
    degree: '',
    fieldOfStudy: '',
    activities: '',
    description: '',
    start: newDate,
    end: newDate,
    titleImg: '',
  })

  const {
    institution,
    degree,
    fieldOfStudy,
    activities,
    description,
    titleImg,
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
      start: startDate,
      end: endDate
    })
  }

  const goBackButton = () => {
    dispatch(setAcademics(academicState));
    navigate('/');
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postUser(personData, academicState))
  }


  // console.log(academicState)
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <CustomInput
        parraf='Institution'
        name='institution'
        value={institution}
        onChange={onChange}
      />
      <CustomInput
        parraf='Degree'
        name='degree'
        value={degree}
        onChange={onChange}
      />
      <CustomInput
        parraf='Field Of Study'
        name='fieldOfStudy'
        value={fieldOfStudy}
        onChange={onChange}
      />
      <CustomInput
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
      <CustomInput
        parraf='titleImg'
        name='titleImg'
        value={titleImg}
        onChange={onChange}
      />
      <button type='submit'></button>
      <button onClick={() => goBackButton()} >x</button>
    </form>
  )
}

export default UserAcademics;