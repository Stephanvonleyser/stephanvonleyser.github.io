function App() {
  const { useState, useEffect } = React;
  const { Container } = ReactBootstrap;
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState("http://localhost:8080/data.json");
  const [query, setQuery] = useState("");
  console.log("Rendering App");
  useEffect(() => {
    console.log("Fetching data...");
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <Container>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() => setUrl("http://localhost:8080/data.json")}
      >
        Search
      </button>

      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));

//  // "https://hn.algolia.com/api/v1/search?query=redux"
