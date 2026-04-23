// Display time with hour, minute, and second in a PDF.

// Can I control the time display format in a PDF?

// Show times using a 12-hour or 24-hour format in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetTimeFormat("12HR:MM:SS");
comboboxField.SetValue("8:45:30");