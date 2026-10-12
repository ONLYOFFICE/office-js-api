// Get field widget actions as JSON in a PDF.

// Useful for inspecting actions assigned to a widget.

// Read the actions JSON object from a field widget.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
let actionsJSON = widgets[0].GetActionsJSON();
console.log(JSON.stringify(actionsJSON));
