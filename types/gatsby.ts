export interface GatsbyPageProps {
  location: {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    key: string;
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    state: object | null;
  };
  pageContext: object;
  pathContext: object;
  path: string;
  data?: object;
}

export interface GatsbySiteData {
  id: string;
  host: string;
  port: string;
  pathPrefix: string;
  polyfill: boolean;
  buildTime: string;
  siteMetadata: {
    title: string;
    description: string;
  };
}
