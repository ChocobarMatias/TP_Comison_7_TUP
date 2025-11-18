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