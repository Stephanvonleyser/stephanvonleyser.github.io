// use of "props" to set data
function NavBar(props) {
  const list = props.menuitems;
  const { Button } = ReactBootstrap;
  // each item should have an unique key
  const updatedList = list.map((listItems, index) => {
    return <Button key={index}>{listItems}</Button>;
  });
  // note that React needs to have a single Parent
  return <ul>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
