import { useState } from "react";
import Profile from "./Profile";
import Main from "./Main";

function App() {
  const [nightmode, changeMode] = useState(false);

  const handleButtonPress = () => {
    changeMode(!nightmode);
  }

  return (
    <div>
      <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + (nightmode ?  "/night.css" : "/day.css")} />
      <Profile />
      <Main />
    </div>
  );
}

export default App;
