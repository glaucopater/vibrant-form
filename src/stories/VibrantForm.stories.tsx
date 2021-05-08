import Form from "../containers/Form";
import { Story } from '@storybook/react';
import settings from '../settings';
import { FormPropsType } from '../types';
import { initialData, extraFieldsData } from '../__mocks__';
import "../styles.css";
import CustomInput from "../components/CustomInput";

export default {
  title: 'VibrantForm',
  component: Form,
};

const formProps: FormPropsType = {
  fieldsData: initialData,
  action: settings.action,
  method: settings.method,
  withTheme: settings.withTheme,
};

const Template: Story<FormPropsType> = (args) =>
  <div>
    <h1 className="appTitle" >
      {"Vibrant Form Demo"}
    </h1>
    <Form {...args} />
  </div>;

export const Default = Template.bind({});
Default.args = {
  ...formProps
};

export const TwoColumns = Template.bind({});
const moreFieldsData = [...initialData, ...extraFieldsData];
TwoColumns.args = {
  ...formProps,
  fieldsData: moreFieldsData
};

export const NoTheme = Template.bind({});
NoTheme.args = {
  ...formProps,
  withTheme: false
};

export const CustomInputMode = Template.bind({});
CustomInputMode.args = {
  ...formProps,
  component: CustomInput
};
