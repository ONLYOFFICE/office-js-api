// This example sets a JavaScript action to fire on MouseUp of a button widget.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Mouse up!');");
let widgets = buttonField.GetAllWidgets();
let result = widgets[0].GetActions().SetMouseUp(jsAction);

console.log('MouseUp set: ' + result);
