// Find out the class type of a listbox field object in a PDF document.

// How can I get the class type of a listbox field in a PDF document?

// Get the class type of a listbox field and display it in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let listboxField = Api.CreateListboxField([10, 10, 160, 100]);
page.AddObject(listboxField);

listboxField.AddOption('Field type is: ' + listboxField.GetClassType());
listboxField.SetValueIndexes([0]);