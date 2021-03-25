import React from "react";
import styled, { ThemeProps, css } from "styled-components";
import { darken } from "polished";
import { IExperimentalTheme } from "experimental-ds-theming";

const VARIANTS = {
  PRIMARY: 'primary',
  OUTLINE: 'outline',
  DANGER: 'danger',
  DEFAULT: 'default',
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export interface IStyledButtonProps {
  rounded?: boolean;
  variant?: 'primary' | 'outline' | 'danger' | 'default';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
}

const variantColor = (props: IStyledButtonProps & ThemeProps<IExperimentalTheme>) => {
  switch(props.variant) {
    case VARIANTS.PRIMARY: {
      return css`
        background-color: ${props.theme.colors.primary};
        border-color: ${props.theme.colors.primary};
        color: ${props.theme.colors.white};

        &:hover:enabled {
          background-color: ${darken(0.05, props.theme.colors.primary)};
          border-color: ${darken(0.05, props.theme.colors.primary)};
        }
      `;
    }
    case VARIANTS.OUTLINE: {
      return css`
        background-color: transparent;
        border-color: ${props.theme.colors.secondary};
        color: ${props.theme.colors.secondary};

        &:hover:enabled {
          background-color: ${props.theme.colors.secondary};
          color: ${props.theme.colors.white};
        }
      `;
    }
    case VARIANTS.DANGER: {
      return css`
        background-color: transparent;
        border-color: ${props.theme.colors.danger};
        color: ${props.theme.colors.danger};

        &:hover:enabled {
          background-color: ${props.theme.colors.danger};
          color: ${props.theme.colors.white};
        }
      `;
    }
    default: {
      return css`
        background-color: transparent;
        border-color: ${props.theme.colors.gray};
        color: ${props.theme.colors.primary};
      `;
    }
  }
};

const variantSize = (props: IStyledButtonProps & ThemeProps<IExperimentalTheme>) => {
  switch(props.size) {
    case SIZES.SMALL: {
      return css`
        font-size: 0.875rem;
        padding: 10px 20px 10px;
      `;
    }
    case SIZES.LARGE: {
      return css`
        font-size: 1.1rem;
        padding: 18px 32px 18px;
      `;
    }
    default: {
      return css`
        font-size: 1rem;
        padding: 15px 28px 15px;
      `;
    }
  }
};

export const StyledButton = styled.button.attrs<IStyledButtonProps>((props) => ({
  type: props.type || 'button',
}))<IStyledButtonProps>`
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  line-height: 1.1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-style: solid;
  border-width: 2px;
  transition:
    border 0.3s ease-in-out,
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  width: ${(props) => props.fullWidth ? '100%' : ''};
  border-radius: ${(props) => props.rounded ? '20rem' : '0.5rem'};

  &:active,
  &[aria-pressed='true'],
  &[aria-pressed='mixed'] {
    transition: none;
    opacity: 0.85;
  }

  &:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 4px ${(props) => props.theme.colors.primary};
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ${(props) => variantColor(props)};
  ${(props) => variantSize(props)};
`;