import {
  getCartListById,
  cartDelete,
  addToCartList,
  getWishListById,
  addToWishList,
  wishDelete
} from "../../actions/Cart";

export const GetCartActionType: any = {
  GetCartPending: getCartListById.pending,
  GetCartSuccess: getCartListById.fulfilled,
  GetCartFail: getCartListById.rejected,
};
export const AddCartActionType: any = {
  AddCartPending: addToCartList.pending,
  AddCartSuccess: addToCartList.fulfilled,
  AddCartFail: addToCartList.rejected,
};
export const CartDeleteActionType: any = {
  CartDeletePending: cartDelete.pending,
  CartDeleteSuccess: cartDelete.fulfilled,
  CartDeleteFail: cartDelete.rejected,
};
export const GetWishActionType: any = {
  GetWishPending: getWishListById.pending,
  GetWishSuccess: getWishListById.fulfilled,
  GetWishFail: getWishListById.rejected,
};
export const AddWishActionType: any = {
  AddWishPending: addToWishList.pending,
  AddWishSuccess: addToWishList.fulfilled,
  AddWishFail: addToWishList.rejected,
};
export const WishDeleteActionType: any = {
  WishDeletePending: wishDelete.pending,
  WishDeleteSuccess: wishDelete.fulfilled,
  WishDeleteFail: wishDelete.rejected,
};
