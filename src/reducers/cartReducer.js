const initState = {
  quantity: 1,
  cart: [],
};

export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_CART":
      console.log(action) // => { type: 'ADD_CART', detail: detail }
      const checkExist = state.cart.find(e => e._id === action.detail._id)
      const newCart = checkExist ?
        // truong hợp đã có sản phẩm đấy trong list
        state.cart?.map(e => {
          if (e._id === action.detail._id) {
            return ({ ...e, quantity: e.quantity + 1 })
          }
          return e
        })
        // truong hợp đã có sản phẩm đấy không nằm trong list
        : [...state.cart, { ...action.detail, quantity: 1 }]

      return {
        ...state,
        cart: newCart
      };
    case "REDUCE_ITEM":
      console.log(action) // => { type: 'CHANGE_QUANTITY', data: item, }
      const newCartReduce =
        action.detail.quantity === 1
          ? state.cart.filter(e => e._id !== action.detail._id) :
          // truong hợp đã có sản phẩm đấy trong list
          state.cart?.map(e => {
            if (e._id === action.detail._id) {
              return ({ ...e, quantity: e.quantity - 1 })
            }
            return e
          })

      return {
        ...state,
        cart: newCartReduce
      };
    case "REMOVE_ALL":
      console.log(action) // => { type: 'REMOVE_ALL' }
      return {
        ...state,
        cart: []
        // quantity: state.quantity + 1
      };
    case "REMOVE_ITEM":
      console.log(action) // => { type: 'REMOVE_ALL' }
      return {
        ...state,
        cart: state.cart.filter(e => e._id !== action.data._id)
        // quantity: state.quantity + 1
      };


    // case "INCREASE":
    //   return {
    //     ...state,
    //     quantity: state.quantity + 1
    //   };
    // case "ADD_TEXT":
    //   return {
    //     ...state,
    //     listText: [...state.listText, action.data]
    //   };
    // case "REMOVE_TEXT":
    //   console.log("action", action);

    //   return {
    //     ...state,
    //     listText: state.listText.filter((e) => e !== action.textSelected)
    //   };
    // case "UPDATE_TEXT":
    //   console.log("action", action);
    //   const newListText = state.listText.map((e, i) => {
    //     if (i === action.indexNum) {
    //       return action.textValue;
    //     }
    //     return e;
    //   });
    //   return {
    //     ...state,
    //     listText: newListText
    //   };
    // case "REMOVE_ALL":
    //   return {
    //     ...state,
    //     listText: []
    //   };

    default:
      return state;
  }
}
