// Get regular expression from text widget and display it in a PDF document.

// How can I get the regular exp using a text widget in a PDF document?

// Get the regular exp for a text widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
widgets[0].SetRegularExp('\S+@\S+\.\S+');
console.log('Text widget reg exp is: "' + widgets[0].GetRegularExp() + '"');