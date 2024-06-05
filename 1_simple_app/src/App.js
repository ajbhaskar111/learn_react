// import logo from './logo.svg';
import './App.css';

const sum = 5 + 5
const list =  (
  <ul className="list-group">
    <li className="list-group-item">Apple</li>
    <li className="list-group-item">Bananas</li>
    <li className="list-group-item">Cherries</li>
  </ul>
)
const label = <h5>Not Same</h5>
const x = parseInt(prompt('Enter you vlaue'));
function getand(){
    return  <h1>{(x) == 5 ? "same" : "Not Same"}</h1>;
}
function App() {


  return (
     <>
     {/* <section className="container py-5">
      <h1>Hello React</h1>
      <p>The sum = {sum}</p>
     </section> */}
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TextUtilize</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
           
            
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <section >
      <div className="container">
          <div>{list}</div>
          <p>{getand()}</p>
      </div>
    </section>
    
     </>
  );
}
export default App;
