import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div class="container d-flex flex-column align-items-center justify-content-center">
            <h1>Organize your <br /> work and life.
            </h1>
            <p>Become focused, organized, and calm with <br />ZenTask. The World's #1 task manager app.</p>
            <button className='home-btn p-2'>
              <a href="/todo" style={{ textDecoration: 'none', color: 'inherit' }}>
              Make To-Do List
              </a>
              </button>
        </div>
    </div>
  )
}

export default Home