export enum USER_ROLE {
  SUPERADMIN = "superadmin",
  ADMIN = "admin",
  MODERATOR = "moderator",
  STAFF = "staff",
  CUSTOMER = "customer",
}

export const listRoleAdmins = [
  USER_ROLE.ADMIN,
  USER_ROLE.CUSTOMER,
  USER_ROLE.MODERATOR,
  USER_ROLE.STAFF,
  USER_ROLE.SUPERADMIN,
];
export const listRoleUsers = [USER_ROLE.CUSTOMER, USER_ROLE.STAFF];

export const TEST = 6;

export const ERROR_CODE = {
  1039: "gender must be one of the following values: Male, Female, Other",
};

export const TOAST_CREATE_SUCCESS = {
  title: "Thành công!",
  message: `Tạo thành công!`,
  time: "1 giây trước",
};

export const TOAST_CREATE_ERROR = {
  title: "Lỗi!",
  message: "Tạo không thành công!",
  time: "1 giây trước",
};

export const TOAST_UPDATE_SUCCESS = {
  title: "Thành công!",
  message: `Cập nhật thành công!`,
  time: "1 giây trước",
};

export const TOAST_UPDATE_ERROR = {
  title: "Lỗi!",
  message: "cập nhật không thành công!",
  time: "1 giây trước",
};

export const TOAST_DELETE_SUCCESS = {
  title: "Thành công!",
  message: `Xóa thành công!`,
  time: "1 giây trước",
};

export const TOAST_DELETE_ERROR = {
  title: "Lỗi!",
  message: "Xóa không thành công!",
  time: "1 giây trước",
};

export const TOAST_UPLOAD_SUCCESS = {
  title: "Thành công!",
  message: `Tải lên thành công!`,
  time: "1 giây trước",
};

export const TOAST_UPLOAD_ERROR = {
  title: "Lỗi!",
  message: "Tải lên không thành công!",
  time: "1 giây trước",
};

export const GROUP_TAB = {
  GENERAL: "general",
  FAQ: "faq",
  IMAGE: "image",
  MAJOR: "major",
  RELATED_POST: "related_post",
  REVIEW: "review",
  SCHOLARSHIP: "scholarship",
  VIDEO: "video",
};

export const listTrainingLanguage = [
  {
    value: "VI",
    label: "Tiếng Việt",
  },
  {
    value: "EN",
    label: "Tiếng Anh",
  },
  {
    value: "CN",
    label: "Tiếng Trung",
  },
];

// export const textUserRole: Record<number, string> = {
//   [USER_ROLE.CUSTOMER]: "Khách hàng",
//   [USER_ROLE.ADMIN]: "Chủ chuỗi cửa hàng",
//   [USER_ROLE.SUPERADMIN]: "Quản trị viên",
//   [USER_ROLE.MODERATOR]: "Quản lý cửa hàng",
//   [USER_ROLE.STAFF]: "Nhân viên cửa hàng",
// };
