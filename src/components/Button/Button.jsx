import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colors } from '@/styles/constants';
import { darkenHex, hexToRGB } from '@/styles/utils';

const Button = forwardRef(
  (
    {
      className,
      type = 'button',
      variant = 'default',
      size = 'default',
      fullWidth = false,
      rounded = false,
      href,
      ...props
    },
    ref
  ) => {
    const StyledComponent = href ? StLink : StButton;
    const buttonProps = href ? { to: href, ...props } : { type, ...props };

    return (
      <StyledComponent
        ref={ref}
        className={className}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        $rounded={rounded}
        {...buttonProps}
      />
    );
  }
);

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: 0.15s ease-in-out;
`;

const variantStyles = {
  default: css`
    background-color: var(--color-primary);
    color: var(--color-primary-foreground);
    &:hover {
      background-color: ${hexToRGB(colors.primary, 0.9)};
    }
  `,
  secondary: css`
    background-color: var(--color-secondary);
    color: var(--color-secondary-foreground);
    font-weight: bold;
    &:hover {
      background-color: ${darkenHex(colors.secondary, 10)};
    }
  `
};

const sizeStyles = {
  default: css`
    height: 40px;
    padding: 10px 24px;
  `,
  medium: css`
    height: 48px;
    padding: 12px 24px;
    font-size: 15px;
  `
};

const StButton = styled.button`
  ${baseStyles}
  ${(props) => variantStyles[props.$variant] || variantStyles.default}
  ${(props) => sizeStyles[props.$size] || sizeStyles.default}
  ${(props) => props.$fullWidth && 'width: 100%;'}
  ${(props) => props.$rounded && 'border-radius: 25px;'}
`;

const StLink = styled(Link)`
  ${baseStyles}
  ${(props) => variantStyles[props.$variant] || variantStyles.default}
  ${(props) => sizeStyles[props.$size] || sizeStyles.default}
  ${(props) => props.$fullWidth && 'width: 100%;'}
  ${(props) => props.$rounded && 'border-radius: 25px;'}
`;

Button.displayName = 'Button';

export { Button };
