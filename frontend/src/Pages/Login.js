import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  useEffect(()=>{
    const token= localStorage.getItem('token');
    if(token){
      navigate('/admin'); 
    }
  },[navigate])

  const handleLogin = async (e) => {
    e.preventDefault();
    alert(`Username: ${username}, Password: ${password}`);
    console.log(username, password);

    try {
      const response = await axios.post('https://localhost:7261/api/UserApi/login', {
        username: username,
        password: password

        
      });
      const token = response.data;  

      console.log(response.data);

     localStorage.setItem('token', token); 
      alert('login sucessful');
      navigate('/admin'); 
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed, please try again later.');

    }

  };

  return (
    <div className='bg-[#02002e] min-h-[90vh] py-6 h-[100%] flex justify-center items-center'>
      <form className='flex flex-col space-y-4' onSubmit={handleLogin}>
        <h2 className='text-4xl text-white'>Admin Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="p-2 rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2 rounded-md"
        />
        <button className='bg-blue-500 text-white p-2 rounded-md' type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
