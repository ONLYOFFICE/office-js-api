// This example gets the Validate action from a text field's action collection.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let validateAction = Api.CreateJsAction("if (event.value < 0) { app.alert('Value must be positive'); event.rc = false; }");
let widgets = textField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetValidate(validateAction);

let action = actions.GetValidate();
console.log('Validate action script: ' + action.GetScript());
