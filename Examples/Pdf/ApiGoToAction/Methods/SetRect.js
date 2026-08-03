// This example creates a GoTo action and changes its destination rectangle.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "fitR", null, [0, 0, 200, 200]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

let result = goToAction.SetRect([50, 50, 250, 300]);
console.log('Rect set: ' + result);
