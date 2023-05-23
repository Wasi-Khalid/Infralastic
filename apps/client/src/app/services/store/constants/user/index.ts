import {userChangePassword, userLogin, userRegister, userReset} from "../../actions/Auth";

export const LoginActionType: any = {
  UserLoginPending: [userLogin.pending],
  UserLoginSuccess: [userLogin.fulfilled],
  UserLoginFail: [userLogin.rejected]
}
export const RegisterActionType: any = {
  UserRegisterPending: [userRegister.pending],
  UserRegisterSuccess: [userRegister.fulfilled],
  UserRegisterFail: [userRegister.rejected],
}
export const ResetActionType: any = {
  UserResetPending: [userReset.pending],
  UserResetSuccess: [userReset.fulfilled],
  UserResetFail: [userReset.rejected],
}
export const ChangePasswordActionType: any = {
  UserChangePasswordPending: [userChangePassword.pending],
  UserChangePasswordSuccess: [userChangePassword.fulfilled],
  UserChangePasswordFail: [userChangePassword.rejected],
}
