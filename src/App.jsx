import "./App.css";
import ButtonToggle from "./components/ButtonToggle";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [fast, setFast] = useState(false);
  const [good, setGood] = useState(false);
  const [cheap, setCheap] = useState(false);
  const [lastToggled, setLastToggled] = useState(null);

  useEffect(() => {
    if (fast && good && cheap) {
      const choices = [];
      if (lastToggled !== "fast") choices.push(() => setFast(false));
      if (lastToggled !== "good") choices.push(() => setGood(false));
      if (lastToggled !== "cheap") choices.push(() => setCheap(false));

      const randomChoice = Math.floor(Math.random() * choices.length);
      choices[randomChoice]();
    }
  }, [fast, good, cheap, lastToggled]);

  const handleToggle = (category) => {
    if (category === "fast") {
      setFast(!fast);
      setLastToggled("fast");
    } else if (category === "good") {
      setGood(!good);
      setLastToggled("good");
    } else if (category === "cheap") {
      setCheap(!cheap);
      setLastToggled("cheap");
    }
  };

  return (
    <>
      <Header />
      <main className=" flex flex-col justify-center items-start h-screen gap-16 pb-64 m-auto">
        <ButtonToggle
          category={fast}
          setCategory={() => handleToggle("fast")}
          circleColor={"bg-red-400"}
          buttonBackgroundColor={"bg-red-800"}
          text={"Fast"}
        />

        <ButtonToggle
          category={good}
          setCategory={() => handleToggle("good")}
          circleColor={"bg-green-500"}
          buttonBackgroundColor={"bg-green-800"}
          text={"Good"}
        />

        <ButtonToggle
          category={cheap}
          setCategory={() => handleToggle("cheap")}
          circleColor={"bg-blue-500"}
          buttonBackgroundColor={"bg-blue-800"}
          text={"Cheap"}
        />
      </main>
    </>
  );
}

export default App;
