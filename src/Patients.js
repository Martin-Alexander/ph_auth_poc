import { usePhoton } from "@photonhealth/react";

const Patients = () => {
  const { getPatients } = usePhoton();
  const { patients, loading } = getPatients({});

  return <div>
    {
      loading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {patients.map((patient) => {
            <li>
              {patient.name}
            </li>
          })}
        </ul>
      )
    }
  </div>
}

export default Patients;