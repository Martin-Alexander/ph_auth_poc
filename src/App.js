import './App.css';
import Login from './Login';
import Patients from './Patients';
import { usePhoton } from "@photonhealth/react";

function App() {
  const { isAuthenticated, isLoading, user } = usePhoton();

  return (
    <div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CdEXEB0LGTQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

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
