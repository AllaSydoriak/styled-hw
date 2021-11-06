import styled from '../../helpers/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #282c34;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.isLink ? 'underline' : 'none'};
`;

export const PlainButton = styled.button`
  margin: 0 6px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 10px;
  border-radius: 6px;
  padding: 10px 20px;
  background-color: transparent;
  color: ${(props) => props.type === 'plain' ? 'white' : '#ff79d5' };
  border: 1px solid ${(props) => props.type === 'plain' ? 'white' : '#ff79d5' };;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const Result = styled.p`
  font-size: 50px;
  margin: 0;
`;