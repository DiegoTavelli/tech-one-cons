import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CreateUser from './components/CreateUser/CreateUser';
import UsersList from './components/UsersList/UsersList';
import UserAcademics from './components/UserAcademics/UserAcademics';
import Summary from './components/Summary/Summary'
import ProtectedAcademic from './components/ProtectedRoutes/ProtectedAcademic'
import ProtectedSummary from './components/ProtectedRoutes/ProtectedSummary'
import { useEffect } from 'react';
import { getPersons } from './store/actions/index'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersons())
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<CreateUser />} />
          <Route
            path='/academic'
            element={
              <ProtectedAcademic>
                <UserAcademics />
              </ProtectedAcademic>
            } />
          <Route
            path='/summary'
            element={
              <ProtectedSummary>
                <Summary />
              </ProtectedSummary>
            } />
          <Route path='/users' element={<UsersList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
