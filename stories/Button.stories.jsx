import React from 'react';
import './style.css'
import Button from '../lib/components/Button/Button';

export default {
  title: 'Components-TP1/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;
export const Small = Template.bind({});
Small.args = {
  width: '100px',
  backgroundColor:'#ffce00',
  color: '#000'
};

export const Medium = Template.bind({});
Medium.args = {
  width: '200px',
  backgroundColor:'#002c88',
  color: '#fff'
};

export const Large = Template.bind({});
Large.args = {
  width: '300px',
  backgroundColor:'#c9082a',
  color: '#fff'
};

export const Patate = Template.bind({});
Patate.args = {
  width: '300px',
  backgroundColor:'#c9082a',
  color: '#fff'
};
