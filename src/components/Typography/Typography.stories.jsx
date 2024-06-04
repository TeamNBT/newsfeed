import Typography from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '텍스트를 지정합니다.'
    },
    color: { control: 'color', description: '텍스트의 색상을 지정합니다.' },
    weight: {
      control: 'select',
      description: '텍스트의 굵기를 지정합니다.',
      options: ['regular', 'semibold', 'bold']
    },
    as: {
      control: 'select',
      description: '텍스트의 태그를 지정합니다.',
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    },
    variant: {
      control: 'select',
      description: '텍스트의 크기를 지정합니다.<br/>💎 (13px / 14px / 15px / 16px / 20px)',
      options: ['typography1', 'typography2', 'typography3', 'typography4', 'typography5']
    }
  }
};

export const Primary = {
  args: {
    children: '기본 텍스트',
    variant: 'typography4'
  }
};

export const Typography1 = {
  args: {
    children: 'Typography1 텍스트',
    variant: 'typography1'
  }
};

export const Typography2 = {
  args: {
    children: 'Typography2 텍스트',
    variant: 'typography2'
  }
};

export const Typography3 = {
  args: {
    children: 'Typography3 텍스트',
    variant: 'typography3'
  }
};

export const Typography4 = {
  args: {
    children: 'Typography4 텍스트',
    variant: 'typography4'
  }
};

export const Typography5 = {
  args: {
    children: 'Typography5 텍스트',
    variant: 'typography5'
  }
};

export const Bold = {
  args: {
    children: '볼드 텍스트',
    weight: 'bold'
  }
};

export const Semibold = {
  args: {
    children: '세미볼드 텍스트',
    weight: 'semibold'
  }
};

export const CustomColor = {
  args: {
    children: '커스텀 컬러 텍스트',
    color: 'var(--color-primary)'
  }
};
