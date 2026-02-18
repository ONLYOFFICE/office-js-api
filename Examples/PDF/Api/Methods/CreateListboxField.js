// How to create and add a listbox field to document.
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let listboxField = Api.CreateListboxField([10, 10, 100, 70]);
page.AddObject(listboxField);
listboxField.AddOption('Option 1');
listboxField.AddOption('Option 2');
listboxField.AddOption('Option 3');