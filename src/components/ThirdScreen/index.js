import { useEffect, useState } from 'react';
import data from '../../data/sotrudniki';
import third from '../../images/4.gif';

import Typewriter from 'typewriter-effect';

import {
  Screen,
  Half,
  StyledSpan,
  CardsBlock,
  Card,
  BigCard,
  SmallImage,
} from '../Styled/index';

function ThirdScreen() {
  const [person, setPerson] = useState();
  const [text, setText] = useState();
  const [screen, setScreen] = useState(window.innerWidth);

  useEffect(() => {
    if (screen < 960) {
      const item = data.find((el) => el.id === 1);
      setPerson(item);
    }
  }, [screen])

  useEffect(() => {
    if (person) {
      return setText(person.text);
    }
  }, [person]);

  const handlePerson = (id) => {
    const item = data.find((el) => el.id === id);
    setPerson(item);
  };

  return (
    <Screen id="comand">
      <Half
        background="#fbfbfb"
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        {person ? (
          <BigCard>
            <div style={{ textAlign: 'center' }}>
              <img
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  padding: '15px 0',
                  objectFit: 'cover',
                }}
                alt="pic"
                src={`/images/card-${person.id}.jpg`}
              />
              <div style={{ textAlign: 'center', padding: '5px 5px' }}>
                <StyledSpan fontSize="28px">{person.name}</StyledSpan>
                <StyledSpan>{person.position}</StyledSpan>
              </div>
            </div>

            <div
              style={{
                fontSize: '20px',
                height: '70px',
                maxWidth: '400px',
                padding: '30px 30px',
              }}
            >
              <Typewriter
                options={{
                  strings: text,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
          </BigCard>
        ) : (
          <div>
            <img
              src={third}
              alt="pic"
              style={{ maxWidth: '800px', width: '100%', objectFit: 'cover' }}
            />
          </div>
        )}
      </Half>

      <Half
        background="#f59b8b"
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <div
          style={{
            padding: '15px 0',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '24px',
          }}
        >
          <h2>Команда и роли</h2>
        </div>

        <CardsBlock>
          {data.map((item) => (
            <Card key={item.id} onClick={() => handlePerson(item.id)}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <SmallImage src={`/images/card-${item.id}.jpg`} alt="pic" />
                
                <StyledSpan>{item.name}</StyledSpan>
                <StyledSpan>{item.position}</StyledSpan>
              </div>
            </Card>
          ))}
        </CardsBlock>
      </Half>
    </Screen>
  );
}

export default ThirdScreen;
