import { RcFile } from "antd/es/upload";
import moment from "moment";
import BigNumber from "bignumber.js";
import {
  isArray,
  isEmpty,
  isNull,
  isObject,
  isUndefined,
  pickBy,
  omitBy,
} from "lodash";
import store from "../redux copy/store";
import jwt_decode from "jwt-decode";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export const appConfig = {
  formatDateTime: "Do MMM YYYY",
  formatTime: "Do MMM YYYY HH:mm:ss",
  format: "MMMM, D YYYY",
};

export const formatNumber = (num: number) => {
  if (!num) {
    return 0;
  }

  return Intl.NumberFormat("en-US").format(num);
};

export const formatDate = (time: number, format?: string) => {
  if (!time) {
    return "";
  }
  const d = moment.unix(time);
  return d.format(format ?? appConfig.formatDateTime);
};

export const formatDatetime = (time: number) => {
  if (!time) {
    return "";
  }
  const d = moment.unix(time);
  return d.format(appConfig.formatTime);
};

export const formatTime = (date: number) => {
  let result = moment.unix(date).format(appConfig.formatTime);

  const now = moment();
  const minutes = now.diff(moment.unix(date), "minutes");
  const hours = now.diff(moment.unix(date), "hours");
  const days = now.diff(moment.unix(date), "days");

  if (minutes < 60) {
    result = minutes > 0 ? `${minutes} minutes ago` : "Invalid date";
  } else {
    if (hours < 24) {
      result = `${hours}h ago`;
    } else {
      if (days < 7) {
        result = `${days} days ago`;
      }
    }
  }

  return result;
};

export const getTime = (value: number) => {
  const time = moment.unix(value);
  return time.startOf("minute").fromNow();
};

export const truncateNumber = (num: string, digits?: number): any => {
  const re = new RegExp("(\\d+\\.\\d{" + (digits ?? 6) + "})(\\d)");
  const m = num.toString().match(re);
  return m ? parseFloat(m[1]) : num;
};
export const activeClass = (paths: string[], pathname: string) => {
  const item = paths?.find((x) => x === pathname);
  return item ? "active" : null;
};

/* ========== BEGIN: Effect Click Button Copied check TRUE ========== */
export const copy = (text: string) => {
  navigator.clipboard.writeText(text);
};

export const ellipsisAddress = (walletId: string, length: number) => {
  const len = length || 5;
  return walletId
    ? walletId.substring(0, len) +
        "..." +
        walletId.substring(walletId.length - len, walletId.length)
    : "";
};

export const alias = (str: string) => {
  if (!str) {
    return "";
  }

  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  // str = str.replace(/-+-/g, '-'); //replace 2- to 1-
  str = str.replace(/\s/g, "-"); // remove whitespace
  return str;
};

export const convertStrToUnderscoreStr = (str: string) =>
  str.toLocaleLowerCase().replaceAll(" ", "_");

export const isLenghGreaterThan = (str: string, count: number) =>
  str.length > count;

export const randomNum = (max: number) => Math.floor(Math.random() * max);

export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const validateNoSpaces = (
  rule: any,
  value: string,
  callback: (message?: string) => void,
  language: string
) => {
  if (value && value.trim() === "") {
    switch (language) {
      case "vi":
        callback("Không được để trống");
        break;
      case "en":
        callback("Not empty");
        break;
      case "cn":
        callback("不能为空");
        break;
      default:
        callback("Không được để trống");
        break;
    }
  } else {
    callback();
  }
};

export const divideNumber = (
  first: number | string | undefined,
  second: number | string | undefined
) => {
  if (!(first && second)) {
    return 0;
  }

  const _first = new BigNumber(first);
  const _second = new BigNumber(second);

  return _first.dividedBy(_second).toString();
};

export const multipleNumber = (
  first: number | string | undefined,
  second: number | string | undefined
) => {
  if (!(first && second)) {
    return 0;
  }

  const _first = new BigNumber(first);
  const _second = new BigNumber(second);

  return _first.multipliedBy(_second).toString();
};

export const removeEmptyValues = (obj: Record<string, any>) => {
  return pickBy(obj, (value) => {
    if (isArray(value) || isObject(value)) {
      return !isEmpty(value);
    }
    return !isNull(value) && !isUndefined(value);
  });
};

export const linkCDN = (
  url: string | null | undefined,
  defaultImage?: string
) => {
  if (!defaultImage && !url) return "";

  return url ? `${process.env.REACT_APP_CDN}${url}` : defaultImage;
};

export const clearParams = (obj: Record<string, any>): any => {
  return omitBy(obj, (v) => v === "");
};

// export const checkPermission = (permission: string) => {
//   const token = store.getState().auth.accessToken;
//   if (!token) {
//     return false;
//   }
//   const decode = jwt_decode(token);
//   if ((decode as any)?.user?.isAdmin) {
//     return true;
//   }
//   const permissions = (decode as any)?.user?.permissions;
//   return permissions?.includes(permission);
// };

export const formatTimeAgo = (datetime: string) => {
  const currentDate = new Date().getTime();
  const targetDate = new Date(datetime).getTime();

  const secondsDiff = Math.floor((currentDate - targetDate) / 1000);
  const minutesDiff = Math.floor(secondsDiff / 60);
  const hoursDiff = Math.floor(minutesDiff / 60);
  const daysDiff = Math.floor(hoursDiff / 24);
  const monthsDiff = Math.floor(daysDiff / 30);
  const yearsDiff = Math.floor(monthsDiff / 12);

  if (yearsDiff > 0) {
    return yearsDiff === 1 ? "một năm trước" : `${yearsDiff} năm trước`;
  } else if (monthsDiff > 0) {
    return monthsDiff === 1 ? "một tháng trước" : `${monthsDiff} tháng trước`;
  } else if (daysDiff > 0) {
    return daysDiff === 1 ? "một ngày trước" : `${daysDiff} ngày trước`;
  } else if (hoursDiff > 0) {
    return hoursDiff === 1 ? "một giờ trước" : `${hoursDiff} giờ trước`;
  } else if (minutesDiff > 0) {
    return minutesDiff === 1 ? "một phút trước" : `${minutesDiff} phút trước`;
  } else {
    return "vài giây trước";
  }

  // Example usage:
  // const datetime = '2024-05-07T12:00:00';
  // const formattedTime = formatTimeAgo(datetime);
  // console.log(formattedTime); // Output: a day ago
};
