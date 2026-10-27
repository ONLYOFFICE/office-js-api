// This example sets a JavaScript action to fire when a text field receives focus.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let jsAction = Api.CreateJsAction("app.alert('Field focused!');");
let widgets = textField.GetAllWidgets();
let result = widgets[0].GetActions().SetOnFocus(jsAction);

console.log('OnFocus set: ' + result);
