import { ApiService } from "./apiService";

class ClienteService extends ApiService {
  constructor() {
    super("http://localhost:3001/api/clientes");
  }

  getAllClientes() {
    return this.get("/");
  }

  getClienteById(id) {
    return this.get(`/${id}`);
  }

  createCliente(clienteData) {
    return this.post("/", clienteData);
  }

  updateCliente(id, clienteData) {
    return this.put(`/${id}`, clienteData);
  }

  deleteCliente(id) {
    return this.delete(`/${id}`);
  }
}

export default new ClienteService();
