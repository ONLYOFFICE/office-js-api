// This example creates a chain of two actions: a JS alert followed by navigation to the next page.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let firstAction = Api.CreateJsAction("app.alert('Going to next page...');");
let secondAction = Api.CreateNamedAction("NextPage");
let result = firstAction.SetNext(secondAction);

let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(firstAction);

console.log('Next action set, class type: ' + result.GetClassType());
