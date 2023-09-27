const useMyapi = (aurl) => {
  const { useState, useEffect, useReducer } = React;
  const [url, setUrl] = useState(aurl);
  const [state, dispatch] = useReducer(myReducer, { a: 0, b: 0 });

  useEffect(() => {
    let didCancel = false;
    const fire = () => {
      console.log(`In useEffect about to fire dispatch`);
      dispatch({ type: "SUCCESS" });
    };
    fire();
    return () => {};
  }, [url]); // watch for url changes
  return [state, setUrl];
};
// this must be "outside of useMyApp"
const myReducer = (action, state) => {
  switch (action.type) {
    case action.LOAD:
      return { ...state, a: 1 };
    case action.SUCCESS: {
      console.log(`state: ${JSON.stringify(state)}`);
      return { ...state, b: 1 };
    }
    case action.ERROR:
      return { ...state, a: -1, b: -1 };
    default:
      throw new Error();
  }
};
const App = () => {
  const { Fragment, useState, useEffect, useReducer } = React;
  const [query, setQuery] = useState("redux");

  const [state, goUrl] = useMyapi(
    "http://hn.algolia.com/api/v1/search?query=react"
  );
  console.log(`Render App: ${JSON.stringify(state)}`);

  return (
    <Fragment>
      <form
        onSubmit={(event) => {
          goUrl("http://hn.algolia.com/api/v1/search?query=react");
          event.preventDefault();
        }}
      >
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
