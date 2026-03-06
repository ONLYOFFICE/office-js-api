// This example gets placeholder from text widget and displays it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
widgets[0].SetPlaceholder('Your text here');
console.log('Text widget placeholder is: "' + widgets[0].GetPlaceholder() + '"');