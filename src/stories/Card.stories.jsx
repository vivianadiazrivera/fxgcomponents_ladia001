import React from 'react';
import './style.css'
import Card from '../components/Card/Card';

export default {
  title: 'Components-TP1/Card',
  component: Card
};

const Template = (args) => <Card {...args} />;
export const Blanc = Template.bind({});
Blanc.args = {
  width: '200px',
  backgroundColor:'white',
  color: '#000',
};

export const Noire = Template.bind({});
Noire.args = {
  width: '300px',
  backgroundColor:'black',
  color: '#fff'
};

export const Bleue = Template.bind({});
Bleue.args = {
  width: '400px',
  backgroundColor:'blue',
  color: '#fff'
};