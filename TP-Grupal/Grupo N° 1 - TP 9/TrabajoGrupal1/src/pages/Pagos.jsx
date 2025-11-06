import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import PaymentTable from "../components/PaymentTable";
import "./Pagos.css";

const Pagos = () => {
  const [stats, setStats] = useState({
    totalPendiente: 0,
    cobradoEsteMes: 0,
    miembrosVencidos: 0,
  });

  // Calcular estadísticas desde LocalStorage
  useEffect(() => {
    const payments = JSON.parse(localStorage.getItem("payments") || "[]");
    // Calcula los totales: Agarra los datos de "Payments" en localStorage, despues hace un reduce para sumar los totales (el reduce es como un for), valida el estado y ahi devuelve el total de estos, esto lo repito con cada estadistica
    const total = payments.reduce((sum, p) => {
      if (p.estado !== "Pagado") return sum + p.cuota;
      return sum;
    }, 0);

    const collected = payments.reduce((sum, p) => {
      if (p.estado === "Pagado") return sum + p.cuota;
      return sum;
    }, 0);
    // Aqui cuenta los miembros con estado "Vencido"
    const overdue = payments.filter((p) => p.estado === "Vencido").length;

    setStats({
      totalPendiente: total,
      cobradoEsteMes: collected,
      miembrosVencidos: overdue,
    });
  }, []);

  const handleGenerateReport = () => {
    alert("Aquí iria el boton de generar reporte ");
  };

  return (
    <div className="pagos-page">
      {/* Header del componente */}
      <div className="pagos-header">
        <h1 className="page-title">Gestión de Cuotas Mensuales</h1>
        <Button
          variant="primary"
          className="generate-report-btn"
          onClick={handleGenerateReport}
        >
          <i className="bi bi-download me-2"></i>
          Generar Reporte
        </Button>
      </div>

      {/* Cards de estadísticas */}
      <div className="stats-cards">
        <div className="stat-card">
          <div className="stat-label">Total Pendiente</div>
          <div className="stat-value">
            $
            {stats.totalPendiente
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
            {/* Este chiche raro es una expresión regular para poner separadores
            de miles en el numero*/}
          </div>
        </div>
        <div className="stat-card collected">
          <div className="stat-label">Cobrado Este Mes</div>
          <div className="stat-value green">
            $
            {stats.cobradoEsteMes
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </div>
        </div>
        <div className="stat-card overdue">
          <div className="stat-label">Miembros con Deuda</div>
          <div className="stat-value red">{stats.miembrosVencidos}</div>
        </div>
      </div>

      {/* Tabla de pagos (Relevante ver como funciona este componente ya que aqui tiene los datos del local storage )*/}
      <PaymentTable />
    </div>
  );
};

export default Pagos;
