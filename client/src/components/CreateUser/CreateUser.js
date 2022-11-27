import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
import CustomInput from '../CustomComponents/CustomInput/CustomInput';
import { setPerson } from '../../store/actions/index'
import { useNavigate } from 'react-router-dom';
// import countriesData from '../../apiCountries/countries.json'

function CreateUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const personData = useSelector((store) => store.person)
  // const countries = [JSON.stringify(countriesData)]

  const [error, setError] = useState({
    email: '',
    phone: ''
  })
  const [userState, setUserState] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    street: '',
    streetNumber: '',
    postalCode: ''
  })

  const {
    name,
    lastName,
    email,
    phone,
    street,
    streetNumber,
    country,
    city,
    postalCode,
  } = userState;

  useEffect(() => {
    if (personData) {
      setUserState(personData)
    }
  }, [])

  //email controller
  const onKeyUpEmail = (e) => {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(e.target.value) && e.target.value !== '') {
      setError({
        ...error,
        [e.target.name]: `please insert a valid ${e.target.name}`
      })
    }
    else setError({
      ...error,
      [e.target.name]: ''
    })
  }

  //string controller
  const onChangeText = (e) => {
    const regexStr = /^[a-záéíóú.\s]*$/i;
    if (regexStr.test(e.target.value)) {
      setUserState({
        ...userState,
        [e.target.name]: e.target.value
      })
    }
  }

  //number controller
  const onChangeNumber = (e) => {
    const regexNum = /^[0-9]*$/;
    if (regexNum.test(e.target.value)) {
      setUserState({
        ...userState,
        [e.target.name]: e.target.value
      })
    }
  }

  //phone controller
  const onKeyUpPhone = (e) => {
    const regexStr = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
    if (!regexStr.test(e.target.value) && e.target.value !== '') {
      setError({
        ...error,
        [e.target.name]: `please insert a valid ${e.target.name}`
      })
    }
    else setError({
      ...error,
      [e.target.name]: ''
    })
  }

  // for uncontrolled inputs
  const onChangeUncontrolled = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && lastName && email && phone && (!error.email && !error.phone)) {
      dispatch(setPerson(userState))
      navigate('/academic')
    }
    else alert(
      error.email || error.phone ?
        'there is an error in some parameter' :
        'name, last name, email & phone are required')
  }


  return (
    <>
      <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e)} >
        <CustomInput
          parraf='Name *'
          name='name'
          value={name}
          placeholder='name'
          onChange={onChangeText}
          error={error}
          required
        />
        <CustomInput
          parraf='Last Name *'
          name='lastName'
          value={lastName}
          placeholder='last name'
          onChange={onChangeText}
          error={error}
          required
        />
        <CustomInput
          parraf='Email *'
          name='email'
          value={email}
          placeholder='your@email.com'
          onKeyUp={onKeyUpEmail}
          onChange={onChangeUncontrolled}
          error={error}
          required
        />
        <CustomInput
          parraf='Phone *'
          name='phone'
          value={phone}
          placeholder='+54 1127764822'
          onKeyUp={onKeyUpPhone}
          onChange={onChangeUncontrolled}
          error={error}
          required
        />
        <CustomInput
          parraf='Country'
          name='country'
          value={country}
          placeholder='country'
          onChange={onChangeText}
          error={error}
        />
        <CustomInput
          parraf='City'
          name='city'
          value={city}
          placeholder='city'
          onChange={onChangeText}
          error={error}
        />
        <CustomInput
          parraf='Street'
          name='street'
          value={street}
          placeholder='street'
          onChange={onChangeUncontrolled}
          error={error}
        />
        <CustomInput
          parraf='Street Number'
          name='streetNumber'
          value={streetNumber}
          placeholder='ej. 500'
          onChange={onChangeNumber}
          error={error}
        />
        <CustomInput
          parraf='Postal Code'
          name='postalCode'
          value={postalCode}
          placeholder='postal code'
          onChange={onChangeNumber}
          error={error}
        />
        <button
          type='submit'
        >{'>'}
        </button>
      </form>
    </>
  )
}

export default CreateUser;


