// This example gets a class type and inserts it into the document.
let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let dropDownList = contentControls[0].GetDropdownList();
let classType = dropDownList.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type of the content control list: " + classType);
doc.Push(paragraph);