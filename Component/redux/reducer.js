export const initialState = {
  cart: [],
  booksUrl: "",
};

export const getCartTotal = (cart2) => {
  if (cart2.length > 0) {
    return cart2?.reduce((amount, item) => {
      const price = parseInt(item.count) * parseInt(item.price);
      return price + amount
    },0);
  } else {
    return 0;
  }
};

export const getTotalQty = (cart2) => {
  if(cart2.length > 0) {
    return cart2?.reduce((total, item) => {
      return item.count + total
    }, 0)
  }else {
    return 0;
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (action.item.index == -1) {
        return {
          ...state,
          cart: [...state.cart, action.item],
        };
      } else {
        state.cart[action.item.index] = action.item;

        return {
          ...state,
          cart: [...state.cart],
        };
      }

    case "REMOVE_FROM_BASKET":
      const index = state.cart.findIndex((item) => item.id === action.id);

      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);

        return {
          ...state,
          cart: [...newCart],
        };
      }

    case "REMOVE_FROM_CART":
      const qty = action.item.qty;
      const index2 = action.item.index;
      if (qty == 1) {
        let newCart = [...state.cart];

        newCart.splice(index2, 1);

        return {
          ...state,

          cart: [...newCart],
        };
      } else {
        state.cart[action.item.index] = action.item.item;

        return {
          ...state,
          cart: [...state.cart],
        };
      }

    case "ADD_URL":
      return {
        ...state,
        booksUrl: action.item,
      };

    default:
      return state;
  }
};
