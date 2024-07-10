import { useEffect, useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import BtnToggleModal from "./components/BtnToggleModal";

export default function App() {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPI() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      console.log("NASA_KEY : ", NASA_KEY);
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = "NASA-" + today;

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetched from cache today\n", apiData);
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Fetched from API today\n", apiData);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchAPI();
  }, []);

  return (
    <>
      {data ? (
        <>
          <BtnToggleModal handleToggleModal={handleToggleModal} />
          <Main data={data} />
          {showModal && (
            <Sidebar handleToggleModal={handleToggleModal} data={data} />
          )}
          <Footer data={data} />
        </>
      ) : (
        <div className="loading-state">
          <i className="fa-solid fa-circle-notch"></i>
          <div>Loading...</div>
        </div>
      )}
    </>
  );
}
