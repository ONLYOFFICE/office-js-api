// This example gets checkbox widget object class type.
let doc = Api.GetDocument();
let radiobuttonField = doc.AddRadiobuttonField(0, [10, 10, 25, 25]);
let widgets = radiobuttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());