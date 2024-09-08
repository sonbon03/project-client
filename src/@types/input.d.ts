interface LoginInput {
  email: string;
  password: string;
}

interface Response<T> {
  statusCode: number;
  message: string;
  errorCode: string;
  data: T;
}

interface RegisterInput {
  email: string;
  password: string;
  phone: string;
  name: string;
}

interface IResponseDataAdmin<T> {
  items: Array<T>;
  meta: IMeta;
}

interface IMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
