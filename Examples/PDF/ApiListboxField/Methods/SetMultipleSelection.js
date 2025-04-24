// This example sets multiple selection for listbox field.
let doc = Api.GetDocument();
let listboxField = doc.AddListboxField(0, [10, 10, 160, 100]);
listboxField.AddOption('Option 1');
listboxField.AddOption('Option 2');
listboxField.AddOption('Option 3');
listboxField.AddOption('Option 4');
listboxField.SetMultipleSelection(true);
listboxField.SetValueIndexes([0, 3]);