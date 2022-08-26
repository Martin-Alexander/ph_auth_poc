import './App.css';
import Login from './Login';
import Patients from './Patients';
import { usePhoton } from "@photonhealth/react";

function App() {
  const { isAuthenticated, isLoading, user } = usePhoton();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isAuthenticated ? (
        <>
          <p>Name: {user.name}</p>
          <Patients />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
