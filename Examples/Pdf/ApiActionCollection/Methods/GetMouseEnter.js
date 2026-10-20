// This example gets the MouseEnter action from an action collection.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Mouse enter!');");
let widgets = buttonField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetMouseEnter(jsAction);

let mouseEnterAction = actions.GetMouseEnter();
console.log('MouseEnter action class type: ' + mouseEnterAction.GetClassType());
