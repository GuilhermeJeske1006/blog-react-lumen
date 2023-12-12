import CardBasic from '../components/card';
import Banner from '../components/banner';
import { useEffect, useState } from 'react';

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
      });
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <div>
      <Banner />
        <br/>
      <div className='container'>
        <div className='text-center'>
        <h2>Blogs</h2>
            <span>Veja abaixa um pouco dos nossos blogs</span>
        </div>
      </div>

      <div className='container d-flex' style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((blog) => <CardBasic key={blog.id} blog={blog} />)
          ) : (
            <div>No blogs available</div>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
