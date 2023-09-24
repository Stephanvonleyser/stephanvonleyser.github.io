// Ex 2 - remove any item from navbar with less than 2 in stock
function NavBar({ menuitems, minstock }) {
  let list1 = menuitems.filter(item => item.instock >= minstock);
  let list2 = list1.map((item, index) => {
    return <li key={index.toString()}>{item.name}</li>;
  });

  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{list2}</ul>;
}
const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];
ReactDOM.render(
  <NavBar menuitems={menuItems} minstock={2} />,
  document.getElementById("root")
);
