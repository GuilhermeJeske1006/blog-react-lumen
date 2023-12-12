import { Link } from 'react-router-dom';
import Form from '../components/form';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function EditBlog() {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    function fetchDetails() {
      fetch(`http://localhost:8000/public/blog/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setBlog(data.blog);
          setLoading(false);
          console.log(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          // Handle the error (e.g., display an error message to the user)
        });
    }

    fetchDetails();
  }, [id]);

  const handleEdit = (formData) => {
    fetch(`http://localhost:8000/public/blog/${id}/update`, {
      method: 'PUT', // Assuming you use the PUT method for updating
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data submitted successfully:', data);
        // You might want to update the state or take other actions after a successful update
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    <div>
              <br />

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
          <h2>Editar Blog</h2>
          <span>Edit an existing blog</span>
        </div>
      </div>

      <div className='w-100 d-flex' style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        <Form onSubmit={handleEdit} mode="edit" blogToEdit={blog} />
      </div>
    </div>
  );
}

export default EditBlog;
