import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserForm from "./components/UserForm";

const Profile = () => {
  return (
    <div className="App">
      <Header />
      <UserForm />
      <Footer />
    </div>
  );
}

export default Profile;
