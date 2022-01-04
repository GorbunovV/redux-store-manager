import { memo } from "react";
import { useSelector } from "react-redux";

import * as first from "../../../reducers/first";

const FirstCpRaw = () => {
  const events = useSelector(first.getEvents);

  return (
    <>
      <h1>First page</h1>
      <div>{events.map((event) => event.name).join(",")}</div>
    </>
  );
};

export const FirstCp = memo(FirstCpRaw);
export default FirstCp;
