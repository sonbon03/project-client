interface User {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  password: string;
  storeId: string;
  status: "pending" | "cancel" | "active";
  roles: "superadmin" | "admin" | "staff" | "customer";
}

interface Store {
  id: string;
  name: string;
  typeStore: string;
  address: string;
}

interface IModerator {
  id: string;
  user: User;
  store: Store;
}
