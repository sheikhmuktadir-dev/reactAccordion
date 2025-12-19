import Style from "./accordion.module.css";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

export default function AccordionButton({
  children,
  clickHandler,
  accordion,
  compareData,
}) {
  return (
    <button onClick={clickHandler} className={Style.accordionButton}>
      <span>{children}</span>
      <span>
        {accordion === compareData ? <FaChevronUp /> : <FaChevronDown />}
      </span>
    </button>
  );
}
