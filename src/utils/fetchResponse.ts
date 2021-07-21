import { FetchResponseProps } from "./Types";

export function fetchResponse({
  route,
  setResponse,
}: FetchResponseProps): void {
  fetch(`http://localhost:4000${route}`)
    .then((res) => res.json())
    .then((json) => setResponse(json));
}
