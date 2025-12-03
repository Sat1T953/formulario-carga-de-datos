# Formulario de Carga de Datos

Este proyecto permite registrar información de contactos, guardar múltiples entradas, exportarlas a Excel y compartir el formulario mediante un código QR.

---

## 🚀 Cómo usar

1. Abrir el formulario en el navegador desde la URL pública:  
   **https://sat1t953.github.io/formulario-carga-de-datos/**
2. Completar los campos requeridos:
   - Fecha (se carga automáticamente con el día de hoy).
   - Nombre.
   - Edad.
   - Observaciones.
3. Presionar **Agregar** para guardar un registro en la lista.
4. Presionar **Descargar** para exportar todos los registros a un archivo Excel (`registros.xlsx`) y generar el código QR.
5. Escanear el QR para acceder al formulario desde otro dispositivo.

---

## 📂 Archivos principales

- `index.html` → Página principal con el formulario.
- `style.css` → Estilos visuales del formulario.
- `script.js` → Lógica de registros, exportación a Excel y generación de QR.
- `README.md` → Este documento con instrucciones.

---

## 📦 Librerías externas utilizadas

- **xlsx** → Generación de archivos Excel.  
- **FileSaver.js** → Descarga de archivos en el navegador.  
- **qrcodejs** → Generación de códigos QR.

---

## 👥 Uso en equipos de asesores

- Cada asesor puede abrir la URL pública y cargar datos desde su dispositivo.  
- Los registros se exportan en un Excel con encabezados en mayúsculas y negrita.  
- El QR facilita el acceso rápido al formulario sin necesidad de escribir la URL.  

---

## 🛠 Mantenimiento

- Para actualizar el formulario, modificar los archivos `index.html`, `style.css` o `script.js` en la rama `main`.  
- Confirmar los cambios con **Commit changes** para que se reflejen automáticamente en GitHub Pages.  