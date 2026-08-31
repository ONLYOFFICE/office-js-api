// This example gets the MouseExit action from an action collection.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Mouse exit!');");
let widgets = buttonField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetMouseExit(jsAction);

let mouseExitAction = actions.GetMouseExit();
console.log('MouseExit action class type: ' + mouseExitAction.GetClassType());
