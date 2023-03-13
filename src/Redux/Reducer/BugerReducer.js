import { TANG_GIAM } from "../Types/BurgerTypes"

const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 },
    menu: {
        salad: 10,
        cheese: 20,
        beef: 50
    },
    total: 80
}

export const BurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case TANG_GIAM: {
            // Thay đổi số lượng
            if (action.amount === -1 && state.burger[action.propsBurger] < 1) {
                return { ...state }
            }
            let burgerUpdate = { ...state.burger };
            burgerUpdate[action.propsBurger] += action.amount;
            state.burger = burgerUpdate;
            //Tính tổng tiền
            state.total += action.amount * state.menu[action.propsBurger];
            return { ...state }
        }
        default: return { ...state }
    }
}