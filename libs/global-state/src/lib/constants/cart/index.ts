import {cartData} from "../../actions/Cart";

export const CartActionType: any = {
  CartPending: cartData.pending,
  CartSuccess: cartData.fulfilled,
  CartFail: cartData.rejected,
};
