import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileContent from "./components/ProfileContent";

const Profile = () => {

  const test = async () => {
    const result = await fetch(`http://localhost:8000/user/Ulfilas`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await result.json();
    console.log(data);
  }
  const testMatch = async () => {
    const result = await fetch(`http://localhost:8000/matchhistory/OLAK4Fna1yAyLqMFTJ1gPqICrCGwWEZPSQs9JdWtGtzz1NJezSSH8QMgF2jrtcmk0u5fV7lyPl8Uvw`, {
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
      <button onClick={testMatch}>
        Test Match
      </button>
      <Footer />
    </div>
  );
}

export default Profile;
