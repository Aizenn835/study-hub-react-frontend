import './App.css'
import Sidebar from './components/SideBar/Sidebar.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx';

function App() {
  return (
    <div className='app-container'>
      <Sidebar currentPath={"/overview"}/> 
      <Dashboard/>
    </div> 
  );
}

export default App
