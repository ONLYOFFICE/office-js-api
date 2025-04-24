// This example gets checkbox widget export (checked) value.
let doc = Api.GetDocument();
let radiobuttonField = doc.AddRadiobuttonField(0, [10, 10, 25, 25]);
let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetExportValue('Export value');
console.log('Export value is: ' + widgets[0].GetExportValue());