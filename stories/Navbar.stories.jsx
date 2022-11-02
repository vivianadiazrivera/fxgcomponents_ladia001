import React from 'react';
import './style.css'

import  Navbar  from '../lib/components/Navbar/Navbar';

export default {
  title: 'Components-TP1/Navbar',
  component: Navbar
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  background:'#0275d8',
    color:'#ffffff'
};

export const Danger = Template.bind({});
Danger.args = {
  background:'#d9534f',
  color:'#ffffff'
};

export const Success = Template.bind({});
Success.args = {
  background:'#5cb85c',
  color:'#000'
};