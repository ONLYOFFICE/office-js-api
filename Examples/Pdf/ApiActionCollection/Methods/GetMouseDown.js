// This example gets the MouseDown action from an action collection.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Mouse down!');");
let widgets = buttonField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetMouseDown(jsAction);

let mouseDownAction = actions.GetMouseDown();
console.log('MouseDown action class type: ' + mouseDownAction.GetClassType());
