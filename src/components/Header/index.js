import React, { useState } from 'react';
import logo from './images/logo.jpg';
import { Link } from 'react-scroll';
import MenuIcon from '@material-ui/icons/Menu';

import { HeaderBlock, NavMenu, Burger } from '../Styled/index';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <HeaderBlock>
        <div
          style={{
            width: '80%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <Link to="top" style={{ cursor: 'pointer' }}>
              <img
                src={logo}
                alt="pic"
                style={{ width: '50px', borderRadius: '50%' }}
              />
            </Link>
          </div>

          <div>
            <NavMenu>
              {menu.map((el) => (
                <li style={{ margin: '0 15px' }}>
                  <Link
                    activeClass="active"
                    to={el.link}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    style={{ cursor: 'pointer' }}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </NavMenu>

            <Burger>
              <MenuIcon onClick={() => handleOpen()} />
            </Burger>
          </div>
        </div>
        {open ? (
          <div
            style={{
              backgroundColor: 'white',
              width: '100%',
              position: 'absolute',
              top: '60px',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center'
            }}
          >
            {menu.map((el) => (
              <Link
                activeClass="active"
                to={el.link}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                style={{ cursor: 'pointer', padding: '20px 0' }}
              >
                {el.name}
              </Link>
            ))}
          </div>
        ) : null}
      </HeaderBlock>
    </>
  );
}

const menu = [
  {
    id: 1,
    name: 'Главная',
    link: 'top',
  },
  {
    id: 2,
    name: 'Разработка',
    link: 'procces',
  },
  {
    id: 3,
    name: 'Команда',
    link: 'comand',
  },
  {
    id: 4,
    name: 'FAQ',
    link: 'faq',
  },
];
