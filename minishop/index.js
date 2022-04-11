console.log(data)
// let basket=[]
function App() {
    const [basket,setBasket]=React.useState([])
    
    // const buttons=[]
    // for(let i=0;i<data.length;i++){
    //     buttons.push(
    //         <button className="product">
    //           <div>{data[i].title}</div>
    //           <div>{data[i].price}</div>
    //         </button>
    //     )
    // }

    let count=0
basket.map((item)=>count+=item.price)
console.log(count);
  return (
    <div className="App">
      <div className="product-list">
     {data.map((item)=>(
        <button className="product" key={item.id} onClick={()=>setBasket([...basket,item])}>
        <div>{item.title}</div>
        <div>{item.price}</div>
      </button>
     ))}
      </div>
      <div className="basket">
        <div className="total">
          <span>Итого:</span>
          <span>{`${count} сом`}</span>
        </div>
        <div>
          {basket.map((item,i)=>(
          <button className="product" key={item.id} onClick={()=>setBasket(basket.splice(item,1))}>
            <div>{item.title}</div>
            <div>{`${item.price} c`}</div>
          </button>))}
        </div>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
