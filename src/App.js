import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import LoginStatus from './components/LoginStatus';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
         <h1>Context App</h1>
        <AuthProvider>
          {/* These components have access to isAuthenticated and Username */}
          {/* These are the children below */}
          <Login />
          <LoginStatus />
        </AuthProvider>
   
  
    </div>
  );
}

export default App;
