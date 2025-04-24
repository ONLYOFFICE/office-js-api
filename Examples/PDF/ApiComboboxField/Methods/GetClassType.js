// This example gets field type and display it.
let doc = Api.GetDocument();
let comboboxField = doc.AddComboboxField(0, [10, 10, 160, 30]);
comboboxField.SetValue('Field type is: ' + comboboxField.GetClassType());