import Navbar from "./Navbar";
import { useAuth } from "./auth";

export default function Profile() {
  const auth = useAuth();
  console.log(auth);

  return (
    <div>
      <Navbar />
      <div>Welcome {auth.user?.name}</div>
      <div>{auth.user?.email}</div>
    </div>
  );
}
