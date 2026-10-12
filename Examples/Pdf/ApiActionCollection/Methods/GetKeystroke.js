// This example gets the Keystroke action from a text field's action collection.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let keystrokeAction = Api.CreateJsAction("AFNumber_Keystroke(2, 0, 0, 0, '$', true);");
let widgets = textField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetKeystroke(keystrokeAction);

let action = actions.GetKeystroke();
console.log('Keystroke action script: ' + action.GetScript());
