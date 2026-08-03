// This example sets a Validate action on a text field to ensure its value is positive.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let validateAction = Api.CreateJsAction("if (event.value < 0) { app.alert('Value must be positive'); event.rc = false; }");
let widgets = textField.GetAllWidgets();
let result = widgets[0].GetActions().SetValidate(validateAction);

console.log('Validate action set: ' + result);
