import React from 'react';
import Form from "../containers/Form";
import { Story } from '@storybook/react';
import settings from '../settings';
import { FormPropsType } from '../types';
import { initialData } from '../__mocks__';
import "../styles.css";

export default {
  title: 'VibrantForm',
  component: Form,
}; // as Meta;

const formProps: FormPropsType = {
  fieldsData: initialData,
  action: settings.action,
  method: settings.method,
  withTheme: settings.withTheme,
};

const Template: Story<FormPropsType> = (args) =>
  <div className="App">
    <h1 className="appTitle">{"TEST"}</h1>
    <Form {...formProps} />
  </div>;

export const Default = Template.bind({});
Default.args = {
  ...formProps
};
