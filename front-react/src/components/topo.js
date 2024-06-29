import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'; // Import Link
import React, { useEffect, useState } from 'react';

function BrandExample() {
  const [categorias, setcategorias] = useState([]);

  function listarCategorias() {
    fetch('http://localhost:8000/public/categoria')
      .then((data) => data.json())
      .then((response) => {
        setcategorias(response.categoria);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    listarCategorias();
  }, []);

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Dropdown>
            <Dropdown.Toggle>Categorias</Dropdown.Toggle>
            <Dropdown.Menu>
                {Array.isArray(categorias) && categorias.length > 0
                ? categorias.map((categoria) => (
                    <Dropdown.Item key={categoria.id}>
                        <Link to={`categoria/blogs/${categoria.id}`}>
                        {categoria.nome_categoria}
                        </Link>
                    </Dropdown.Item>
                    ))
                : null}
            </Dropdown.Menu>
            </Dropdown>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" href="/admin/listagem">
                Admin
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
