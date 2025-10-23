import { fakeAppointments } from "../utils/FakeData";
import DataTable from "../components/DataTable";
import "../styles/appointments.css";

export default function Appointments() {
  return (
    <div className="appointments-container">
      <h4 className="appointments-title">Turnos</h4>

      <div className="table-wrapper">
        <DataTable
          columns={["ID", "Cliente", "Servicio", "Fecha", "Hora"]}
          data={fakeAppointments.map((t) => [
            t.id,
            t.clientId,
            t.serviceId,
            t.date,
            t.time,
          ])}
        />
      </div>
    </div>
  );
}

