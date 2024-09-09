import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "@page/Main/Main";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import About from "@page/About/About";
import Residents from "@page/Residents/Residents";
import Events from "@page/Events/Events";
import News from "@page/News/News";
import Articles from "@page/Articles/Articles";
import Video from "@page/Video/Video";
import Profile from "@page/Profile/Profile";
import NotFound from "@page/NotFound/NotFound";
import "normalize.css";
import "./App.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoaded = () => {
      setIsLoaded(true);
    };
    window.addEventListener("load", handleLoaded);

    return () => {
      window.removeEventListener("load", handleLoaded);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className={`app ${isLoaded ? "loaded" : ""}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/residents" element={<Residents />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/video" element={<Video />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
