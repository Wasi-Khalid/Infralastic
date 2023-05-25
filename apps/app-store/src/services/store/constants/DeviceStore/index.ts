import {fetchAllCategoryList} from "../../actions/DeviceStore";

export const AllCategoryActionType: any = {
  AllCategoryPending: [fetchAllCategoryList.pending],
  AllCategorySuccess: [fetchAllCategoryList.fulfilled],
  AllCategoryFail: [fetchAllCategoryList.rejected]
}
