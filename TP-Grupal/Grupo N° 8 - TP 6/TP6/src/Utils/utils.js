

export const db = {
  asistentes: [
    { id: 1, nombre: "Juan", apellido: "Pérez", fechaNac: '30-10-2001' },
    { id: 2, nombre: "Lucía", apellido: "Gómez", fechaNac: '20-01-1999' },
    { id: 3, nombre: "Carlos", apellido: "Ruiz", fechaNac: '15-03-2004' }
  ],
  eventos: [
    { id: 1, nombre: "Feria Del Condado", fecha: "21-11-2025", lugar: "Parque 9 De Julio", cupo: 10, artistas: [], asistentes: [] },
    { id: 2, nombre: "La Expo", fecha: "22-12-2025", lugar: "Laprida y Corrientes", cupo: 20, artistas: [], asistentes: [] }
  ],
    artistas: [
    { id: 1, nombre: "Miguel", apellido: "Martin",nombreArt: "Gordillo",dni: 23123456 ,fechaNac: '30-10-1989' },
    { id: 2, nombre: "Maria", apellido: "Becerra",nombreArt: "La Nena Argentina",dni: 24627416 ,fechaNac: '15-04-1988' },
    { id: 3, nombre: "Mauro", apellido: "Monzon",nombreArt: "Lit-Killa",dni: 2234564 ,fechaNac: '12-12-1985' },
  ],
    usuarios: [
    { id: 1, email: "Usuario@gmail.com", contrasenia: "123456", rol: "admin" },
  ],
};

// Funciones para "consultar" la base
export function getAll(tabla) {
  return db[tabla] || [];
}

export function getById(tabla, id) {
  return db[tabla]?.find(item => item.id === id)  || null;
}

export function addItem(tabla, nuevo) {
  db[tabla].push({ id: Date.now(), ...nuevo });
}

export function deleteById(tabla, id) {
  db[tabla] = db[tabla].filter(item => item.id !== id);
}


//  Agregar artista a un evento
export function agregarArtistaAEvento(idEvento, idArtista) {
  const evento = db.eventos.find(e => e.id === idEvento);
  const artista = db.artistas.find(a => a.id === idArtista);

  if (!evento) {
    console.error(" Evento no encontrado");
    return;
  }
  if (!artista) {
    console.error(" Artista no encontrado");
    return;
  }

  const yaExiste = evento.artistas.some(a => a.id === idArtista);
  if (yaExiste) {
    console.warn(" El artista ya está asociado a este evento");
    return;
  }

  evento.artistas.push(artista);
  console.log(`Artista ${artista.nombreArt} agregado a ${evento.nombre}`);
}

// Agregar asistente a un evento
export function agregarAsistenteAEvento(idEvento, idAsistente) {
  const evento = db.eventos.find(e => e.id === idEvento);
  const asistente = db.asistentes.find(a => a.id === idAsistente);

  if (!evento) {
    console.error(" Evento no encontrado");
    return;
  }
  if (!asistente) {
    console.error(" Asistente no encontrado");
    return;
  }

  // Controlar cupo
  if (evento.asistentes.length >= evento.cupo) {
    console.warn(" No hay más cupos disponibles en este evento");
    return;
  }

  const yaExiste = evento.asistentes.some(a => a.id === idAsistente);
  if (yaExiste) {
    console.warn(" El asistente ya está registrado en este evento");
    return;
  }

  evento.asistentes.push(asistente);
  console.log(` Asistente ${asistente.nombre} agregado a ${evento.nombre}`);
}

//  Mostrar detalle de un evento
export function mostrarEvento(idEvento) {
  const evento = db.eventos.find(e => e.id === idEvento);
  if (!evento) {
    console.error(" Evento no encontrado");
    return;
  }

  console.log(` ${evento.nombre} (${evento.lugar})`);
  console.log(` Artistas (${evento.artistas.length}):`);
  evento.artistas.forEach(a => console.log(` - ${a.nombreArt}`));

  console.log(`Asistentes (${evento.asistentes.length}/${evento.cupo}):`);
  evento.asistentes.forEach(a => console.log(` - ${a.nombre} ${a.apellido}`));
}

export function getUsuarioPorEmail(email) {
  if (!email) {
    console.error(" Debes ingresar un email válido");
    return null;
  }

  const usuario = db.usuarios.find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );

  if (!usuario) {
    console.warn(" Usuario no encontrado");
    return null;
  }

  return usuario;
}