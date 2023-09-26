let transactionState = 0; // state of this transaction
let totalState = 0; // Account total at Bank
let status = "Account Balance $zero";
const handleChange = event => {
  console.log(`handleChange ${event.target.value}`);
  transactionState = Number(event.target.value);
};
const handleSubmit = event => {
  totalState += transactionState;
  status = `Account Balance $ ${totalState}`;
  document.getElementById("total").innerHTML = status;
  event.preventDefault();
};

const ATMDeposit = () => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={handleChange}></input>
      <input type="submit" onClick={handleSubmit}></input>
      <h2 id="total">{status}</h2>
    </label>
  );
};

const Account = () => {
  const [accountState, setAccountState] = React.useState(0);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setAccountState(event.target.value);
  };
  const handleSubmit = event => {
    alert(`Account total = ${accountState}`);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Account Balance {accountState}</h2>
      <ATMDeposit onChange={handleChange}> Deposit</ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<ATMDeposit />, document.getElementById("root"));
