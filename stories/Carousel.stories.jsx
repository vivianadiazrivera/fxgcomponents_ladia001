import React from 'react';
import './style.css'
import { Carousel } from '../lib/components/Carousel/Carousel';

export default{
    title: 'Components-TP1/Carousel',
    component: Carousel
}
const Template = (args) => <Carousel {...args} />;
export const Small = Template.bind({});
Small.args={
    width: '300px',
    background:'#ff0000',
    height: '180px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center'
}
export const Medium = Template.bind({});
Medium.args={
    width: '600px',
    background:'#00ffff',
    height: '180px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center'
}
export const Large = Template.bind({});
Large.args={
    width: '800px',
    background:'#000040',
    height: '180px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center'
}