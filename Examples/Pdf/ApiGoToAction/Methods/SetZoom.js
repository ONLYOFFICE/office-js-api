// This example creates a GoTo action with xyz type and changes its zoom level to 150%.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "xyz", 1, [0, 0, 200, 300]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

let result = goToAction.SetZoom(1.5);
console.log('Zoom set: ' + result);
console.log('Current zoom: ' + goToAction.GetZoom());
