import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function BasicExample({ blog }) {
  return (
    <div className="col-sm-3 m-3 p-1">
      <Card style={{ width: '18rem' }}>
        {/* Use curly braces without quotes for dynamic values */}
        <Card.Img variant="top" src={blog.img_capa} />
        <Card.Body>
          <Card.Title>{blog.titulo}</Card.Title>
          <Card.Text>{blog.subtitulo}</Card.Text>
          <Link to={`/blog/${blog.id}`}>
            <Button variant="outline-primary">Ver mais</Button>
            </Link>

        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
