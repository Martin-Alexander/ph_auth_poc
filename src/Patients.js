import { usePhoton } from "@photonhealth/react";

const Patients = () => {
  const { getPatients, logout } = usePhoton();
  const { patients, loading } = getPatients({});

  return <div>
    <button onClick={() => logout({})}>Logout</button>
    {
      loading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {patients.map((patient) => {
            return (<li>
              {patient.name.full}
            </li>)
          })}
        </ul>
      )
    }
  </div>
}

export default Patients;