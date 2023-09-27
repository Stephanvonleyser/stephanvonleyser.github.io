const ATMDeposit = ({ onChange }) => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onChange}></input>
      <input type="submit" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  const [totalState, setTotalState] = React.useState(0);
  let transactionState = 0; // state of this transaction
  let status = `Account Balance $ ${totalState}`;
  console.log("Render Account");
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    transactionState = Number(event.target.value);
  };
  const handleSubmit = () => {
    setTotalState(totalState + transactionState);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <ATMDeposit onChange={handleChange}> Deposit</ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
