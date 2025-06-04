// This example shows how to get a parent content control.

// How to get parent content control object.

// Get all dropdown elements of the first content control and display the tag of its parent.

let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let parentControl = contentControlList.GetParent();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Parent content control tag: " + parentControl.GetTag());
doc.AddElement(0, paragraph);
