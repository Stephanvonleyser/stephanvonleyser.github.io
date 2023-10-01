const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;


function Spa() {
  return (
    <HashRouter>
      <div className="container">
          <h1>Routing - Hello World</h1>

          {/* --- navigation bar --- */}
          <Nav/>
          <hr/>

          {/* --- routes --- */}          
          <Route path="/" exact    component={Home}     />
          <Route path="/about/"    component={About}    />
          <Route path="/products/" component={Products} />
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
