import styled from 'styled-components';
import { ellipsisStyle } from '@/styles/utils';

export const StProfile = styled.div`
  background-color: var(--color-white);
  border-radius: 12px;
  padding: 24px 16px;
`;

export const StRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StImageBox = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

export const StImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StThumbnail = styled.div`
  position: relative;
`;

export const StTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex-grow: 1;
`;

export const StName = styled.strong`
  font-size: 15px;
  font-weight: 600;
  color: var(--color-black);
  line-height: 1.4;
  ${ellipsisStyle(1)};
`;

export const StJob = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #777777;
  line-height: 1.4;
  ${ellipsisStyle(1)};
`;

export const StIntroduction = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-black);
  line-height: 1.4;
`;

export const StContent = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #777777;
  line-height: 1.4;
  ${ellipsisStyle(1)};
`;
