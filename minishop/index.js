console.log(data)

function App() {
  return (
    <div className="App">
      <div className="product-list">
        <button className="product" >
          <div>Название</div>
          <div>Цена c</div>
        </button>
      </div>
      <div className="basket">
        <div className="total">
          <span>Итого:</span>
          <span>0 c</span>
        </div>
        <div>
          <button className="product" >
            <div>Название</div>
            <div>Цена c</div>
          </button>
        </div>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
