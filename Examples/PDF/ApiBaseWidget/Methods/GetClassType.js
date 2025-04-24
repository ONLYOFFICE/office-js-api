// This example gets field widget and display it's type.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
let widgets = textField.GetAllWidgets();
textField.SetValue(widgets[0].GetClassType());
