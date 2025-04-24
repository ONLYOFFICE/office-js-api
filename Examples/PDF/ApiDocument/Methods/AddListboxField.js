// This example adds listbox field to document.
let doc = Api.GetDocument();
let listboxField = doc.AddListboxField(0, [10, 10, 100, 70]);
listboxField.AddOption('Option 1');
listboxField.AddOption('Option 2');
listboxField.AddOption('Option 3');
