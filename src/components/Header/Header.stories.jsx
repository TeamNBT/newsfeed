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

export const Default = {
  args: {}
};
