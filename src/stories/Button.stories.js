var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Button } from './Button';
export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return React.createElement(Button, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};
export var Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};
export var Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};
export var Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
