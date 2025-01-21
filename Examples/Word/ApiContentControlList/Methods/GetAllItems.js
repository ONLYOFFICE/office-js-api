// This example shows how to get a collection of the ApiContentControlListEntry of a list.
let document = Api.GetDocument();
let contentControls = document.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let allItems = contentControlList.GetAllItems();
let paragraph = Api.CreateParagraph();
for (let i = 0; i < allItems.length; i++) {
    paragraph.AddText("Item " + (i + 1) + ": " + allItems[i].GetDisplayText() + "\n");
}
document.AddElement(0, paragraph);