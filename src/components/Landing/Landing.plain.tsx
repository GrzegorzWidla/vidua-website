import * as React from 'react';
import { Contact, Container, Name } from './Landing.plain.styles';

interface LandingPagePlainProps {
  name: string;
  phone: string;
  email: string;
}

export const LandingPagePlain: React.SFC<LandingPagePlainProps> = ({
  name,
  phone,
  email,
}) => (
  <Container>
    <Name>{name}</Name>
    <Contact>
      {phone}
      <span>&bull;</span>
      <a href={`mailto:${email}`}>{email}</a>
    </Contact>
  </Container>
);
