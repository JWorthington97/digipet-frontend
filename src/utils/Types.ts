export interface Digipet {
  happiness: number;
  nutrition: number;
  discipline: number;
}

export interface IResponse {
  message: string;
  digipet: Digipet;
}

export interface FetchResponseProps {
  route: string;
  setResponse(message: IResponse): void;
}

export interface HatchProps {
  setResponse(message: IResponse): void;
}

export interface ActionProps {
  action: string;
  route: string;
  setResponse(message: IResponse): void;
  setDigimon(digimon: Digimon[]): void;
  digimon: Digimon[];
}

export interface Digimon {
  name: string;
  img: string;
  level: string;
}
