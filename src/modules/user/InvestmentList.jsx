import React, { useState } from "react";
import { InvestmentCard } from "../../components/features";
import { cardImage } from "../../assets/user/investmentList";

const InvestmentList = () => {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <>
      <div className="investmentlist">
        <div className="investmentlist-header">
          <h2>Financial Investment Until 2023</h2>
          <p>
            There are numerous ways to invest; please choose the type of
            investment you prefer.
          </p>
        </div>
        <div className="investmentlist-container">
          <div className="investmentlist-container-toggle">
            <button
              id={toggleActive && "toggle_active"}
              onClick={() => setToggleActive(true)}
            >
              Saving Funds
            </button>
            <button
              id={toggleActive ? "" : "toggle_active"}
              onClick={() => setToggleActive(false)}
            >
              Car Park
            </button>
          </div>

          {/* Cards Section  */}

          <div className="investmentlist-container-cardsSection">
            <InvestmentCard
              image={cardImage}
              heading="Popular Booklet - 6,90% Net"
              date="08-12-2023"
              invest="456.237"
              loan="456.237"
              ticket="456.237"
              interest="6.9"
              period="12"
              guarented="3"
              subscription="23"
              to="/"
            />
            <InvestmentCard
              image={cardImage}
              heading="Popular Booklet - 6,90% Net"
              date="08-12-2023"
              invest="456.237"
              loan="456.237"
              ticket="456.237"
              interest="6.9"
              period="12"
              guarented="3"
              subscription="23"
              to="/"
            />
            <InvestmentCard
              image={cardImage}
              heading="Popular Booklet - 6,90% Net"
              date="08-12-2023"
              invest="456.237"
              loan="456.237"
              ticket="456.237"
              interest="6.9"
              period="12"
              guarented="3"
              subscription="23"
              to="/"
            />
            <InvestmentCard
              image={cardImage}
              heading="Popular Booklet - 6,90% Net"
              date="08-12-2023"
              invest="456.237"
              loan="456.237"
              ticket="456.237"
              interest="6.9"
              period="12"
              guarented="3"
              subscription="23"
              to="/"
            />
            <InvestmentCard
              image={cardImage}
              heading="Popular Booklet - 6,90% Net"
              date="08-12-2023"
              invest="456.237"
              loan="456.237"
              ticket="456.237"
              interest="6.9"
              period="12"
              guarented="3"
              subscription="23"
              to="/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentList;
