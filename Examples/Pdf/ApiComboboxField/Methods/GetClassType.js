// Check the class type returned by a combobox field in a PDF document.

// How do I check what type a combobox field object is in a PDF document?

// Retrieve and output the class type string for a combobox field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetValue('Field type is: ' + comboboxField.GetClassType());