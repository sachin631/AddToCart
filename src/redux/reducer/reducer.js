const INIT_STATE = {
  carts: [],
};
export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (curelem) => curelem.id === action.payload.id //d equal
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
      

    case "RMV_CART":
      const data = state.carts.filter(
        (curelem) => curelem.id !== action.payload
      );

      return {
        ...state,
        carts: data,
      };
      

    case "RMV_ONE":
      const itemsIndex_dec = state.carts.findIndex(
        (curelem) => curelem.id === action.payload.id
      );
      if (state.carts[itemsIndex_dec].qnty >= 1) {
        const dlItem = (state.carts[itemsIndex_dec].qnty -= 1);
        console.log("hahah", ...state.carts, dlItem);

        return {
          ...state,
          carts: [...state.carts],
        };
      }
      else if(state.carts[itemsIndex_dec].qnty === 1){

        const data = state.carts.filter(
          (curelem) => curelem.id !== action.payload
        );
  
        return {
          ...state,
          carts: data,
        };

      }
      
      
    default:
      return state;
  }
};
