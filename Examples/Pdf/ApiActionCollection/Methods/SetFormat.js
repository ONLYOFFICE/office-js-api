// This example sets a Format action on a text field to format its value as currency.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let formatAction = Api.CreateJsAction("AFNumber_Format(2, 0, 0, 0, '$', true);");
let widgets = textField.GetAllWidgets();
let result = widgets[0].GetActions().SetFormat(formatAction);

console.log('Format action set: ' + result);
