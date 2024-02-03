import {
  AuthUserType,
  CommonAPIType,
  instance,
  UserType,
} from "./commonAPI.ts";

export const authAPI = {
  getAuth() {
    return instance.get<CommonAPIType<AuthUserType>>(`auth/me`).then((res) => {
      return res.data;
    });
  },
  postAuth(user: UserType) {
    return instance
      .post<CommonAPIType<{ userId?: number }>>(`auth/login`, user)
      .then((res) => {
        console.log(res, res.data);
        return res.data;
      });
  },
  deleteAuth() {
    return instance.delete<CommonAPIType>(`auth/login`).then((res) => {
      console.log(res, res.data);
      return res.data;
    });
  },
};
