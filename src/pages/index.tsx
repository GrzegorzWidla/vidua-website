import { graphql } from 'gatsby';
import * as React from 'react';
import { GatsbyPageProps } from '../../types';
import { LandingPagePlain, Layout } from '../components';

interface LandingPageProps extends GatsbyPageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        name: string;
        email: string;
        phone: string;
      };
    };
  };
}

const LandingPage: React.SFC<LandingPageProps> = ({
  data: {
    markdownRemark: { frontmatter: contactInfo },
  },
}) => (
  <Layout>
    <LandingPagePlain {...contactInfo} />
  </Layout>
);

export const query = graphql`
  query LandingPageQuery {
    markdownRemark(frontmatter: { key: { eq: "contact" } }) {
      frontmatter {
        name
        phone
        email
      }
    }
  }
`;

export default LandingPage;
