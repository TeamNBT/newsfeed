import styled, { css } from 'styled-components';

export const ellipsisStyle = (line = 1) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
`;

export const hexToRGB = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return `rgb(${r}, ${g}, ${b})`;
};

// darkenHex 함수는 주어진 색상(hex)을 지정된 양(amount)만큼 어둡게 변환합니다.
export const darkenHex = (hex, amount) => {
  if (hex[0] === '#') {
    hex = hex.slice(1);
  }

  // 16진수 문자열을 정수로 변환합니다.
  const num = parseInt(hex, 16);
  // 빨간색, 초록색, 파란색 값을 추출하고 amount만큼 감소시킵니다.
  let r = (num >> 16) - amount;
  let g = ((num >> 8) & 0x00ff) - amount;
  let b = (num & 0x0000ff) - amount;

  // 각 색상 값이 0보다 작아지지 않도록 합니다.
  if (r < 0) r = 0;
  if (g < 0) g = 0;
  if (b < 0) b = 0;

  // 어두워진 색상을 16진수 문자열로 변환합니다.
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
};

export const e11yHidden = css`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
`;

export const StyledDivider = styled.div`
  width: 1px;
  height: ${({ $height }) => `${$height}px`};
`;
