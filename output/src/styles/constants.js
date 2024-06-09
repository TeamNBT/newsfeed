import { css } from 'styled-components';
import { defaultColors, defaultColorVars } from './colors';

export const colors = defaultColors;
const width = { maxWidth: '1400px' };

export const constants = css`
  :root {
    ${defaultColorVars};
    --width-max: ${width.maxWidth};
  }
`;
