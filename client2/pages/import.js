import Header from "../components/homepage/header/Header";
import SubHeader from "../components/homepage/header/SubHeader";
import Footer from "../components/front/Footer";
import withAuth from "../hocs/withAuth";
import Uploader from '../components/upload/uploader';
import {
  getName,
  getRole,
  useIsAuthenticated,
  useAuth,
} from "../providers/Auth";

export default withAuth(function Import() {
  const isAuthenticated = useIsAuthenticated();
  const name = getName();
  const role = getRole();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SubHeader name={name} role={role} />

      <div className="antialiased bg-gray-200 flex-grow">
      <Uploader/>
      </div>

      <Footer />
    </div>
  );
});