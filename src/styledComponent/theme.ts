export interface IThemeProps {
  color: {
    black: string;
    gray: string;
    red: string;
  };

  font: {
    family: string;
    base: string;
    small: string;
    xsmall: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    xxxlarge: string;
  };

  breakPoints: {
    mobileS: string;
    mobile: string;
    tablet: string;
    desktop: string;
    desktopL: string;
  };
}

const theme: IThemeProps = {
  color: {
    black: "#141414",
    gray: "#999999",
    red: "#E50914"
  },

  font: {
    family:
      "'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
    xsmall: "9px",
    small: "10px",
    base: "13px",
    large: "15px",
    xlarge: "20px",
    xxlarge: "25px",
    xxxlarge: "31px"
  },

  breakPoints: {
    mobileS: "(max-width: 320px)",
    mobile: "(min-width: 376px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 992px)",
    desktopL: "(min-width: 1200px)"
  }
};

export default theme;
