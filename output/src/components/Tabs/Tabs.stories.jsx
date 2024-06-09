import Typography from '../Typography';
import { Tabs, Tab } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { Tab },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Tab 컴포넌트만 들어갈 수 있습니다.'
    }
  }
};

export const Default = (args) => (
  <Tabs {...args}>
    <Tab active>
      <Typography>프로필</Typography>
    </Tab>
    <Tab>
      <Typography>작성글</Typography>
    </Tab>
    <Tab>
      <Typography>댓글</Typography>
    </Tab>
  </Tabs>
);

Default.args = {};
