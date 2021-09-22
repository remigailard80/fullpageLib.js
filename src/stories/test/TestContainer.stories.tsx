import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TestContainer from 'test/TestContainer';

export default {
    title: 'test/TestContainer',
    component: TestContainer,
    argTypes: {
    },
  } as ComponentMeta<typeof TestContainer>;

const Template: ComponentStory<typeof TestContainer> = (args) => <TestContainer {...args} />;


export const Normal = Template.bind({});
Normal.args = {
  content: 'test',
  label: 'div',
};