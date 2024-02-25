import { useState } from "react";

const App = function () {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  return (
    <div>
      <BillInput bill={bill} setBill={setBill}>
        <label>How much was the bill? &nbsp; </label>
      </BillInput>
      <TipCalculator tip={tip1} setTip={setTip1}>
        <label>How did you like the service? &nbsp; </label>
      </TipCalculator>
      <TipCalculator tip={tip2} setTip={setTip2}>
        <label>How did your Friend like the service? &nbsp; </label>
      </TipCalculator>
      <TotalBill bill={Number(bill)} tip1={Number(tip1)} tip2={Number(tip2)} />
      <Reset
        bill={bill}
        setBill={setBill}
        setTip1={setTip1}
        setTip2={setTip2}
      />
    </div>
  );
};

const BillInput = function ({ children, bill, setBill }) {
  //   console.log(bill);
  return (
    <div>
      {children}
      <input
        type="text"
        value={bill}
        onChange={(event) => {
          setBill(event.target.value);
        }}
      />
    </div>
  );
};

const TipCalculator = function ({ children, tip, setTip }) {
  return (
    <div>
      {children}
      <select
        style={{ cursor: "pointer" }}
        value={tip}
        onChange={(event) => {
          setTip(event.target.value);
        }}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
};

const TotalBill = function ({ bill, tip1, tip2 }) {
  const averageTip = ((tip1 + tip2) / 2 / 100) * bill;
  const finalBill = bill + averageTip;
  return (
    <div>
      {bill > 0 && (
        <h2>
          You Total Bill ${finalBill} (${bill} + ${averageTip} tip)
        </h2>
      )}
    </div>
  );
};

const Reset = function ({ bill, setBill, setTip1, setTip2 }) {
  return (
    <div>
      {bill > 0 && (
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            setBill(0);
            setTip1(0);
            setTip2(0);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};
export default App;
