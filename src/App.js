import { useState } from "react";
import Profile from "./Profile";
import Main from "./Main";

function App() {
  const [nightmode, changeMode] = useState(false);

  const handleButtonPress = () => {
    if(nightmode) document.body.style = "background-color: #FFF";
    else document.body.style = "background-color: #000";
    changeMode(!nightmode);
  }

  return (
    <div>
      <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + (nightmode ?  "/night.css" : "/day.css")} />
      <Profile />
      <Main handlePress={handleButtonPress} />
    </div>
  );
}

export default App;
