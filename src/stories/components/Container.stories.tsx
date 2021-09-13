import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from 'components/Container';

export default {
    title: 'components/Container',
    component: Container,
    argTypes: {
      content: { control: 'content' },
    },
  } as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;


export const Normal = Template.bind({});
Normal.args = {
  content: 'test',
  label: 'div',
};