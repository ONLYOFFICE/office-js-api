// This example sets a Keystroke action on a text field to validate input as a number.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let keystrokeAction = Api.CreateJsAction("AFNumber_Keystroke(2, 0, 0, 0, '$', true);");
let widgets = textField.GetAllWidgets();
let result = widgets[0].GetActions().SetKeystroke(keystrokeAction);

console.log('Keystroke action set: ' + result);
