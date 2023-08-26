import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Bruce Wayne",
    email: "brucewayne@gmail.com",
    address: "Gotham City",
    phone: 123321234,
  },
});

export default UserContext;
