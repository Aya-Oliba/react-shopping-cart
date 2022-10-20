import './shop.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/cartSlice'

function Cart (){
    const globalCartProducts = useSelector(state => state.cartStore.cartProductsMap);
    console.log(globalCartProducts);
    const cartTotalPrice = useSelector(state => state.cartStore.cartTotalPrice);
    const dispatch = useDispatch();
    const handleDeleteCartItem = (product)=> {
        dispatch(removeFromCart(product));
    }

    console.log(globalCartProducts);
    return (
        <div className='container mt-5'>
            <div className="row">
                {Object.keys(globalCartProducts).map((key,index)=> {
                        // console.log(produ);
                    return(
                        <div key={index} className="row d-flex align-items-center mb-5">
                            <div className="col-lg-1">
                                <img src={globalCartProducts[key].image} className="w-100" />
                            </div>
                            <div className="col-lg-4">
                                <h4>{globalCartProducts[key].title}</h4>  
                            </div>
                            <div className="col-lg-2">
                                <h4>{`Price: ${globalCartProducts[key].price * globalCartProducts[key].count }$`}</h4>  
                            </div>
                            <div className="col-lg-2">
                                <h4>{`${globalCartProducts[key].count}`}</h4>  
                            </div>
                            <div className="col-lg-1">
                                <button id='delete' className="deleteItem bg-danger text-white border-0" onClick={()=>handleDeleteCartItem(globalCartProducts[key])}>X</button>
                            </div>
                            <hr className='my-3'/>
                        </div>
                    )
                })}
                
            </div>
            <div className="d-flex justify-content-between">
                <h3>Total Price : $ {cartTotalPrice.toFixed(2)}</h3>
                <button className='btn btn-success fw-bolder'>Payment</button>
            </div>
            
        </div>
    )
}
export default Cart;