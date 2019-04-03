import * as React from 'react';
import { LandingPagePlain, Layout } from '../components';

interface LandingPageProps {}

const LandingPage: React.SFC<LandingPageProps> = ({}) => (
  <Layout>
    <LandingPagePlain
      name="Grzegorz Widła"
      phone="+48 514 335 985"
      email="greg@vidua.pl"
    />
  </Layout>
);

export default LandingPage;
