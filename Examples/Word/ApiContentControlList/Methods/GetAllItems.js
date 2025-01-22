// This example shows how to get a collection of the ApiContentControlListEntry of a list.
let doc = Api.GetDocument();
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let allItems = contentControlList.GetAllItems();
let paragraph = Api.CreateParagraph();
for (let i = 0; i < allItems.length; i++) {
    paragraph.AddText("Item " + (i + 1) + ": " + allItems[i].GetDisplayText() + "\n");
}
doc.AddElement(0, paragraph);