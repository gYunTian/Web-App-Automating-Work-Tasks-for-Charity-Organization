// flow: https://dev.to/dipakkr/implementing-authentication-in-nodejs-with-express-and-jwt-codelab-1-j5i
// https://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management

import Footer from "../components/front/Footer";
import MainForm from "../components/front/MainForm";
import LoadingOverlay from "react-loading-overlay";

const name = "Logo";

class front extends React.Component {
  constructor() {
    super();
    this.state = {
      'loading': false,
    };
  }

  setLoading = loading => {
    this.setState({
      'loading': true,
    })
  }

  stopLoading = loading => {
    this.setState({
      'loading': false,
    })
  }

  render() {
    return (
      <LoadingOverlay active={this.state.loading} spinner text='Please wait...'>
      <div className="flex flex-col h-screen justify-between">
        <div />
        <div className="h-auto">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <img
                src="/images/logo2.png"
                alt={name}
                className="object-scale-down h-48"
              />
            </div>

            <div className="sm:flex sm:justify-center">
              <MainForm setLoading={this.setLoading} stopLoading={this.stopLoading} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
      </LoadingOverlay>
    );
  }
}

export default front
