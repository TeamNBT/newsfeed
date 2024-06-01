import { css } from 'styled-components';

export const colors = {
  primary: '#0f172a',
  primaryForeground: '#ffffff',
  destructive: '#ef4444',
  destructiveForeground: '#ffffff',
  secondary: '#f1f5f9',
  secondaryForeground: '#0f172a',
  border: '#e2e8f0',
  muted: '#f1f5f9',
  mutedForeground: '#64748b',
  shadow: '#000000',
  foreground: '#020817',
  baseBackground: '#ffffff'
};

export const constants = css`
  :root {
    --color-primary: ${colors.primary};
    --color-primary-foreground: ${colors.primaryForeground};
    --color-destructive: ${colors.destructive};
    --color-destructive-foreground: ${colors.destructiveForeground};
    --color-secondary: ${colors.secondary};
    --color-secondary-foreground: ${colors.secondaryForeground};
    --color-border: ${colors.border};
    --color-muted: ${colors.muted};
    --color-muted-foreground: ${colors.mutedForeground};
    --color-shadow: ${colors.shadow};
    --color-foreground: ${colors.foreground};
    --color-base-background: ${colors.baseBackground};
  }
`;
