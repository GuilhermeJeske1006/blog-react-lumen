import { Link } from 'react-router-dom';
import Form from '../components/form';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  function listar() {
    fetch('http://localhost:8000/public/blog')
      .then((data) => data.json())
      .then((response) => {
        setBlogs(response.blog);
        setLoading(false);
    console.log(blogs, 'blogs')
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Handle the error (e.g., display an error message to the user)
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
        })
      .catch((error) => {
        console.error('Error submitting data:', error);
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
