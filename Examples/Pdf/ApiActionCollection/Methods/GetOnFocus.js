// This example gets the OnFocus action from an action collection.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let jsAction = Api.CreateJsAction("app.alert('Field focused!');");
let widgets = textField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetOnFocus(jsAction);

let onFocusAction = actions.GetOnFocus();
console.log('OnFocus action class type: ' + onFocusAction.GetClassType());
