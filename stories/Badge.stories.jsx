import React from 'react';
import './style.css'
import {Badge}  from '../lib/components/Badge/Badge';

export default {
  title: 'Components-TP1/Badge',
  component: Badge
};

const Template = (args) => <Badge {...args} />;
export const Default = Template.bind({});
Default.args = {
    size: 'default',
    shape:'square'
  
};
export const Small = Template.bind({});
Small.args = {
    size: 'small',
    shape: 'circle'
  
};
export const Large = Template.bind({});
Large.args = {
    size: 'large'
  
};
