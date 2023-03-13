import { TANG_GIAM } from "../Types/BurgerTypes";

export const tangGiamAction = (propsBurger, amount) => {
    return {
        type: TANG_GIAM,
        propsBurger,
        amount
    }
}