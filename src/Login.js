import { usePhoton } from "@photonhealth/react";

const Login = () => {
  const { login } = usePhoton();

  return (
    <button onClick={() => login({})}>
      Login
    </button>
  );
};

export default Login;