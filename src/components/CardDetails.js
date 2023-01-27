import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DLT,ADD, REMOVE } from "../redux/action/action";
// import e from "express";

const CardDetails = () => {
  const [data, setData] = useState([]);
  const getdata = useSelector((state) => state.cartreducer);
  console.log("getdatta from details compomentn", getdata);

  const params = useParams();
  console.log("params is", params.id);

  const compare = () => {
    let compareData = getdata.carts.filter((curelem) => {
      return curelem.id == params.id;
    });
    console.log("comparedata is ", compareData);
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [params.id]);
  //delete section
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(DLT(id));
    navigate("/");
  };

  const send=(data)=>{
    // console.log("from card",curelem)
    dispatch(ADD(data))
}

//remove one items or quantity
const removeOne=(item)=>{
  dispatch(REMOVE(item))
}

  return (
    <>
      <section className="h-[100%] font-[poppins] ">
        <h1 className="text-center font-bold text-lg mt-4">
          Items Details Page
        </h1>
        <div className="flex justify-center items-center">
          {data.map((curelem, index) => {
            return (
              <div
                className="bg-blue-500 rounded flex md:flex-row justify-center items-center gap-[10%] p-2 pt-4 pb-4 mt-24 flex-col space-y-5 shadow-2xl shadow-black w-[50%] ml-[10%] mr-[10%]"
                key={index}
              >
                <div>
                  <img src={curelem.imgdata} className="h-[18rem]" alt="i1" />
                </div>
                <div className="flex flex-col space-y-5">
                  <div>
                    <strong>Restorent:</strong>
                    <span className="text-white"> {curelem.rname}</span>
                  </div>
                  <div>
                    <strong>Price:</strong>{" "}
                    <span className="text-white"> {curelem.price}</span>
                  </div>
                  <div>
                    <strong>Dishes:</strong>{" "}
                    <span className="text-white"> {curelem.address}</span>
                  </div>
                  <div>
                    <strong> Total:₹</strong>
                    <span className="text-white">{curelem.price *curelem.qnty}</span>
                  </div>
                  <div>
                    <button className="flex justify-between items-center bg-slate-800 space-x-4 px-2   text-white">
                      <span className="text-[2rem]" onClick={curelem.qnty<=1? ()=>remove(curelem.id): ()=>removeOne(curelem)}>-</span>
                      <span className="text-white">{curelem.qnty}</span>
                      <span className="text-[2rem]" onClick={()=>send(curelem)}>+</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col space-y-5">
                  <div>
                    <strong>Rating:</strong>
                    <span className="text-white"> {curelem.rating}⭐</span>
                  </div>
                  <div>
                    <strong>Order Review:</strong>
                    <span className="text-white">{curelem.somedata}</span>
                  </div>
                  <div>
                    <strong>Remove:</strong>
                    <span>
                      <button className="text-center flex justify-center items-center">
                        <MdDelete onClick={() => remove(curelem.id)} />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CardDetails;
