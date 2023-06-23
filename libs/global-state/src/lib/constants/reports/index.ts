import {fetchAssetReportByCompany, fetchAllBudgetReport, fetchAllPurchaseReport} from "../../actions/Reports";

export const GetAssetReportActionType: any = {
  GetAssetReportCompanyPending: [fetchAssetReportByCompany.pending],
  GetAssetReportCompanySuccess: [fetchAssetReportByCompany.fulfilled],
  GetAssetReportCompanyFail: [fetchAssetReportByCompany.rejected]
}
export const GetPurchaseReportActionType: any = {
  GetPurchaseReportCompanyPending: [fetchAllBudgetReport.pending],
  GetPurchaseReportCompanySuccess: [fetchAllBudgetReport.fulfilled],
  GetPurchaseReportCompanyFail: [fetchAllBudgetReport.rejected]
}
export const GetSalesReportActionType: any = {
  GetSalesReportCompanyPending: [fetchAllPurchaseReport.pending],
  GetSalesReportCompanySuccess: [fetchAllPurchaseReport.fulfilled],
  GetSalesReportCompanyFail: [fetchAllPurchaseReport.rejected]
}
