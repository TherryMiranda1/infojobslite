export const theme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#666666",
    powderWhite: "#FFFDF9",
    infojobsGray: "#f2f2f2",
    infojobsBlue: "#167DB7",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
    hover: "#eaeaea",
    borders: "#eaeaea",
    sutil: "#F5F5F5",
  },
  fonts: ["sans-serif", "Roboto", "Poppins"],
  fontSizes: {
    xs: "0.8rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem",
  },
  radius: {
    xs: "2px",
    small: "5px",
    medium: "12px",
    large: "18px",
    xl: "25px",
    full: "200px",
  },
};

export const lightTheme = {
  ...theme,

  switchBackgroundColor: "#ccc",
  switchHandleColor: "#fff",
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#111111",
    secondary: "#888888",
  },
  switchBackgroundColor: "#333",
  switchHandleColor: "#ff0",
};
