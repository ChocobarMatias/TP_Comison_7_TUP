import { pool } from "../config/db.js";

export const obtenerTodosLosTurnos = async (req, res) => {
    try{
    const [rows] = await pool.query("SELECT * FROM citas")
    res.json({succes: true, data: rows})
    } catch (error) {
        res.status(500).json({error: "Error Del Servidor"})
    }
}

export const eliminarTurnos = async (req, res) => {
    try{
        const {id} = req.params
        const [result] = await pool.query("DELETE FROM citas WHERE id= ?", [id])
            if(result.affectedRows === 0) {
        res.status(400).json({message: "Cita no encontrada"})
        
    } 
    res.json({success: true, data: result,  message: "Cita eliminada correctamente" });
    }catch (error) {
        res.status(500).json({error: "Error Del Servidor"})
    }
}

export const crearTurnos = async (req, res) => {
    try{
    const {paciente_id, doctor_id, fecha, hora, motivo, estado} = req.body
    if( !paciente_id || !doctor_id || !fecha || !hora || !motivo || !estado ) {
        return res.status(400).json({ succes: false, error: "Faltan Datos"})
    }
    const [rows] = await pool.query ("INSERT INTO citas (paciente_id, doctor_id, fecha, hora, motivo, estado) VALUES (?, ?, ?, ?, ?, ?)",
        [paciente_id, doctor_id, fecha, hora, motivo, estado]
    )
    res.json({success: true, data: {id: rows.insertId, paciente: paciente_id, doctor: doctor_id, fecha: fecha, hora: hora, motivo: motivo, estado: estado}})
    } catch (error) {
        res.status(500).json({error: "Error del servidor"})
    }
}


export const modificarCita = async (req, res) => {
    try {
        const { id } = req.params;
        const { paciente_id, doctor_id, fecha, hora, motivo, estado } = req.body;

        const [result] = await pool.query(
            "UPDATE citas SET paciente_id = ?, doctor_id = ?, fecha = ?, hora = ?, motivo = ?, estado = ? WHERE id = ?",
            [paciente_id, doctor_id, fecha, hora, motivo, estado, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Cita no encontrada" });
        }

        res.json({
            success: true,
            data: { id, paciente_id, doctor_id, fecha, hora, motivo, estado },
            message: "Cita actualizada correctamente",
        });
    } catch (error) {
        console.error("Error al modificar cita:", error);
        res.status(500).json({ success: false, error: "Error del servidor" });
    }
};

