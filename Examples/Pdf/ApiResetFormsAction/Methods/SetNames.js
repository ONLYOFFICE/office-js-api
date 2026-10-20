// This example creates a reset forms action and changes the list of fields to reset.
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let field1 = Api.CreateTextField([10, 10, 160, 30]);
field1.SetPartialName("fieldA");
page.AddObject(field1);

let field2 = Api.CreateTextField([10, 40, 160, 60]);
field2.SetPartialName("fieldB");
page.AddObject(field2);

let buttonField = Api.CreateButtonField([10, 70, 160, 90]);
page.AddObject(buttonField);

let resetAction = Api.CreateResetFormsAction(false, ["fieldA"]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(resetAction);

resetAction.SetNames(["fieldA", "fieldB"]);
console.log('Updated field names: ' + resetAction.GetNames());
