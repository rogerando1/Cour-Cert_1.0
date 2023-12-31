import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  // Fetching message from backend on mount
  useEffect(() => {
    fetch("https://course-certification1-0.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <div className ="home-banner-container">
                <div className="home-bannerImage-container">     
                </div>
                <div className="home-text-section">
                    <h1 className="first-heading">
                        Digital Solution
                    </h1>
                    <h1 className="second-heading">Explore Our Courses</h1>
                    <p className="primary-text">
                        "Education Elevated, Certification Validated"
                    </p>
                    <h1> {message}</h1>
                </div>
            </div>
    </div>
  );
}

export default App;