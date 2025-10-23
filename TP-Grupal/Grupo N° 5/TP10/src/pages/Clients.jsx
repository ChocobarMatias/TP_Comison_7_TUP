import { fakeClients } from "../utils/FakeData";
import DataTable from "../components/DataTable";
import "../styles/clients.css";

export default function Clients() {
  return (
    <div className="clients-container">
      <h4 className="clients-title">Clientes</h4>
      <div className="table-wrapper">
        <DataTable
          columns={["ID", "Nombre", "Email"]}
          data={fakeClients.map((c) => [c.id, c.name, c.email])}
        />
      </div>
    </div>
  );
}
