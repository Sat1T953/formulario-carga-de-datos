// Inicializar fecha en hoy
document.addEventListener("DOMContentLoaded", function () {
  const fechaInput = document.getElementById("fecha");
  if (fechaInput) {
    const hoy = new Date().toISOString().split("T")[0];
    fechaInput.value = hoy;
  }
});

// Array para guardar registros
let registros = [];

// Función para agregar registro
function agregarRegistro() {
  const fecha = document.getElementById("fecha").value;
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const observaciones = document.getElementById("observaciones").value;

  const registro = { Fecha: fecha, Nombre: nombre, Edad: edad, Observaciones: observaciones };
  registros.push(registro);

  mostrarRegistros();
}

// Mostrar registros en lista
function mostrarRegistros() {
  const lista = document.getElementById("listaRegistros");
  lista.innerHTML = "";
  registros.forEach(r => {
    const li = document.createElement("li");
    li.textContent = `${r.Fecha} - ${r.Nombre} (${r.Edad}) - ${r.Observaciones}`;
    lista.appendChild(li);
  });
}

// Descargar registros en Excel
function descargarExcel() {
  const ws = XLSX.utils.json_to_sheet(registros);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Registros");
  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  saveAs(new Blob([wbout], { type: "application/octet-stream" }), "registros.xlsx");

  // Generar QR
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: "https://sat1t953.github.io/formulario-carga-de-datos/",
    width: 128,
    height: 128
  });
}

// Eventos
document.getElementById("btnAgregar").addEventListener("click", agregarRegistro);
document.getElementById("btnDescargar").addEventListener("click", descargarExcel);