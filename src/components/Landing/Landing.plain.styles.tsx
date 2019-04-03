import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 24px;
  border: 40px solid #e6e7e8;
  background: #f8f0fa;
  box-sizing: border-box;
`;

export const Name = styled.h1`
  color: #58595b;
  font-size: 1.7rem;
  font-weight: 300;
  text-transform: uppercase;
`;

export const Contact = styled.p`
  margin: 0;
  margin-top: 20px;
  font-size: 0.9rem;
  text-transform: uppercase;

  & span {
    margin: 0 10px;
  }

  & a {
    text-decoration: none;
    border-bottom: 10px solid rgba(88, 89, 91, 0);
    transition: 300ms border 0ms ease-in-out;

    &:hover {
      border-bottom: 1px solid rgba(88, 89, 91, 1);
    }
  }
`;
