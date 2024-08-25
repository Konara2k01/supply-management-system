import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "/home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/profile",
        icon: "/user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Sales",
    listItems: [
      {
        id: 1,
        title: "customers",
        url: "/customers",
        icon: "/user.svg",
      },
      {
        id: 2,
        title: "Orders",
        url: "/orders",
        icon: "/order.svg",
      },
      {
        id: 3,
        title: "Products",
        url: "/products",
        icon: "/product.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Supply Chain",
    listItems: [
      { id: 1, title: "Employees", url: "/employees", icon: "/employees.svg" },
      {
        id: 2,
        title: "Stores",
        url: "/stores",
        icon: "/stores.svg",
      },
      {
        id: 3,
        title: "Logistic Information",
        url: "/logistics",
        icon: "/truck.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Reporting and Analysis",
    listItems: [
      {
        id: 1,
        title: "Reports",
        url: "/reports",
        icon: "/chart.svg",
      },
    ],
  },
];
