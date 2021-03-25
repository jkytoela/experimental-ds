import React from "react";
import { Story } from '@storybook/react';
import  { default as ExperimentalButton, IButtonProps } from "../src/elements/Button";
import { ExperimentalProvider } from "experimental-ds-theming";

export default {
  title: 'Button',
  component: ExperimentalButton,
};

const Template: Story<IButtonProps> = (args) => (
  <ExperimentalProvider>
    <ExperimentalButton {...args} />
  </ExperimentalProvider>
);

export const Button = Template.bind({});

Button.args = {
  children: 'Experimental Button',
  variant: 'primary',
};