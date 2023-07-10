/* eslint-disable array-callback-return */
import './App.css';
import Mc from './mc';
import { useEffect, useState } from 'react';

function App() {
  const gate = "dweb.link";
  // const gate = "ipfs.io";

  const [theme, setTheme] = useState('light');
  // const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const callData = async() => {
    try {
    setIsLoading(true);
    const hash = "bafybeigrwmq3g7dvl26qkdmf25gfogr2l3lzifunbqupqylsshalwyvo3i";
    const file = "0";
    const data_call = await fetch(`https://${gate}/ipfs/${hash}/${file}.json`);
      const data = await data_call.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
    };

    useEffect(() => {
      callData();
    }, []);

  const [searchTitle, setSearchTitle] = useState("");

  return (
    <>
      <div>
      🔎
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTitle(event.target.value)
        }}
      />
      {theme==='light'?
        <svg onClick={toggleTheme} width="20px" height="20px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
        </svg>
        :
        <svg onClick={toggleTheme} width="20px" height="20px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
        </svg>
      }
      </div>

      {isLoading&&<br/>}
      {isLoading&&"Fetching Data...🐢"}

      <div className="container">
      {data.filter((record: any) => {
          if (searchTitle === ""){
            return record
          } else if (record.title.toLowerCase().includes(searchTitle.toLowerCase())){
            return record
          }
        }).map((record, index: any) => {
        return(
          <Mc record={record} key={index} gate={gate}/>
        )
        })}
      </div>
    </>
  )
}

export default App;