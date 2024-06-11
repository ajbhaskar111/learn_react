// import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/Navbar';
import Avtar from './MyComponents/Avtar';
import UserProfile from './MyComponents/UserProfile';
import ComponentPure from './MyComponents/ComponentPure';
import TextForm from './MyComponents/TextForm';
import Gallery from './MyComponents/Gallery';




// const sum = 5 + 5
// const list =  (
//   <ul className="list-group">
//     <li className="list-group-item">Apple</li>
//     <li className="list-group-item">Bananas</li>
//     <li className="list-group-item">Cherries</li>
//   </ul>
// )
// const label = <h5>Not Same</h5>
// const x = parseInt(prompt('Enter you vlaue'));
// function getand(){
//     return  <h1>{(x) == 5 ? "same" : "Not Same"}</h1>;
// }
function App() {
  return (
     <>
     
     <Navbar title="Textulit" links = {["home","About"]}/>
     {/* <Avtar /> */}

     {/* <UserProfile /> */}

     {/* <ComponentPure /> */}

     <TextForm title="Fill this Form"/>
    {/* <section >
      <div className="container">
          <div>{list}</div>
          <p>{getand()}</p>
        
      </div>
    </section> */}
    <Gallery />
     </>
  );
}
export default App;
