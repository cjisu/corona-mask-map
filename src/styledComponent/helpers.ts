import { css } from './index';

export const textEllipsis = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const multilineEllipsis = css`
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const onelineEllipsis = css`
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

export const mobileWrapper = css`
  margin: 0 auto;
  max-width: 960px;
`;

export const welcomeMobileWrapper = css`
  margin: 0 auto;
  max-width: 960px;
  background: #ffffff;
`;
