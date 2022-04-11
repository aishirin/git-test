console.log(data)
// let basket=[]
function App() {
    const [basket,setBasket]=React.useState([])
    const addToBasket = (item) => {
        const newBasket = [...basket, item]
        setBasket(newBasket)
      }
   const removeFromBasket=(product)=>{
    const newBasket=basket.filter((item)=>{
        item.id!==product.id
        setBasket(newBasket)
    })
   }
  return (
    <div className="App">
      <div className="product-list">
     {data.map((item)=>(
        <button className="product" key={item.id} onClick={()=>addToBasket(item)}>
        <div>{item.title}</div>
        <div>{item.price}</div>
      </button>
     ))}
      </div>
      <div className="basket">
        <div className="total">
          <span>Итого:</span>
          <span>0 c</span>
        </div>
        <div>
          {basket.map((product,index)=>(
          <button className="product" key={index} onClick={()=> removeFromBasket(product)}>
            <div>{product.title}</div>
            <div>{product.price} сом</div>
          </button>))}
        </div>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
