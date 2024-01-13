import styled from 'styled-components';


export const Div = styled.div`
    width:600px;
    height: 600px;
    @media screen and (max-width: 960px) {
    max-height: 500px;
    max-width: 500px;
  }
  @media screen and (max-width: 640px) {
    max-height: 350px;
    max-width: 350px;
  }
`