import React from 'react';
import './style.css';

import Spin  from '../components/Spinner/Spinner';

export default {
  title: 'Components-TP1/Spinner',
  component: Spin
 
};

const Template = (args) => <Spin {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "default",
};
export const Alert = Template.bind({});
Alert.args ={
    size: "large",
    background: "#d9534f"
};

export const Success = Template.bind({});
Success.args = {
  size: "small",
  background: "#5cb85c"
}; 

