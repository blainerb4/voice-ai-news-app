import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
//import './App.css';
import NewsCards from './components/news-cards/news-cards'
//import classes from '*.module.css';
import useStyles from './styles.js';

const alanKey = '651d745ff81c7c8e76f19ff45490e1c52e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      }
    })
  }, [])

  return (
    <div>
      <div className={classes.logoContainer}>
      <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alan logo"/>
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  )
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
