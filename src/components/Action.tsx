import { ActionProps } from "../utils/Types";
import { fetchResponse } from "../utils/fetchResponse";
import { useContext } from "react";
import { AllDigimonContext } from "../App";

export default function Action({
  action,
  route,
  setResponse,
  setDigimon,
  digimon,
}: ActionProps): JSX.Element {
  const AllDigimon = useContext(AllDigimonContext);

  const onClickAction = () => {
    fetchResponse({ route, setResponse });
    if (action === "Hatch") {
      const randomElement =
        AllDigimon[Math.floor(Math.random() * AllDigimon.length)];
      if (digimon.length === 0) {
        setDigimon([randomElement]);
      }
    }
    if (action === "Rehome") {
      setDigimon([]);
    }
  };

  return <button onClick={() => onClickAction()}>{action}</button>;
}
