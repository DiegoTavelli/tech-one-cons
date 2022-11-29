import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedSummary = ({ children }) => {
  const userData = useSelector((state) => state.person);
  const academicData = useSelector((state) => state.academics)

  if (!userData && !academicData) {
    return <Navigate to='/' />
  }

  return children
}

export default ProtectedSummary;