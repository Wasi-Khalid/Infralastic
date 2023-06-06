import {cartData, cartDelete} from "../../actions/Cart";

export const CartActionType: any = {
  CartPending: cartData.pending,
  CartSuccess: cartData.fulfilled,
  CartFail: cartData.rejected,
};
export const CartDeleteActionType: any = {
  CartDeletePending: cartDelete.pending,
  CartDeleteSuccess: cartDelete.fulfilled,
  CartDeleteFail: cartDelete.rejected,
};
