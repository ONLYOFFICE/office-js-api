// Identify the class type of a combobox field in a PDF.

// What is the class type of a combobox field object in a PDF?

// Retrieve the class type and show it as the field value in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetValue('Field type is: ' + comboboxField.GetClassType());