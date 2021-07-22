import { IResponse } from "../utils/Types";

interface DigipetStatsProps {
  response: IResponse | undefined;
}
export default function DigipetStats({
  response,
}: DigipetStatsProps): JSX.Element {
  if (response?.digipet) {
    const stats = Object.entries(response.digipet);
    return (
      <div>
        {stats.map((stat) => {
          return (
            <li>
              {stat[0]}: {stat[1]}
            </li>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
}
