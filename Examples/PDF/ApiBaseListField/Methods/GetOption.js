// This example gets option from field with list of options.
let doc = Api.GetDocument();
let comboboxField = doc.AddComboboxField(0, [10, 10, 160, 30]);
comboboxField.AddOption('Option 1');
let option = comboboxField.GetOption(0);
comboboxField.SetValue('First options is: ' + option);