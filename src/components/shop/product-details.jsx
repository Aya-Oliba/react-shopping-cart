import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function ProductDetails () {
    const params = useParams();
    const [productDetails , setProductsDetails] = useState({})
    useEffect (()=>{
            fetch(`https://fakestoreapi.com/products/${params.id}`)
                .then(res=>res.json())
                .then(json=>setProductsDetails(json))
    },[params.id]);
    
    return (
        <div className="row d-flex justify-content-center align-items-center pt-5 mt-5">
            <div className="col-4">
                <div>
                    <img src={productDetails.image} className="w-100" alt="" />
                </div>
            </div>
            <div className="col-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            <h3>{productDetails.title}</h3>  
                        </Card.Title>
                        <Card.Text>
                            <h4>{productDetails.category}</h4>
                            <p>{productDetails.description}</p>
                            <h4>{`${productDetails.price}$`}</h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default ProductDetails;