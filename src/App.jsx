import { useEffect, useState } from 'react'
import './App.css'
import SingleProduct from './SingleProduct'

function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);


  useEffect(() => {
    fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);

      })
  }, [])

  // ei concept tay somossa ache, need help from support team
  const handleCard = (p) => {
    const isExist = cart.find((pd) => pd.id == p.id);
    if (!isExist) {
      setCart([...cart, p])
    }
    else {
      alert('already added')
    }
  };
  // ..............




  return (
    <>

      <div className="main-container">
        <div className="cards-container">

          {
            products.map(pd => <SingleProduct key={name} product={pd}
              handleCard={handleCard}></SingleProduct>)
          }


        </div>

        <div className="card-container">
          <h1>this is card</h1>
          <div className="card-title">
          <h5>name</h5>
            <h5>price</h5>
          </div>
          <div >

            {cart.map((item)=>{
                return <div>
                   <h5>{item.title}</h5>
                   <h5>{item.price}</h5>
                </div>
              })
            } 
           
          </div>
        </div>
      </div>

    </>
  )
}

export default App
