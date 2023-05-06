import { useEffect } from "react";
import Header from "./components/Header/Header";


const tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tg.ready()
  }, [])


  return (
    <div className="App">
      <Header />
      work

    </div>
  );
}

export default App;
