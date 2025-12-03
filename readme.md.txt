# Formulario de Contacto

Este proyecto es un formulario web que permite:

- Registrar datos de contacto: **Fecha, Nombre, Edad, Interés, Cápitas, Ciudad, Teléfono, Horario, Asesora y Observaciones**.
- Guardar múltiples registros en una lista visible en pantalla.
- Descargar los registros en un archivo **Excel (.xlsx)** con encabezados en **mayúsculas y negrita**.
- Generar un **código QR** con la URL pública del formulario (GitHub Pages).

---

## 🚀 Cómo usar

1. Abrir el formulario en el navegador.
2. Completar los campos y presionar **Agregar** para guardar un registro.
3. Presionar **Descargar** para exportar todos los registros a Excel y ver el QR.
4. Escanear el QR para acceder al formulario desde otro dispositivo.

---

## 📦 Librerías externas utilizadas

El proyecto utiliza las siguientes librerías externas (cargadas desde CDN):

- [xlsx](https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js) → generación de archivos Excel.
- [FileSaver.js](https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js) → descarga de archivos.
- [qrcodejs](https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js) → generación de códigos QR.

---

## 🌐 Publicación en GitHub Pages

El formulario se puede publicar en GitHub Pages:

1. Ir a **Settings** del repositorio.
2. En la sección **Pages**, seleccionar:
   - **Source**: `Deploy from a branch`.
   - **Branch**: `main` y carpeta `/root`.
3. Guardar los cambios.

La URL pública será:
