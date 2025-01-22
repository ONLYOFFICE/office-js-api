// This example clears the list of values of combobox/listbox.
let doc = Api.GetDocument();
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
contentControlList.Clear();
doc.AddElement(0, Api.CreateParagraph().AddText("All items cleared from the list."));