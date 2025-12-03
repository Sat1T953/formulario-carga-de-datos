// Establecer la fecha actual por defecto en el campo "fecha"
document.addEventListener("DOMContentLoaded", () => {
  const hoy = new Date();
  const yyyy = hoy.getFullYear();
  const mm = String(hoy.getMonth() + 1).padStart(2, '0');
  const dd = String(hoy.getDate()).padStart(2, '0');
  document.getElementById("fecha").value = `${yyyy}-${mm}-${dd}`;
});

const registros = [];
const lista = document.getElementById("lista");

// Agregar registro
document.getElementById("agregar").addEventListener("click", () => {
  const registro = {
    Fecha: document.getElementById("fecha").value,
    Nombre: document.getElementById("nombre").value,
    Edad: document.getElementById("edad").value,
    Interes: document.getElementById("interes").value,
    Capitas: parseInt(document.getElementById("capitas").value, 10),
    Ciudad: document.getElementById("ciudad").value,
    Telefono: document.getElementById("telefono").value,
    Horario: document.getElementById("horario").value,
    Asesora: document.getElementById("asesora").value,
    Observaciones: document.getElementById("observaciones").value
  };
  registros.push(registro);

  const item = document.createElement("li");
  item.textContent = `${registro.Fecha} - ${registro.Nombre} - ${registro.Edad} años - ${registro.Interes} - Cápitas: ${registro.Capitas} - ${registro.Ciudad} - ${registro.Telefono} - ${registro.Horario} - ${registro.Asesora} - Obs: ${registro.Observaciones}`;
  lista.appendChild(item);

  // Limpiar formulario automáticamente
  document.getElementById("formulario").reset();

  // Volver a poner la fecha del día actual después de limpiar
  const hoy = new Date();
  const yyyy = hoy.getFullYear();
  const mm = String(hoy.getMonth() + 1).padStart(2, '0');
  const dd = String(hoy.getDate()).padStart(2, '0');
  document.getElementById("fecha").value = `${yyyy}-${mm}-${dd}`;
});

// Descargar como Excel y generar QR
document.getElementById("descargar").addEventListener("click", () => {
  if (registros.length === 0) {
    alert("No hay registros para exportar.");
    return;
  }

  const ws = XLSX.utils.json_to_sheet(registros);

  // Encabezados en mayúsculas y negrita
  const encabezados = Object.keys(registros[0]);
  encabezados.forEach((key, i) => {
    const celda = XLSX.utils.encode_cell({ r: 0, c: i });
    if (!ws[celda]) return;
    ws[celda].v = key.toUpperCase(); // Mayúsculas
    ws[celda].s = { font: { bold: true } }; // Negrita
  });

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "REGISTROS");
  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array", cellStyles: true });
  saveAs(new Blob([wbout], { type: "application/octet-stream"