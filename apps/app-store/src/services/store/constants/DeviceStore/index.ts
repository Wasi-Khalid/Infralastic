import {fetchAllCategoryList, fetchAllProductList} from "../../actions/DeviceStore";

export const AllCategoryActionType: any = {
  AllCategoryPending: [fetchAllCategoryList.pending],
  AllCategorySuccess: [fetchAllCategoryList.fulfilled],
  AllCategoryFail: [fetchAllCategoryList.rejected]
}
export const AllProductsActionType: any = {
  AllProductsPending: [fetchAllProductList.pending],
  AllProductsSuccess: [fetchAllProductList.fulfilled],
  AllProductsFail: [fetchAllProductList.rejected]
}
