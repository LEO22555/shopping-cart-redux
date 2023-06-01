import NavBar from "./components/navbar/NavBar";
import CartContainer from "./components/cart/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { calculeTotals } from "./features/cart/cartSlice";

const App = () => {
  //Obtiene acceso a los items
  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  //Recalcula los totales cada vez que cambia cartItems
  useEffect(() => {
    dispatch(calculeTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      <NavBar />
      <CartContainer />
    </>
  );
};

export default App;
