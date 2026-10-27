// This example creates a reset forms action and checks whether all fields except listed will be reset.
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

// Reset all fields EXCEPT fieldB
let resetAction = Api.CreateResetFormsAction(true, ["fieldB"]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(resetAction);

console.log('Is all except: ' + resetAction.IsAllExcept());
