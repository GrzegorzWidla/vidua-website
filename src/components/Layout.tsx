import * as React from 'react';
import Helmet from 'react-helmet';
import { LayoutGlobalStyles } from './Layout.styles';

interface LayoutProps {}

export const Layout: React.SFC<LayoutProps> = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <html lang="pl" />
      <title>Grzegorz 'VIDUA' Widła</title>
      <meta name="description" content="" />
      <meta charSet="utf-8" />
    </Helmet>

    <LayoutGlobalStyles />

    {children}
  </React.Fragment>
);
