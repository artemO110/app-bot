import { useEffect } from "react";

function App() {
  useEffect(() => {
    tg.ready()
  }, [])
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
