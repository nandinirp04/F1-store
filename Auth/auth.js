function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;
  sheet.appendRow([new Date(), data.name, data.email, data.password]);
  return ContentService.createTextOutput("Success");
}
