// This example gets color object type and displays it.
let doc = Api.GetDocument();
let color = Api.CreateRGBColor(255, 100, 0);
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetValue('Color object type is: "' + color.GetClassType() + '"');
let widgets = textField.GetAllWidgets();
widgets[0].SetBorderColor(color);

