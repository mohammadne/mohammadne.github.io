import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    window.open("mailto:" + "mohammadne.dev@gmail.com", "_self");
  }

  return <span></span>;
};

export default Email;
