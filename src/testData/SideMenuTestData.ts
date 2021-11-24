export const backgroundImage = "images/buildings.jpg";
export const headerText = {
  long: "Side Menu Header",
  short: "Header", // max 7 characters
};
export const menuItems = [
  { name: "Home", to: "/", icon: "/icons/home.svg", subMenuItems: [] },
  { name: "About", to: "/about", icon: "/icons/badge.svg", subMenuItems: [] },
  {
    name: "Destinations",
    to: "/destinations",
    icon: "/icons/computer.svg",
    subMenuItems: [
      { name: "Canada", to: "/canada" },
      { name: "Brazil", to: "/brazil" },
      { name: "India", to: "/india" },
      { name: "Australia", to: "/australia" },
      { name: "Kenya", to: "/kenya" },
      { name: "Moldova", to: "/moldova" },
    ],
  },
  { name: "Blog", to: "/blog", icon: "/icons/add.svg", subMenuItems: [] },
  {
    name: "Services",
    to: "/services",
    icon: "/icons/badge.svg",
    subMenuItems: [],
  },
  {
    name: "Contacts",
    to: "/contacts",
    icon: "/icons/envelope.svg",
    subMenuItems: [],
  },
];

export const fonts = [
  "'Comforter Brush', cursive",
  "'Oswald', sans-serif",
  "'Poppins', sans-serif",
];

export const colors = {
  background: "rgba(246, 112, 98, 0.8)",
  header: "white",
  menuItem: "black",
  selectedMenuItem: "white",
  onHover: " #ffddcc",
  toggleButton: "#f2f2f2",
};

export const breakPoint = "only screen and (max-width: 960px)";
