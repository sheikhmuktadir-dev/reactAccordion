import Style from "./accordion.module.css";
import AccordionButton from "./AccordionButton";
import AccordionContent from "./AccordionContent";
import { useState } from "react";

export default function Accordion({ accordionMainData }) {
  const [accordion, setAccordion] = useState(null);

  const accordionHandler = (id) => {
    setAccordion((prev) => (prev === id ? null : id));
  };
  return (
    <>
      {accordionMainData?.length > 0 ? (
        <div className={Style.accordionMain}>
          {accordionMainData?.map((list, index) => {
            return (
              <div
                className={`${Style.accordionItem} ${
                  accordion === list.id ? Style.accordionItemActive : ""
                }`}
                key={list?.id || index}
              >
                <div className={Style.accordionItemBox}>Q</div>
                <div className={Style.accordionItemMain}>
                  <AccordionButton
                    clickHandler={() => accordionHandler(list.id)}
                    accordion={accordion}
                    compareData={list.id}
                  >
                    {list?.question}
                  </AccordionButton>
                  <AccordionContent accordion={accordion} compareData={list.id}>
                    {list?.answer}
                  </AccordionContent>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        "No Faq Found"
      )}
    </>
  );
}
