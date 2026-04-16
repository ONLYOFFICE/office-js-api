// Find out the class type of a combobox field object in a PDF document.

// How can I get the class type of a combobox field in a PDF document?

// Get the class type of a combobox field and display it in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetValue('Field type is: ' + comboboxField.GetClassType());