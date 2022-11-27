import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser/CreateUser';
import UsersList from './components/UsersList/UsersList';
import UserAcademics from './components/UserAcademics/UserAcademics';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateUser />} />
          <Route path='/academic' element={<UserAcademics />} />
          <Route path='/users' element={<UsersList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
