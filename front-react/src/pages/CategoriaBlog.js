import CardBasic from '../components/card';
import Banner from '../components/banner';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Home() {
    const [blogs, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
      function fetchDetails() {
        fetch(`http://localhost/blog/public/categoria/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setBlog(data.categoria);
            setLoading(false);
            console.log(data)
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            // Handle the error (e.g., display an error message to the user)
          });
      }
  
      fetchDetails();
    }, [id]);

  return (
    <div>
        <br/>
      <div className='container'>
        <div className='text-center'>
        <h2>Blogs da categoria {blogs.nome_categoria}</h2>
            <span>Veja abaixa um pouco dos nossos blogs</span>
        </div>
      </div>

      <div className='container d-flex' style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          Array.isArray(blogs.blogs) && blogs.blogs.length > 0 ? (
            blogs.blogs.map((blog) => <CardBasic key={blog.id} blog={blog} />)
          ) : (
            <div>No blogs available</div>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
