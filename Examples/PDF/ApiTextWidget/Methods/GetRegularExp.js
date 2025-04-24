// This example gets regular expression from text widget and displays it.
let doc = Api.GetDocument();
let comboboxField = doc.AddComboboxField(0, [10, 10, 160, 30]);
let widgets = comboboxField.GetAllWidgets();
widgets[0].SetRegularExp('\S+@\S+\.\S+');
console.log('Text widget reg exp is: "' + widgets[0].GetRegularExp() + '"');