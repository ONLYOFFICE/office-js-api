// This example creates a reset forms action and assigns it to a button widget.
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 30]);
textField.SetPartialName("myTextField");
page.AddObject(textField);

let buttonField = Api.CreateButtonField([10, 40, 160, 60]);
page.AddObject(buttonField);

let resetAction = Api.CreateResetFormsAction(false, ["myTextField"]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(resetAction);

console.log('Reset action class type: ' + resetAction.GetClassType());
