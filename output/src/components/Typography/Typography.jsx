import styled, { css } from 'styled-components';

const Typography = ({
  variant = 'typography4',
  weight = 'regular',
  as = 'div',
  color,
  ...props
}) => {
  return <StTypography as={as} $variant={variant} $weight={weight} $color={color} {...props} />;
};

const variantStyles = {
  typography5: css`
    font-size: 20px;
    line-height: 140%;
  `,
  typography4: css`
    font-size: 16px;
    line-height: 140%;
  `,
  typography3: css`
    font-size: 15px;
    line-height: 140%;
  `,
  typography2: css`
    font-size: 14px;
    line-height: 140%;
  `,
  typography1: css`
    font-size: 13px;
    line-height: 140%;
  `
};

const fontWeightStyles = {
  regular: '400',
  semibold: '600',
  bold: '700'
};

const StTypography = styled.div`
  ${({ $variant }) => variantStyles[$variant || 'typography5']}
  font-weight: ${({ $weight }) => fontWeightStyles[$weight || 'regular']};
  color: ${({ $color }) => $color || 'var(--color-foreground)'};
`;

export default Typography;
