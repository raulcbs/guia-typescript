/* eslint-disable @next/next/no-img-element */
import { Sub } from "../../../types";

interface Props {
  subs: Array<Sub>;
}

const List = ({ subs }: Props) => {
  return (
    <ul>
      {subs.map((sub) => {
        return (
          <li
            key={sub.nick}
            className="flex flex-col items-center rounded-[4px] border border-[#eee] border-solid list-none mb-6 max-w-[320px] py-[8px] px-[32px]"
          >
            <img
              className="rounded-[200px] h-auto w-[50px]"
              src={sub.avatar}
              alt={`Avatar for ${sub.nick}`}
            />
            <h4 className="font-bold">
              {sub.nick} <small>({sub.subMonths})</small>
            </h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
