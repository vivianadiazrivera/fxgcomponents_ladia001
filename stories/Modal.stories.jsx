import React from 'react';
import './style.css'

import  Modal from '../lib/components/Modal/Modal';

export default {
  title: 'Components-TP1/Modal',
  component: Modal
};

const Template = (args) => <Modal {...args} />;

export const Blue = Template.bind({});
Blue.args = {
    background:'#000080',
    color:'#ffffff'
};

export const Red = Template.bind({});
Red.args = {
    background:'#ff0000',
    color:'#ffffff'
};

export const Green = Template.bind({});
Green.args = {
    background:'#008000',
    color:'#ffffff'
};