// This example creates a JavaScript action and assigns it to a button widget.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Button clicked!');");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(jsAction);

console.log('JS action script: ' + jsAction.GetScript());
