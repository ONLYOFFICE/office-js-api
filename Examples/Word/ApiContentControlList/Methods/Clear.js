// This example clears the list of values of combobox/listbox.
let document = Api.GetDocument();
let contentControls = document.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
contentControlList.Clear();
document.AddElement(0, Api.CreateParagraph().AddText("All items cleared from the list."));