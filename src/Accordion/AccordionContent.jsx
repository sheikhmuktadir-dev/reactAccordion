import Style from "./accordion.module.css";

export default function AccordionContent({ children, accordion, compareData }) {
  return (
    <div
      className={`${Style.accordionContent} ${
        accordion === compareData ? Style.accordionContentVisible : ""
      }`}
    >
      <p>{children}</p>
    </div>
  );
}
