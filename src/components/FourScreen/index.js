import styled from 'styled-components';
import React, { useState } from 'react';
import produce from 'immer';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import {
  Screen,
} from '../Styled/index';

export default function Faq() {
  const [data, setData] = useState(faq);

  const handleExpandClick = (id) => {
    setData(
      produce((draft) => {
        const item = draft.find((item) => item.id === id);
        item.open = !item.open;
      })
    );
  };
  return (
    <Screen id="faq">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#5ac5c9',
          height: '100%',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            margin: '30px 0',
            padding: '15px 0',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '24px',
          }}
        >
          <h2>FAQ</h2>
        </div>

        <div>
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: 'white',
                margin: '10px 0',
                padding: '20px 20px',
                maxWidth: '800px',
                cursor: 'pointer',
                fontSize: '22px',
              }}
            >
              <div
                onClick={() => handleExpandClick(item.id)}
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                {item.title}
                {item.open ? (
                  <ArrowDropUpIcon fontSize="large" />
                ) : (
                  <ArrowDropDownIcon fontSize="large" />
                )}
              </div>

              {item.open ? (
                <div
                  style={{
                    margin: '7px 0',
                    backgroundColor: '#f59b8b',
                    padding: '5px 15px',
                  }}
                >
                  {item.description}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

// const Screen = styled.div`
//   display: flex;
//   height: 100vh;
// `;

const faq = [
  {
    id: 1,
    title: 'Зачем проектной команде работать совместно с Лабораторией?',
    description:
      'Команда сможет погрузиться в работу максимально приблеженную к реальным условиям. А также вы сможете проработать свой проект чуть больше, чем другие команды на курсе',
    open: false,
  },
  {
    id: 4,
    title: 'Получит ли команда прототип, который разработала Лаборатория?',
    description:
      'Да, мы передаем дизайн-макет прототипа. Таким образом у вас будет прототип сценария который разработали вы и прототип сценария разработанного совместно с Лабораторией',
    open: false,
  },
  {
    id: 2,
    title: 'Передаст ли Лаборатория код реализованного функционала?',
    description: 'Нет, код принадлежит РАНХиГС и Сбербанку',
    open: false,
  },
  {
    id: 3,
    title: 'А мы точно успеем реализовать весь задуманный функционал?',
    description: 'Зависит от слаженной работы команды проекта и Лаборатории',
    open: false,
  },
];
