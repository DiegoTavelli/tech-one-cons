import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
import CustomInputTwo from '../CustomComponents/CustomInputTwo/CustomInputTwo';
import { setPerson, clearPost } from '../../store/actions/index'
import { useNavigate } from 'react-router-dom';
import ButtonFormNext from '../CustomComponents/CustomButtons/ButtonForm/ButtonFormNext';


function CreateUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const personData = useSelector((store) => store.person);
  const postRes = useSelector((store) => store.post)

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
    if (postRes) {
      dispatch(clearPost());
    }

  }, [])

  //email validation
  const onKeyUpEmail = (e) => {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(e.target.value) && e.target.value !== '') {
      setError({
        ...error,
        [e.target.name]: `please insert a valid ${e.target.name}`
      })
    } else setError({
      ...error,
      [e.target.name]: ''
    })
  }

  //only string validation
  const onChangeText = (e) => {
    const regexStr = /^[a-záéíóú.\s]*$/i;
    if (regexStr.test(e.target.value)) {
      setUserState({
        ...userState,
        [e.target.name]: e.target.value
      })
    }
  }

  //only number validation
  const onChangeNumber = (e) => {
    const regexNum = /^[0-9]*$/;
    if (regexNum.test(e.target.value)) {
      setUserState({
        ...userState,
        [e.target.name]: Number(e.target.value)
      })
    }
  }

  //phone validation
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

  // for no validated inputs
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
      <div>
        <ButtonFormNext onClickFnc={handleSubmit} />
      </div>
      {
        postRes &&
        <div
          style={{ backgroundColor: postRes.info ? 'green' : 'red' }}
        >{postRes.info ? postRes.info : postRes.err}
        </div>
      }
      <form className={styles.formContainer}>
        <CustomInputTwo
          parraf='Name *'
          name='name'
          value={name}
          placeholder='name'
          onChange={onChangeText}
          error={error}
        />
        <CustomInputTwo
          parraf='Last Name *'
          name='lastName'
          value={lastName}
          placeholder='last name'
          onChange={onChangeText}
          error={error}
        />
        <CustomInputTwo
          parraf='Email *'
          name='email'
          value={email}
          placeholder='your@email.com'
          onKeyUp={onKeyUpEmail}
          onChange={onChangeUncontrolled}
          error={error}
        />
        <CustomInputTwo
          parraf='Phone *'
          name='phone'
          value={phone}
          placeholder='+54 1124564822'
          onKeyUp={onKeyUpPhone}
          onChange={onChangeUncontrolled}
          error={error}
        />
        <CustomInputTwo
          parraf='Country'
          name='country'
          value={country}
          placeholder='country'
          onChange={onChangeText}
          error={error}
        />
        <CustomInputTwo
          parraf='City'
          name='city'
          value={city}
          placeholder='city'
          onChange={onChangeText}
          error={error}
        />
        <CustomInputTwo
          parraf='Street'
          name='street'
          value={street}
          placeholder='street'
          onChange={onChangeUncontrolled}
          error={error}
        />
        <CustomInputTwo
          parraf='Street Number'
          name='streetNumber'
          value={streetNumber}
          placeholder='ej. 500'
          onChange={onChangeNumber}
          error={error}
        />
        <CustomInputTwo
          parraf='Postal Code'
          name='postalCode'
          value={postalCode}
          placeholder='postal code'
          onChange={onChangeNumber}
          error={error}
        />
      </form>
    </>
  )
}

export default CreateUser;


