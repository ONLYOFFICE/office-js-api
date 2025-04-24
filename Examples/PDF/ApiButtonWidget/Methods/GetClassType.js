// This example gets button widget object class type.
let doc = Api.GetDocument();
let buttonField = doc.AddImageField(0, [10, 10, 25, 25]);
let widgets = buttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());