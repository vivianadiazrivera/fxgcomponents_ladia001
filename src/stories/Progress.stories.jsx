
import React from 'react';
import './style.css'

import { Progress } from '../components/Progress/Progress';

export default {
  title: 'Components-TP1/Progress',
  component: Progress
};

const Template = (args) => <Progress {...args} />;

export const VariantSuccess = Template.bind({});
VariantSuccess.args ={
    background:'#5cb85c',
    width: '600px'
};

export const VariantDanger = Template.bind({});
VariantDanger.args = {
  background:'#d9534f',
  width: '400px'
};

export const VariantPrimary = Template.bind({});
VariantPrimary.args = {
  background:'#0275d8',
  width:'200px'
};



