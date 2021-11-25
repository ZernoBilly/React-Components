export const backgroundImage = "images/buildings.jpg";
export const headerText = {
  long: "Side Menu Header",
  short: "Header", // max 7 characters
};
export const menuItems = [
  { name: "Home", to: "/", icon: "/icons/home.svg", subMenuItems: [] },
  { name: "About", to: "/about", icon: "/icons/badge.svg", subMenuItems: [] },
  {
    name: "Technologies",
    to: "/technologies",
    icon: "/icons/computer.svg",
    subMenuItems: [
      { name: "React", to: "/react" },
      { name: "Typescript", to: "/typescript" },
      { name: "Styled-components", to: "/styled-components" },
      { name: "CSS", to: "/css" },
      { name: "HTML", to: "/html" },
    ],
  },
  {
    name: "Education",
    to: "/education",
    icon: "/icons/book.svg",
    subMenuItems: [],
  },
  {
    name: "Services",
    to: "/services",
    icon: "/icons/browser.svg",
    subMenuItems: [],
  },
  {
    name: "Contact",
    to: "/contact",
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
