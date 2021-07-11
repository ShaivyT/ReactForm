import React from "react";
import {BiArchive} from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <BiArchive className="inline-block text-red-400 align-top" />
        Your appointments!
      </h1>
      <Search />
      <AddAppointment />
    </div>
  );
}

export default App;
