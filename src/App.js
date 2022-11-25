import './App.css';
import { useState } from 'react';

function App() {

  const [userName, setUserName] = useState('');
  const [response, setResponse] = useState('');

  const handleText = (e) => {
    setUserName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://api.github.com/users/' + userName)
      .then(response => response.json())
      .then(data => setResponse(data))
    setUserName('')
  }





  return (
    <div className="App">
      <div className='bg'></div>
      <div className='bg bg2'></div>
      <div className='bg bg3'></div>
      <form className='form-card'>
        <input type="text" onChange={handleText} value={userName}></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {response.message}
      {
        response && (response.message !== 'Not Found') && (
          <div className='github-profile'>
            <div>
              <img src={response.avatar_url} alt="profile" />
            </div>
            <div className='user-details'>
              <h2 className='user-name'>{response.name}</h2>
              <em className='user-login'>{response.login}</em>
              <div className='follow'>
                <p><b>Followers:</b> {response.followers}</p>
                <p><b>Following:</b> {response.following}</p>

              </div>
              <p className='bio'><b>📝Bio:</b> {response.bio}</p>
              <div className='others'>
                <p className='company-name'><b>🏢Company :</b>{response.company}</p>
                <p className='company-name'><b>📍Location:</b> {response.location}</p>
                <p className='company-name'><b>Public-Repos:</b> {response.public_repos}</p>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
