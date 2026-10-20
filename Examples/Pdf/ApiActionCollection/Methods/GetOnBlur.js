// This example gets the OnBlur action from an action collection.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let jsAction = Api.CreateJsAction("app.alert('Field blurred!');");
let widgets = textField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetOnBlur(jsAction);

let onBlurAction = actions.GetOnBlur();
console.log('OnBlur action class type: ' + onBlurAction.GetClassType());
