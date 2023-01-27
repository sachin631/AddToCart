import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { DLT } from "../redux/action/action";
import { useDispatch } from "react-redux";

const Header = () => {
  const [state, setState] = useState(false);
  const [price,setPrice]=useState(0);
  console.log(price,"price")
  console.log(state);
//access data of store
  const getdata = useSelector((state) => state.cartreducer);
  console.log("getdata form header", getdata.carts);
//remove data from cart by click on delete
  const dispatch=useDispatch();
  const remove=(id)=>{
      dispatch(DLT(id))
  }
// get total price value
const total=()=>{
  let price=0;
  getdata.carts.map((curelem,index)=>{
    price=curelem.price * curelem.qnty+ price;
  })
  setPrice(price);
}
useEffect(()=>{
  total();
},[total])
  return (
    <>
      <section className=" flex justify-between p-3 pl-[10%] pr-[10%] bg-slate-900 text-white">
        <div className="flex justify-start items-center space-x-4">
          <NavLink to="/">
            <div>Add to cart</div>
          </NavLink>
          <NavLink to="/">
            <div>Home</div>
          </NavLink>
          {/* <NavLink to="/cartDetails">
            <div>cartDetails</div>
          </NavLink> */}
        </div>
        <div className="">
          <Badge color="pink">{getdata.carts.length}</Badge>
          <div>
            <AiOutlineShoppingCart
              onClick={() => {
                if (state === true) {
                  setState(false);
                } else {
                  setState(true);
                }
              }}
            />
          </div>
        </div>
      </section>
      {state && (
        <menu className=" absolute right-5 bg-pink-500 px-4 py-4 mt-2">
          <ImCross
            onClick={() => {
              setState(false);
            }}
          />
          {getdata.carts.length ? (
            <div>
              <table>
                <tr className="flex space-x-12">
                  <th>Photo</th>
                  <th>Restorent Name</th>
                  <th>Total :₹{price }</th>
                </tr>
                <hr />
                <tbody className="text-white">
                  {getdata.carts.map((curelem,index) => {
                    return (
                      <tr className="flex space-x-12 space-y-8" key={curelem.id}>
                        <td>
                          <NavLink to={`/cartDetails/${curelem.id}`} > 
                            <img src={curelem.imgdata} alt="datain cart" className="w-[200px] mt-2" onClick={()=>{setState(false)}} />
                          </NavLink>
                        </td>
                        <td className="flex flex-col text-start   space-y-4">
                          <td>{curelem.rname}</td>
                          <td>Price:{curelem.price}</td>
                          <td>Quantity:{curelem.qnty}</td>
                        </td>
                        <td>
                          <MdDelete onClick={()=>remove(curelem.id)}/>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td className="text-black font-serif font-extrabold text-[2rem]">Total:₹{price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex justify-center items-center space-y-2 space-x-3 mt-2">
              <p className="text-white">Your Cart is empty </p>
              <div>
                <AiOutlineShoppingCart />
              </div>
            </div>
          )}
        </menu>
      )}
    </>
  );
};

export default Header;
