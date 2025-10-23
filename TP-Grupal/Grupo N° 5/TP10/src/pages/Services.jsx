import { fakeServices } from "../utils/FakeData";
import DataTable from "../components/DataTable";
import "../styles/services.css";

export default function Services() {
  return (
    <div className="services-container">
      <h4 className="services-title">Servicios</h4>
      <div className="table-wrapper">
        <DataTable
          columns={["ID", "Servicio", "Precio"]}
          data={fakeServices.map((s) => [s.id, s.name, `$${s.price}`])}
        />
      </div>
    </div>
  );
}

