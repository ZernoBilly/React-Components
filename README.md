# React Components

Try components(https://github.com/facebook/create-react-app).

## Technologies

- React `^17.0.2`
- Typescript `^4.5.2`
- Styled-components `^5.3.3`
- React-router-dom `^6.0.2`

Install dependancies
`npm install styled-components react-router-dom`

Install types
`npm install @types/styled-components @types/react-router-dom`

## Components

- [SideBar](#sidebar)

### SideBar

#### Data example

```
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
]

export const fonts = [
  "'Comforter Brush', cursive",
  "'Oswald', sans-serif",
  "'Poppins', sans-serif",
];

export const colors = {
  background: "rgba(246, 112, 98, 0.8)", // Use rgba color with opasity for background. Preferred opacity 0.8.
  header: "white",
  menuItem: "black",
  selectedMenuItem: "white",
  onHover: " #ffddcc",
  toggleButton: "#f2f2f2",
};

```

#### Usage and props example

```
<SideBar
    spacingTop{"2rem"} // Optional padding-top prop, default value "1rem"
    bgImage={backgroundImage}
    headerText={headerText}
    headerFontFamily={fonts[1]}
    menuItems={menuItems}
    menuItemFontFamily={fonts[2]}
    colors={colors}
/>
```
