// Ex 3 - write out all items with their stock number
// provide a button and use onClick to move 1 item into the Shopping Cart
// use React.useState to keep track of items in the Cart.
// list out the Cart items in another column
function NavBar({ menuitems }) {
  const { Card, Button } = ReactBootstrap;
  const [stock, setStock] = React.useState(menuitems);
  const [cart, setCart] = React.useState([]);
  const moveToCart = (e) => {
    let [name, num] = e.target.innerHTML.split(":");
    if (num <= 0) return; // zero items in stock
    // get item with name from stock and update stock
    let item = stock.filter((item) => item.name == name);
    // check if its in stock ie item.instock > 0
    let newStock = stock.map((item) => {
      if (item.name == name) {
        item.instock--;
      }
      return item;
    });
    // now filter out stock items == 0;

    setStock([...newStock]);
    setCart([...cart, ...item]); // for now don't worry about repeat items in Cart
    console.log(`Cart: ${JSON.stringify(cart)}`);
  };
  const updatedList = menuitems.map((item, index) => {
    return (
      <Button key={index} onClick={moveToCart}>
        {item.name}:{item.instock}
      </Button>
    );
  });
  // note that React needs to have a single Parent
  return (
    <>
      <ul key="stock" style={{ listStyleType: "none" }}>
        {updatedList}
      </ul>
      <h1>Shopping Cart</h1>
      <Cart cartitems={cart}> Cart Items</Cart>
    </>
  );
}
function Cart({ cartitems }) {
  const { Card, Button } = ReactBootstrap;
  console.log("rendering Cart");
  const updatedList = cartitems.map((item, index) => {
    return <Button key={index}>{item.name}</Button>;
  });
  return (
    <ul style={{ listStyleType: "none" }} key="cart">
      {updatedList}
    </ul>
  );
}

const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 },
];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
