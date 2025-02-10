import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    api.get('/dashboard-data')
      .then(response => setData(response.data))
      .catch(error => console.error('Erro ao carregar dados', error));
  }, []);

  return (
    
    <div>
    
      <h1>Dashboard</h1>
      
      <ul>
      
        {data.map(item => (
        
          <li key={item.id}>{item.name}</li>
          
        ))}
        
      </ul>
      
    </div>
    
  );
}

export default Dashboard;