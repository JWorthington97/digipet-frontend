import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Digimon, IResponse } from "./utils/Types";
import Action from "./components/Action";
import DigipetStats from "./components/DigipetStats";
import actions from './utils/actions.json'

export const AllDigimonContext = createContext<Digimon[]>([]);

function App() {
  // fetch / from the api in response states
  const [response, setResponse] = useState<IResponse>();
  const [digimon, setDigimon] = useState<Digimon[]>([]);
  const [allDigimon, setAllDigimon] = useState<Digimon[]>([]);

  useEffect(() => {
    const fetchDigimon = () => {
      fetch("https://digimon-api.vercel.app/api/digimon")
        .then((res) => res.json())
        .then((json) => setAllDigimon(json));
    };
    fetchDigimon();
  }, []);

  useEffect(() => {
    const fetchUsersDigimon = () => {
      fetch("https://fast-meadow-42419.herokuapp.com/digipet")
        .then((res) => res.json())
        .then((json) => setAllDigimon(json));
    };
    fetchUsersDigimon();
  }, []);

  return (
    <>
      <div>{digimon.length > 0 && digimon[0].name}</div>
      <div className="digimonImg">
        {digimon.length > 0 && <img src={digimon[0].img} alt="" />}
      </div>

      <AllDigimonContext.Provider value={allDigimon}>

        <div>
          {actions.map((action) => {                              
          return (
            <Action
              action={action.action}
              route={action.route}
              setResponse={setResponse}
              setDigimon={setDigimon}
              digimon={digimon}
            />
          );
        })}
        </div>     

        <div>{response !== undefined && response.message}</div>
        <DigipetStats response={response}/>
      </AllDigimonContext.Provider>
    </>
  );
}

export default App;
