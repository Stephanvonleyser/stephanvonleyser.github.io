const numbers = [1, 2, 3, 4, 5];

const updatedNums = numbers.map((number, index) => {
  return <li key={index.toString()}>{number}</li>;
});

ReactDOM.render(<ul>{updatedNums}</ul>, document.getElementById("root"));
