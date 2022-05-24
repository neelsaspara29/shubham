export const initialState = {
    cart : [],
}



export const reducer = (state  , action) => {

  
    

    switch(action.type){
        case 'ADD_TO_CART' :
            console.log(action.item) 
            if(action.item.index == -1) {
                return {
                    ...state,
                    cart : [...state.cart,action.item]
                }
            }else {
                state.cart[action.item.index] = action.item

                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
            

        case 'REMOVE_FROM_BASKET' : 
           const index = state.cart.findIndex(
               (item) => item.id === action.id
           )

           let newCart = [...state.cart]
            
           if(index >= 0){
               newCart.splice(index,1)

               return {
                   ...state,
                   
                   cart : [...newCart]
               }
           
                
           }
        
        case 'REMOVE_FROM_CART' :
            const qty = action.item.qty;
            const index2 = action.item.index;
            if(qty == 1) {
                let newCart = [...state.cart]
            
           
               newCart.splice(index2,1)

               return {
                   ...state,
                   
                   cart : [...newCart]
               }
            }else {
                state.cart[action.item.index] = action.item.item

                return {
                    ...state,
                    cart: [...state.cart]
                }
            }



       

        default : 
            return state;

    }

}

