import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './shop.css'
import {BsFillCartFill} from 'react-icons/bs'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../../redux/cartSlice'

function Shop (){
    // from store
    const cartProductsMap = useSelector(state => state.cartStore.cartProductsMap);
    let size = Object.keys(cartProductsMap).length;
    // const addToCartBtnState = useSelector (state => state.cartStore.addToCartBtnIsDisabled);

    const dispatch = useDispatch();
    const handleAddProductToCart = (product) => {
        dispatch(addToCart(product));
        console.log(product);
    }
    const [products, setProducts] = useState([]); 
    useEffect(()=>{
        getProductsFromApi();
    },[])
    const getProductsFromApi = ()=> {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json));
    }
    return (
        <div className="container">
            <div className="cart p-5 d-flex justify-content-end">
                <Link to="/cart">    
                    <BsFillCartFill className='cart-icon'></BsFillCartFill>
                </Link>    
                <span>{ size }</span>
            </div>
            <div className="row">
                {products.map((product)=>{
                    console.log(product)
                    return(
                        <div key={product.id} className="col-4">
                            <div >
                                <Card className="card mb-5">
                                    <Link to={`/shop/${product.id}`}>
                                        <div className="text-center img-wrapper">
                                            <Card.Img variant="top" className="crd-img w-50  m-auto mt-3" src={product.image} />
                                        </div>
                                    </Link>
                                    <Card.Body>
                                        <Card.Title className="size-20 mt-3">{product.title}</Card.Title>
                                        <Card.Text className="card-text size-15 mt-5">
                                            <h4 className="text-danger fw-bold">Price : <span>{`${product.price}$`}</span></h4>
                                            <h6>rate <span className="text-warning ms-2 fw-bold">{product.rating.rate}</span> <span className="text-success ms-5">{`${product.rating.count} pieces`}</span></h6>
                                        </Card.Text>
                                        <Button className="mt-3" variant="primary" onClick={()=>handleAddProductToCart(product)}>Add To Cart</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
} 
export default Shop;