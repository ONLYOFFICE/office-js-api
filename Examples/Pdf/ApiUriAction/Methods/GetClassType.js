// This example creates a URI action and gets its class type.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let uriAction = Api.CreateUriAction("https://www.onlyoffice.com");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(uriAction);

console.log('URI action class type: ' + uriAction.GetClassType());
