import { FetchResponseProps } from "./Types";

export function fetchResponse({
  route,
  setResponse,
}: FetchResponseProps): void {
  fetch(`https://fast-meadow-42419.herokuapp.com${route}`)
    .then((res) => res.json())
    .then((json) => setResponse(json));
}
