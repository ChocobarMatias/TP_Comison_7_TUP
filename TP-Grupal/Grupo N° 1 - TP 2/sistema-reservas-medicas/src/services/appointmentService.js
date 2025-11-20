const MOCK_APPOINTMENTS = [
  {
    id: "1",
    doctorId: "1",
    patientId: "1",
    fecha: "2025-11-15",
    hora: "09:00",
    motivo: "Control cardíaco de rutina",
    estado: "confirmado",
    observaciones: "",
  },
  {
    id: "2",
    doctorId: "2",
    patientId: "2",
    fecha: "2025-11-16",
    hora: "10:30",
    motivo: "Consulta pediátrica - control de crecimiento",
    estado: "pendiente",
    observaciones: "",
  },
  {
    id: "3",
    doctorId: "3",
    patientId: "3",
    fecha: "2025-11-18",
    hora: "14:00",
    motivo: "Dolor de rodilla",
    estado: "confirmado",
    observaciones: "Traer estudios previos",
  },
  {
    id: "4",
    doctorId: "4",
    patientId: "4",
    fecha: "2025-11-20",
    hora: "11:00",
    motivo: "Dolor abdominal recurrente",
    estado: "pendiente",
    observaciones: "",
  },
  {
    id: "5",
    doctorId: "5",
    patientId: "5",
    fecha: "2025-11-22",
    hora: "16:30",
    motivo: "Examen de la vista",
    estado: "confirmado",
    observaciones: "",
  },
  {
    id: "6",
    doctorId: "1",
    patientId: "4",
    fecha: "2025-11-10",
    hora: "10:00",
    motivo: "Consulta cardiológica",
    estado: "completado",
    observaciones: "Paciente estable",
  },
  {
    id: "7",
    doctorId: "6",
    patientId: "1",
    fecha: "2025-11-12",
    hora: "15:00",
    motivo: "Consulta dermatológica",
    estado: "completado",
    observaciones: "Se recetó tratamiento",
  },
  {
    id: "8",
    doctorId: "7",
    patientId: "2",
    fecha: "2025-11-05",
    hora: "09:30",
    motivo: "Chequeo neurológico",
    estado: "cancelado",
    observaciones: "Cancelado por el paciente",
  },
];

class AppointmentService {
  constructor() {
    this.citas = this.getAll();
  }
  async getAll() {
  try {
    const response = await fetch("http://localhost:3001/citas");
    const data = await response.json();

    console.log("Citas:", data);
    return data;
  } catch (error) {
    console.error("Error al obtener citas:", error);
    return {
      success: false,
      error: "Error al obtener citas",
    };
  }
  }

  async getById(id) {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const appointment = this.appointments.find((a) => a.id === id);

    if (!appointment) {
      return {
        success: false,
        error: "Turno no encontrado",
      };
    }

    return {
      success: true,
      data: appointment,
    };
  }

  async create(appointmentData) {
    try {
    const response = await fetch(`http://localhost:3001/citas`, //Crear Turno
      {
        method: "POST",
        headers:  {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paciente_id: appointmentData.paciente_id,
          doctor_id: appointmentData.doctor_id,
          fecha: appointmentData.fecha,
          hora: appointmentData.hora,
          motivo: appointmentData.motivo,
          estado: appointmentData.estado,
        })
      })
          const data = await response.json();
      if (data.success) {
        return {
          success: true,
          data: data.data,
          message:  "Turno creado exitosamente",
        };
      } else {
        return {
          success: false,
          error:  "Error al crear Turno",
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || "Error de conexión",
      };
    }
  }

  async update(id, appointmentData) {
  try {
    const response = await fetch(`http://localhost:3001/citas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paciente_id: appointmentData.paciente_id,
        doctor_id: appointmentData.doctor_id,
        fecha: appointmentData.fecha,
        hora: appointmentData.hora,
        motivo: appointmentData.motivo,
        estado: appointmentData.estado
      }),
    });

    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        data: data.data,
        message: data.message || "Turno actualizado exitosamente",
      };
    } else {
      return {
        success: false,
        error: data.error || data.message || "Error al actualizar turno",
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message || "Error de conexión",
    };
  }
}

  async delete(id) {
     try {
      const response = await fetch(`http://localhost:3001/citas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
      if (data.success) {
        return {
          success: true,
          data: data.data,
          message: "Cita eliminada exitosamente",
        };
      } else {
        return {
          success: false,
          error: "Error al eliminar cita",
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || "Error de conexión",
      };
    }
  }

  async search(query) {
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (!query || query.trim() === "") {
      return this.getAll();
    }

    const searchTerm = query.toLowerCase();
    const filtered = this.appointments.filter(
      (a) =>
        a.motivo.toLowerCase().includes(searchTerm) ||
        a.estado.toLowerCase().includes(searchTerm) ||
        a.observaciones.toLowerCase().includes(searchTerm)
    );

    return {
      success: true,
      data: filtered,
      total: filtered.length,
    };
  }

  async getByDoctor(doctorId) {
    await new Promise((resolve) => setTimeout(resolve, 400));

    const filtered = this.appointments.filter((a) => a.doctorId === doctorId);

    return {
      success: true,
      data: filtered,
      total: filtered.length,
    };
  }

  async getByPatient(patientId) {
    await new Promise((resolve) => setTimeout(resolve, 400));

    const filtered = this.appointments.filter((a) => a.patientId === patientId);

    return {
      success: true,
      data: filtered,
      total: filtered.length,
    };
  }

  async getByStatus(estado) {
    await new Promise((resolve) => setTimeout(resolve, 400));

    const filtered = this.appointments.filter((a) => a.estado === estado);

    return {
      success: true,
      data: filtered,
      total: filtered.length,
    };
  }

  async getByDateRange(fechaInicio, fechaFin) {
    await new Promise((resolve) => setTimeout(resolve, 400));

    const filtered = this.appointments.filter((a) => {
      return a.fecha >= fechaInicio && a.fecha <= fechaFin;
    });

    return {
      success: true,
      data: filtered,
      total: filtered.length,
    };
  }

  async updateStatus(id, nuevoEstado) {
    return this.update(id, { estado: nuevoEstado });
  }

  getEstados() {
    return ["pendiente", "confirmado", "cancelado", "completado"];
  }
}

export const appointmentService = new AppointmentService();
export default appointmentService;
