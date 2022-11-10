import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8 p-4">
        <div className="card">
          <div className="card-header">
            <h2 className="text-center mb-4 font-weight-bold">Parcial 2</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6 font-weight-bold">
                Asignatura:
              </div>
              <div className="col-6 mb-4 font-weight-bold">
                Modelos computacionales de gestion administrativa 
              </div>
              <div className="col-6 font-weight-bold">
                Profesores:
              </div>
              <div className="col-6 mb-4 font-weight-bold">
                Frare, Esteban.
                Barea, Martin.
              </div>
              <div className="col-6 font-weight-bold">
                Integrantes:
              </div>
              <div className="col-6 mb-4 font-weight-bold">
                Suarez, Joaquin
              </div>
              <div className="col-12 text-center">
                <Link
                  to={"/products"}
                  className="btn btn-danger nuevo-post d-block d-md-inline-block"
                >
                  Lista de Productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
