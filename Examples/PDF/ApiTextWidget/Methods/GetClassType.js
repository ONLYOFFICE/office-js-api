// This example gets text widget and displays it's type.
let doc = Api.GetDocument();
let comboboxField = doc.AddComboboxField(0, [10, 10, 160, 30]);
let widgets = comboboxField.GetAllWidgets();
comboboxField.SetValue(widgets[0].GetClassType());