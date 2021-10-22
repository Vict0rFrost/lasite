import main from '../../images/2.gif';

import { Screen, Half, StyledSpan, InfoBlock } from '../Styled/index';
// import logoRan from '../../images/ranhigs.jpg'
import Typewriter from 'typewriter-effect';

function FirstScreen() {
  return (
    <Screen id="top">
      <Half background="white" alignItems="center">
        <div>
          <img
            src={main}
            alt="pic"
            style={{ maxWidth: '800px', width: '100%' }}
          />
        </div>
      </Half>

      <Half background="#5ac5c9" color="white" alignItems="center">
        <InfoBlock>
          <StyledSpan fontSize="40px" textAlign="center">
            Лаборатория ГосТех
          </StyledSpan>

          <div style={{ fontSize: '20px', marginTop: '30px', height: '170px' }}>
            <Typewriter 
              options={{
                strings: [info],
                autoStart: true,
                loop: true,   
                delay: 50,
              }}
            />
          </div>
          {/* <img src={logoRan} alt="pic" /> */}
        </InfoBlock>
      </Half>
    </Screen>
  );
}

export default FirstScreen;

const info =  'Лаборатория помогает слушателям учебной программы РАНХиГС в реализации прототипа проекта разрабатываемом в рамках учебного курса'
