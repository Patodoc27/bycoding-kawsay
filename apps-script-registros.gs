// Kawsay · Registros de los estudiantes
// Pegar este código en Extensiones → Apps Script de una hoja de cálculo Google.
// Cada envío de la página agrega una fila en la pestaña "Registros".

function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('Registros') || ss.insertSheet('Registros');
  if (sh.getLastRow() === 0) {
    sh.appendRow(['Fecha y hora', 'Nombre', 'Grupo', 'Registro']);
    sh.getRange(1, 1, 1, 4).setFontWeight('bold');
    sh.setColumnWidth(4, 520);
  }
  var d = JSON.parse(e.postData.contents);
  sh.appendRow([d.fecha || '', d.quien || '', d.grupo || '', d.texto || '']);
  return ContentService.createTextOutput('ok');
}

// Opcional: abrir la URL /exec en el navegador devuelve esto (sirve para probar).
function doGet() {
  return ContentService.createTextOutput('Registros Kawsay funcionando.');
}
