console.log(React);
console.log(ReactDOM);

const element = <div> First Rweact Element </div>

const element2 = React.createElement(
  "div",
  null,
  "First Element"
)

const element3 = (
  <div>
    <p id="main" className="red">Text</p>
  </div>
)
const element4 = <div><p>Text</p></div>

const element5 = (
  <>
    <section></section>
    <section></section>
  </>
)
// Second part  

const header = <h1 className="title">Welcome on my Page!</h1>

const classBig = "big";
const handleClick = () => alert("click");
const main = (
  <div>
    <h1 person="Adek" onClick={handleClick} className="red">First Article
    </h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporis consectetur tenetur placeat aliquam. Minima officiis atque voluptatem quia dolorum voluptates eligendi, placeat unde similique asperiores harum enim aperiam quas!</p>
  </div >
)
const text = "Footer";
const footer = (
  <footer>
    <p className={classBig}>{text}</p>
  </footer>
)

const app = [header, main, footer]

ReactDOM.render(app, document.getElementById("root"))