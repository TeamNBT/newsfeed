import { BrowserRouter as Router } from 'react-router-dom';
import { fn } from '@storybook/test';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    )
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '버튼의 내용을 지정합니다.'
    },
    variant: {
      control: 'select',
      description: '버튼의 색상을 지정합니다.',
      options: ['default', 'secondary']
    },
    size: {
      control: 'select',
      description: '버튼의 크기를 지정합니다.',
      options: ['default', 'medium']
    },
    type: {
      control: 'text',
      description: '버튼의 타입을 지정합니다.<br/>💎 (button / submit / reset)'
    },
    fullWidth: {
      control: 'boolean',
      description: '버튼의 너비를 100%로 설정합니다.'
    },
    rounded: {
      control: 'boolean',
      description: '버튼의 모서리를 둥근 모양으로 설정합니다.<br/>💎 (boolean)'
    },
    href: {
      control: 'text',
      description: 'react-router-dom의 Link를 사용하여<br/>페이지를 이동합니다.'
    }
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
    href: '/sign-in',
    variant: 'secondary',
    rounded: true
  }
};
