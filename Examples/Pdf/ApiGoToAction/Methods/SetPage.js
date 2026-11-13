// This example creates a GoTo action and changes its destination page index.
let doc = Api.GetDocument();
doc.AddPage(1);
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "fit", null, [0, 0, 200, 300]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

let result = goToAction.SetPage(1);
console.log('Page set: ' + result);
console.log('Current page: ' + goToAction.GetPage());
