import { fn } from '@storybook/test';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: { onClick: fn() }
};

export const Primary = {
  args: {
    children: '가입하고 포트폴리오 올리기',
    variant: 'default',
    size: 'medium'
  }
};

export const Secondary = {
  args: {
    children: '가입하고 포트폴리오 올리기',
    variant: 'secondary',
    size: 'medium'
  }
};

export const Rounded = {
  args: {
    children: '버튼',
    variant: 'secondary',
    rounded: true
  }
};

export const Link = {
  args: {
    children: '버튼',
    type: 'link',
    variant: 'secondary',
    rounded: true
  }
};
