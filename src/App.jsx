import React from 'react';
import Card from './components/Card';

const cities = ['Esperança,br', 'Natal,br', 'Montreal,ca', 'São Paulo,br', 'London,uk', 'Tokio,jp'].sort();

const App = () => {
  return (
    <div>
      <div className='title'> Weather Report </div>
      <div className='cardsGroup'>
        {cities.map(local => {
          let [city, country] = local.split(',');
          return (<Card key={city} city={city} country={country} />);
        })}
        <footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/andrecio-costa-bezerra-59980a171/"
            className="name"
          >
            Featured by Andrécio Bezerra
        </a>
          < a target="_blank" rel="noopener noreferrer" href="https://icons8.com" className="icons8">
            Icons by Icons8
        </a >
        </footer>
      </div>
    </div>
  )
}

export default App;