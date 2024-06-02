import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    )
  ]
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
