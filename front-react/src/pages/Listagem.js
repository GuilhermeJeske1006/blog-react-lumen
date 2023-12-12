import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Listagem() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  function listar() {
    fetch("http://localhost:8000/public/blog")
      .then((data) => data.json())
      .then((response) => {
        setBlogs(response.blog);
        setLoading(false);
        console.log(blogs, "blogs");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    listar();
  }, []);

  function excluir(id) {
    fetch(`http://localhost:8000/public/blog/${id}/destroy`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data deleted successfully:", data);
        listar();
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  }

  return (
    <div>
      <br />
      <div className="container">
        <div className="text-center">
          <h2>Blogs</h2>
          <span>Veja abaixo um pouco dos nossos blogs</span>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="text-start">
          <Link to={`/admin/cadastro`}>
            <Button variant="outline-primary" className="ml-2" type="submit">
              Cadastro
            </Button>
          </Link>
        </div>
      </div>

      <br />

      <div
        className="container d-flex"
        style={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Subtitle</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(blogs) ? (
              blogs.map((blog, index) => (
                <tr key={index}>
                  <td>{blog.id}</td>
                  <td>{blog.titulo}</td>
                  <td>{blog.subtitulo}</td>
                  <td className="d-flex">
                    <Button
                      variant="outline-danger"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Você tem certeza que quer excluir este blog?"
                          )
                        ) {
                          excluir(blog.id);
                        }
                      }}
                      className="ml-2"
                      type="submit"
                    >
                      Deletar
                    </Button>

                    <Link to={`/admin/edicao/${blog.id}`}>
                      <Button
                        variant="outline-primary"
                        className="ml-2"
                        type="submit"
                      >
                        Editar
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No blogs available</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Listagem;
