// This example sets placeholder for text widget.
let doc = Api.GetDocument();
let comboboxField = doc.AddComboboxField(0, [10, 10, 160, 30]);
let widgets = comboboxField.GetAllWidgets();
widgets[0].SetPlaceholder('Your text here');