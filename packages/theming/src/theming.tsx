import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

interface IExperimentalTheme {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    danger: string;
    gray: string;
  },
  borderRadius: {
    sm: string;
    lg: string;
  }
  // ...rest
}

interface IExperimentalProvider {
  theme?: IExperimentalTheme;
  children: React.ReactNode;
}

const defaultTheme: IExperimentalTheme = {
  colors: {
    primary: "#0b7bb3",
    secondary: "#062642",
    white: "#ffffff",
    danger: "#cc1f58",
    gray: "#d2d5d9",
  },
  borderRadius: {
    sm: "0.5rem",
    lg: "20rem",
  }
  // ...rest
};

const ExperimentalProvider = ({ theme, children }: IExperimentalProvider) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

ExperimentalProvider.propTypes = {
  theme: PropTypes.object, // TODO: Correct PropTypes
  children: PropTypes.node,
};

ExperimentalProvider.defaultProps = {
  theme: defaultTheme,
}

export {
  IExperimentalTheme,
  IExperimentalProvider,
  ExperimentalProvider,
};