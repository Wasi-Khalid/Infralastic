import axios from "axios";

const API = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
});

export const login = (formData: any) =>
  API.post('/api/login_user_api', formData)

export const signup = (formData: any) =>
  API.post('/api/create_user_api', formData)

export const resetPassword = (formData: any) =>
  API.post('/api/reset_password_request', formData)

export const changePassword = (formData: any) =>
  API.post('/api/new_password_request', formData)

export const createEmployee = (formData: any) =>
  API.post('/api/create_employee_api', formData)

export const getEmployee = (formData: any) =>
  API.post('/api/get_employee_api', formData)

export const getManager = (formData: any) =>
  API.post('/api/get_manager_api', formData)

export const getCompanyEmployee = (formData: any) =>
  API.post('/api/get_company_employee', formData)

export const getAllCompany = (config: any) =>
  API.post('/api/get_company_api', config)

export const getAllEmployee = (config: any) =>
  API.post('/api/get_all_employee_api', config)

export const getAllDepartment = (config: any) =>
  API.post('/api/get_department_api', config)

export const getAllJobs = (config: any) =>
  API.post('/api/get_job_api', config)

export const getLocation = (config: any) =>
  API.post('/api/get_location_api', config)

export const createDepartment = (formData: any) =>
  API.post('/api/create_department_api', formData)

export const getDepartmentEmployee = (formData: any) =>
  API.post('/api/get_department_employee', formData)

export const updateEmployee = (formData: any) =>
  API.post('/api/update_employee_api', formData)

export const deleteEmployee = (formData: any) =>
  API.post('/api/delete_employee_api', formData)

export const updateDepartment = (formData: any) =>
  API.post('/api/update_department_api', formData)

export const deleteDepartment = (formData: any) =>
  API.post('/api/delete_department_api', formData)

export const getSites = (formData: any) =>
  API.post('/api/get_sites_api', formData)

export const createAsset = (formData: any) =>
  API.post('/api/create_asset_api', formData)

export const updateAsset = (formData: any) =>
  API.post('/api/update_asset_api', formData)

export const getAssetById = (formData: any) =>
  API.post('/api/get_asset_api', formData)

export const deleteAsset = (formData: any) =>
  API.post('/api/delete_asset_api', formData)

export const getAssetBySite = (formData: any) =>
  API.post('/api/get_site_asset_api', formData)

export const getAssetByCompanyId = (formData: any) =>
  API.post('/api/get_all_asset_api', formData)

export const getAllAssets = (formData: any) =>
  API.post('/api/all_asset_data', formData)

export const checkOut = (formData: any) =>
  API.post('/api/assign_checkout_asset_api', formData)

export const checkIn = (formData: any) =>
  API.post('/api/assign_checkin_asset_api ', formData)

export const getUnconfirmedAssets = (formData: any) =>
  API.post('/api/get_all_unconfirmed_asset_api', formData)

export const confirmAsset = (formData: any) =>
  API.post('/api/confirm_asset_api', formData)

export const getAllCategories = (formData: any) =>
  API.post('/api/get_all_asset_categ_api', formData)

export const getDepartmentById = (formData: any) =>
  API.post('/api/get_department_api_by_ID', formData)

export const getAssetLog = (formData: any) =>
  API.post('/api/get_logs_asset_api', formData)

export const addAssetImages = (formData: any) =>
  API.post('/api/add_image_asset_api', formData)

export const getAssetImages = (formData: any) =>
  API.post('/api/get_images_asset_api', formData)

export const confirmAllAssets = (formData: any) =>
  API.post('/api/multi_confirm_asset_api', formData)

export const getEmployeeAsset = (formData: any) =>
  API.post('/api/get_employee_asset_api', formData)

export const deleteAssetImage = (formData: any) =>
  API.post('/api/delete_images_asset_api', formData)




export const getCategoryList = (formData: any) =>
  API.post('/api/get_all_product_category_api', formData)

export const getAllProducts = (formData: any) =>
  API.post('/api/get_all_products_api', formData)

export const getProductById = (formData: any) =>
  API.post('/api/get_product_api_by_id', formData)

export const checkoutOrder = (formData: any) =>
  API.post('/api/checkout_order_api', formData)

export const getOrder = (formData: any) =>
  API.post('/api/get_products_by_order_api', formData)

export const getOrderByUser = (formData: any) =>
  API.post('/api/get_order_by_user_api', formData)

export const addAdminUser  = (formData: any) =>
  API.post('/api/add_user_api', formData)

export const updateAdminUser  = (formData: any) =>
  API.post('/api/update_user_api', formData)

export const deleteAdminUser  = (formData: any) =>
  API.post('/api/delete_user_api', formData)

export const getAllRoles  = (formData: any) =>
  API.post('/api/get_roles_api', formData)

export const getAllUser = (formData: any) =>
  API.post('/api/get_users_api', formData)

export const getUserById = (formData: any) =>
  API.post('/api/get_users_api_by_id', formData)

export const getRoleById = (formData: any) =>
  API.post('/api/get_roles_api_by_id', formData)

export const getCompanyById = (formData: any) =>
  API.post('/api/get_companies_api_by_id', formData)

export const addRoleControl = (formData: any) =>
  API.post('/api/add_role_access_api', formData)

export const updateRoleControl = (formData: any) =>
  API.post('/api/update_role_access_api', formData)

export const deleteRoleControl = (formData: any) =>
  API.post('/api/delete_role_access_api', formData)

export const deleteCompany = (formData: any) =>
  API.post('/api/delete_company_api', formData)

export const addCompany = (formData: any) =>
  API.post('/api/create_company_api', formData)

export const updateCompany = (formData: any) =>
  API.post('/api/update_company_api', formData)

export const getAllCompanies = (formData: any) =>
  API.post('/api/get_companies_api', formData)

export const getAssetReport = (formData: any) =>
  API.post('/api/asset_report_by_company', formData)

export const getBudgetReport = (formData: any) =>
  API.post('/api/get_budget_data', formData)

export const getPurchaseReport = (formData: any) =>
  API.post('/api/get_sales_report_data', formData)

export const archiveAsset = (formData: any) =>
  API.post('/api/archive_asset_api', formData)

