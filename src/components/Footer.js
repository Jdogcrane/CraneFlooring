import React from 'react';
import 'react-materialize';

export default function Footer() {

  return (<div>
    <footer className="section center white-text black">
      <button className="btn-small spacing2 black borderBotGNo" onClick={() => window.scrollTo(0, 0)} >To the top</button>
      <h6>MIT / 2021&copy;
      </h6>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="./assests/script.js"></script>
  </div>
  );
}