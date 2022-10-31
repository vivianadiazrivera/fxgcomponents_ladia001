import React from 'react';
import './style.css'
import Popover from '../components/Popover/Popover';

export default {
  title: 'Components-TP1/Popover',
  component: Popover,
  argTypes:{
    shape : {
        options : ["circle", "round"],
        control:{type:"radio"}
    }
  }
};

const Template = (args) => <Popover {...args} />;
export const Circle = Template.bind({});
Circle.args = {
  shape:'circle',
  width: '200px',
  backgroundColor:'#ffce00',
  color: '#000'  
};

export const Round = Template.bind({});
Round.args = {
  shape:'round',
  width: '200px',
  backgroundColor:'#002c88',
  color: '#fff'
};

export const Red = Template.bind({});
Red.args = {
  shape:'round',
  width: '400px',
  backgroundColor:'#c9082a',
  color: '#fff'
};