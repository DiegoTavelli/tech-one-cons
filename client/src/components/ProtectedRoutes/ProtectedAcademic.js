import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedAcademic = ({ children }) => {
  const userData = useSelector((state) => state.person)

  if (!userData) {
    return <Navigate to='/' />
  }

  return children
}

export default ProtectedAcademic;