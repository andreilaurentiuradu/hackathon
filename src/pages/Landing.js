import React from 'react';

const Landing = () => {
  return (
    <div className="main">
      <div className="top">
        <div className="logout_zone">log</div>
        <div className="top_element">
          <img src="https://i.imgur.com/izJHULq.png" className="image"></img>
        </div>
      </div>
      <div className="content">
        <div className="form">
          <div className="welcome">
            <p className="welcome_text">Bine ai revenit!</p>
          </div>
          <div className="username">
            <div className="username_input">
              <input
                placeholder="Username"
                class="username_input_field"
              ></input>
            </div>
          </div>
          <div className="password">
            <div className="password_input">
              <input
                placeholder="Password"
                class="password_input_field"
              ></input>
            </div>
          </div>
          <div className="change_login">
            <a href="#" className="change_anchor">
              Utilizează recunoașterea facială
            </a>
          </div>
          <div className="button_login">
            <button className="button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
