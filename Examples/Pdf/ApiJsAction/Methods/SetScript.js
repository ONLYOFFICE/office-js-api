// This example creates a JavaScript action and changes its script.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Hello World!');");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(jsAction);

jsAction.SetScript("app.alert('Script updated!');");
console.log('Updated script: ' + jsAction.GetScript());
