import { Link } from 'react-router-dom';
import Form from '../components/form';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  function listar() {
    setLoading(true);
    fetch('http://localhost:8000/public/blog')
      .then((data) => data.json())
      .then((response) => {
        setBlogs(response.blog);
        setLoading(false);
        toast.success("Blogs carregados com sucesso!");
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
        toast.error("Erro ao carregar blogs!");
      });
  }

  const handleSubmit = (formData) => {
    fetch('http://localhost:8000/public/blog/store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data submitted successfully:', data);
        toast.success("Blog cadastrado com sucesso!");
        // Optionally, you can redirect the user or perform other actions upon successful submission
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
        toast.error("Erro ao cadastrar blog!");
      });
  };

  useEffect(() => {
    listar();
  }, []);

  return (
    <div>
        <br/>
        <div className='container'>
        <div className='text-start'>
        <Link to={`/admin/listagem`}>
            <Button variant="link" className="ml-2" type="submit">
            🔙 Voltar para listagem
            </Button>
          </Link>
        </div>
      </div>
      <div className='container'>
        <div className='text-center'>
        <h2>Blogs</h2>
            <span>Cadastre um novo blog</span>
        </div>
      </div>

      <div className='w-100 d-flex' style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        <Form onSubmit={handleSubmit}/>
      </div>
    </div>
  );
}

export default Home;
