
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

function BlogDetail() {
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
    <Image style={{ minWidth: '100%' }} src={blog.img_capa} fluid />

      <br />
      <br />
      <div className='container'>
        <div className='text-start'>
          <h2>Blog Details</h2>
          <span>Veja abaixo os detalhes do blog</span>
        </div>
      </div>
      <hr/>
      <br/>
      <div className='container'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className='text-center'>
            <span dangerouslySetInnerHTML={{ __html: blog.descricao }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogDetail;
