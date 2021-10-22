import second from '../../images/3.gif';
import Stepper from './Stepper';

import { Screen, Half } from '../Styled/index';

function SecondScreen() {
  return (
    <Screen id="procces">
      <Half background="#e1f3ab" alignItems="center">
        <div
          style={{
            padding: '15px 0',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '24px',
          }}
        >
          <h2>Этапы разработки прототипа</h2>
        </div>

        <div
          style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Stepper />
        </div>
      </Half>

      <Half
        background="#fbfbfb"
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <div>
          <img src={second} alt="pic" style={{ maxWidth: '800px', width: '100%' }} />
        </div>
      </Half>
    </Screen>
  );
}

export default SecondScreen;
