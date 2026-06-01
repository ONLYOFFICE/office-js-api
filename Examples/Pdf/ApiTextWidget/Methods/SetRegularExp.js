// Define what pattern of text is allowed in a text field in a PDF.

// How do I set a pattern that text must match in a text field in a PDF?

// Restrict text input to a specific format in a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
widgets[0].SetRegularExp('\S+@\S+\.\S+');