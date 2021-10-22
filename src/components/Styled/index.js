import styled from 'styled-components';

export const Screen = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 960px) {
    flex-wrap: wrap;
    width: 100%;
    height: auto;
  }
`;

export const Half = styled.div`
  width: 50%;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems};
  color: ${({ color }) => color};
  background-color: ${({ background }) => background};
  @media (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
`;

export const StyledSpan = styled.div`
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  margin-top: ${({ mt }) => mt};
  text-align: ${({ textAlign }) => textAlign};
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const CardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Card = styled.div`
  width: 100px;
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 10px 20px;
  text-align: center;
`;

export const SmallImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  &:hover {
    border: '3px solid green';
  }
`;

export const BigCard = styled.div`
  max-width: 750px;
  max-height: 800px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderBlock = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid black;
  align-items: center;
  display: flex;
  justify-content: space-around;
  z-index: 99999;
`;
export const NavMenu = styled.li`
  display: flex;
  list-style-type: none;
  @media (max-width: 960px) {
    display: none;
  }
`;

export const Burger = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`;

export const InfoBlock = styled.div`
  max-width: 600px;
  padding: 5px 10px;
`;

export const TypingText = styled.div`
  overflow: hidden;
  border-right: .17em solid #e29508;  
  white-space: nowrap;  
  margin: 0 auto;  
  letter-spacing: .17em;
  animation:  
  typing 5s steps(30, end),
  blink-caret .7s step-end infinite;
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange }
`;
