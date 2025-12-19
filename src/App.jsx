import Accordion from "./Accordion/Accordion";
import { accordionData } from "./Data/AccordionData";

function App() {
  return (
    <section className="faqSection">
      <div className="container">
        <h1 className="faqHeading">Freqently Asked Questions</h1>
        <Accordion accordionMainData={accordionData} />
      </div>
    </section>
  );
}

export default App;
