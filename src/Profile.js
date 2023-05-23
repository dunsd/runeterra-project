import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileContent from "./components/ProfileContent";

const Profile = () => {

  const test = async () => {
    const result = await fetch(`http://localhost:8000/Ulfilas`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await result.json();
    console.log(data);
  }
  return (
    <div className="App">
      <Header />
      <ProfileContent />
      <button onClick={test}>
        Test
      </button>
      <Footer />
    </div>
  );
}

export default Profile;
