import { shallowEqual, useSelector } from 'react-redux';

const useShallowEqualSelector = (selector) => useSelector(selector, shallowEqual);

export default useShallowEqualSelector;
