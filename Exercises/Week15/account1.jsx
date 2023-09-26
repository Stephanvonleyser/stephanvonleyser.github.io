// this keeps a running total of deposits and withdrawals

const ATMDeposit = ({ onChange }) => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onChange}></input>
      <input type="submit"></input>
    </label>
  );
};

const Account = () => {
  const [accountState, setAccountState] = React.useState(0);
  var deposit = 0;
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  const handleSubmit = event => {
    let newTotal = accountState + deposit;
    alert(`Account total = ${newTotal}`);
    setAccountState(newTotal);
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
ReactDOM.render(<Account />, document.getElementById("root"));
