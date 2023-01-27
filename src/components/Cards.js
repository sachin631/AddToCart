import React from "react";
import { useDispatch } from "react-redux";
import {ADD} from "../redux/action/action";
import Cardsdata from "./CardData";

const Cards = () => {
  const dispatch=useDispatch()
  const send=(data)=>{
        // console.log("from card",curelem)
        dispatch(ADD(data))
  }
  return (
    <>
      <section className="pl-[5%] pr-[5%]">
        <h1 className="text-center mt-5 text-2xl font-bold text-blue-600">
          Add To Cart Projects
        </h1>

        <div className="grid md:grid-cols-3 grid-cols-1  mt-8 gap-8">
          {Cardsdata.map((curelem, index) => {
            return (
              <div className=" hover:cursor-pointer hover:shadow-2xl  shadow-black " key={index}>
                <img src={curelem.imgdata} alt="ima" className="h-[300px] w-[100%] mt-2" />
                <div className="text-start font-bold text-xl">
                  {curelem.rname}{" "}
                </div>
                <div className="text-start">Price: ₹{curelem.price} </div>
                <button className="text-center bg-blue-500 font-bold py-3 text-white w-[100%]" onClick={()=>send(curelem)}>
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Cards;
