import { useSelector } from "react-redux";
import '../shop/shop.css'

function Home (){
    const counterGlobalValue = useSelector(state => state.counterStore.counter)
    return (
        <div className="mt-5 pt-5 text-center">
            <p className="donate"><span className="text-danger fw-bolder">THANKS,</span> YOU DONATED $ <span className="text-danger fw-bolder">{counterGlobalValue}</span> DOLLARS FOR US ! </p> 
        </div>
    )
} 
export default Home;