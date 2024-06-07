// import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/Navbar';
import Avtar from './MyComponents/Avtar';
import UserProfile from './MyComponents/UserProfile';



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
     
     <Navbar title={220} links = {["home","About"]}/>
     <Avtar />

     <UserProfile />
    {/* <section >
      <div className="container">
          <div>{list}</div>
          <p>{getand()}</p>
        
      </div>
    </section> */}
    
     </>
  );
}
export default App;
