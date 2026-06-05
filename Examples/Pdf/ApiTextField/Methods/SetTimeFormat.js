// Display times in a consistent format like hours and minutes in a PDF.

// How do I show time input in a specific format in a PDF?

// Configure time display patterns for a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetTimeFormat("h:MM:ss tt");
textField.SetValue("8:45:30");
