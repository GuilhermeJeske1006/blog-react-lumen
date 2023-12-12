import React, { useEffect, useState } from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';

function BasicExample({ onSubmit, mode = 'create', blogToEdit }) {
  const [categorias, setcategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    titulo: '',
    subtitulo: '',
    img_capa: '',
    categoria_id: '',
    descricao: '',
  });

  function listarCategorias() {
    fetch('http://localhost:8000/public/categoria')
      .then((data) => data.json())
      .then((response) => {
        setcategorias(response.categoria);
        setLoading(false);
        // Set default category_id if there is at least one category
        if (Array.isArray(response.categoria) && response.categoria.length > 0) {
          setFormData((prevData) => ({
            ...prevData,
            categoria_id: response.categoria[0].id.toString(),
          }));
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    listarCategorias();

    // If in edit mode, set initial form values
    if (mode === 'edit' && blogToEdit) {
      setFormData(blogToEdit);
    }
  }, [mode, blogToEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit callback with the form data and mode
    onSubmit(formData, mode);
  };
  return (
    <Form style={{ width: '50%' }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>titulo Blog</Form.Label>
        <Form.Control
          type="text"
          name="titulo"
          placeholder="Titulo"
          value={formData.titulo}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Subtitulo</Form.Label>
        <Form.Control
          type="text"
          name="subtitulo"
          placeholder="Subtitulo"
          value={formData.subtitulo}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Link da imagem</Form.Label>
        <Form.Control
          type="text"
          name="img_capa"
          placeholder="Link da imagem"
          value={formData.img_capa}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Select
        aria-label="Default select example"
        name="categoria_id"
        value={formData.categoria_id}
        onChange={handleInputChange}
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          Array.isArray(categorias) && categorias.length > 0 ? (
            categorias.map((categoria) => (
              <option value={categoria.id} key={categoria.id}>
                {categoria.nome_categoria}
              </option>
            ))
          ) : (
            <div>Categorias não encontradas</div>
          )
        )}
      </Form.Select>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <FloatingLabel controlId="floatingTextarea2" label="Descrição">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
            name="descricao"
            value={formData.descricao}
            onChange={handleInputChange}
          />
        </FloatingLabel>
      </Form.Group>

      <Button variant="primary" type="submit">
        {mode === 'create' ? 'Criar' : 'Editar'}
      </Button>
    </Form>
  );
}

export default BasicExample;
