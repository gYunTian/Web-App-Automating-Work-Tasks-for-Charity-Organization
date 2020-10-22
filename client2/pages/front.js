// flow: https://dev.to/dipakkr/implementing-authentication-in-nodejs-with-express-and-jwt-codelab-1-j5i
// https://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management

import Header from "../components/front/Header";
import Footer from "../components/front/Footer";
import MainForm from "../components/front/MainForm";

const name = "Logo";

export default function front() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div />
        
      <div className="h-auto">
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-center">
            <img
              src="/images/profile.png"
              alt={name}
              className="object-scale-down h-48"
            />
          </div>

          <div className="lg:flex lg:justify-center">
            <MainForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
