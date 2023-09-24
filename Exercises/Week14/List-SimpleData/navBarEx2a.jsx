// Ex 2 - remove any item from navbar with less than 2 in stock
function NavBar({ stockitems, minstock }) {
  const [stock, setStock] = React.useState(stockitems);
  const [cart, setCart] = React.useState([]);
  const { Button } = ReactBootstrap;

  const cartItem = e => {
    let [name, num] = e.target.innerHTML.split(":");
    let theItem = stock.filter(item => item.name == name);
    setCart([...cart, ...theItem]);
  };
  let list2 = cart.map((item, index) => {
    return (
      <Button onClick={cartItem} key={index.toString()}>
        {item.name}:{item.instock}
      </Button>
    );
  });

  let list1 = stock.map((item, index) => {
    return (
      <Button onClick={cartItem} key={index.toString()}>
        {item.name}:{item.instock}
      </Button>
    );
  });
  // note that React needs to have a single Parent
  return (
    <>
      <ul style={{ listStyleType: "none" }}>{list1}</ul>
      <h1>You Picked</h1>
      <div>{list2}</div>
    </>
  );
}
const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];
ReactDOM.render(
  <NavBar stockitems={menuItems} minstock={2} />,
  document.getElementById("root")
);
