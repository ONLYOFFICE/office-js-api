// How to create and add a button field to document.
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLabel("Click me");
