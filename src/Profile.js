import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileContent from "./components/ProfileContent";

const Profile = () => {
  return (
    <div className="App">
      <Header />
      <ProfileContent />
      <Footer />
    </div>
  );
};

export default Profile;
