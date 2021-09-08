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