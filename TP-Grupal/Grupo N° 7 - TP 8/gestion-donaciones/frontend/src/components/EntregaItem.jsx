import React, { useState } from "react";

const EntregaItem = ({ entrega }) => {
  const [estado, setEstado] = useState(entrega.estado); // 'pendiente', 'en_camino', 'entregado'

  const handleMarcarEntregado = () => {
    setEstado("entregado");
    console.log(`La entrega ${entrega.id} ha sido marcada como entregada.`);
  };

  const progressWidth =
    estado === "pendiente" ? "0%" : estado === "en_camino" ? "50%" : "100%";
  const progressColor =
    estado === "pendiente"
      ? "bg-secondary"
      : estado === "en_camino"
      ? "bg-warning"
      : "bg-success";

  return (
    <div className="card mb-4 shadow-sm border-0">
      <div className="card-header d-flex justify-content-between align-items-center bg-primary text-white">
        <span>
          ID: <strong>{entrega.id}</strong>
        </span>
        <span className="badge bg-light text-dark">{entrega.destino}</span>
      </div>

      <div className="card-body">
        <h5 className="card-title fw-bold">{entrega.contenido}</h5>
        <p className="card-text">
          <strong>Destino:</strong> {entrega.destino} <br />
          <strong>Fecha Salida:</strong> {entrega.fechaSalida} <br />
          <strong>Fecha Llegada:</strong> {entrega.fechaLlegada ?? "Sin registrar"}
        </p>

        <div className="progress mb-2" style={{ height: "6px" }}>
          <div
            className={`progress-bar ${progressColor}`}
            role="progressbar"
            style={{ width: progressWidth }}
            aria-valuenow={estado === "en_camino" ? 50 : estado === "entregado" ? 100 : 0}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="d-flex justify-content-between text-center mb-3">
          <div className={`fw-bold ${estado !== "pendiente" ? "text-success" : "text-muted"}`}>
            Salió
            <div className="small">{entrega.fechaSalida}</div>
          </div>
          <div className={`fw-bold ${estado === "entregado" ? "text-success" : "text-muted"}`}>
            Llegada
            <div className="small">{entrega.fechaLlegada ?? "Pendiente"}</div>
          </div>
        </div>

        {estado !== "entregado" ? (
          <div className="text-end">
            <button className="btn btn-primary" onClick={handleMarcarEntregado}>
              Marcar como Entregada
            </button>
          </div>
        ) : (
          <div className="alert alert-success text-center mb-0">¡Entrega completada! ✅</div>
        )}
      </div>
    </div>
  );
};

export default EntregaItem;

