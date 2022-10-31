import React from 'react';
import './style.css'
import Table from '../components/Table/Table';

export default {
  title: 'Components-TP1/Table',
  component: Table,
  argTypes: {
    selectionType : {
        options: ["radio","checkbox"],
        control: { type: 'radio'}
    }
  }
};

const Template = (args) => <Table {...args} />;
export const Radio = Template.bind({});
Radio.args = {
  selectionType : "radio",
  width: '300px'
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  selectionType : "checkbox",
  width: '500px'
};

export const TableComplete = Template.bind({});
TableComplete.args = {
  width: '100%',
};