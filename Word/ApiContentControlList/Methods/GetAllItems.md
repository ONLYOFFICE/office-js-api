# GetAllItems

Returns a collection of items (the ApiContentControlListEntry objects) of the combo box / dropdown list content control.

## Syntax

```javascript
expression.GetAllItems();
```

`expression` - A variable that represents a [ApiContentControlList](../ApiContentControlList.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiContentControlListEntry[]](../../ApiContentControlListEntry/ApiContentControlListEntry.md)

## Example

This example shows how to get a collection of the ApiContentControlListEntry of a list.

```javascript editor-docx
let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let allItems = contentControlList.GetAllItems();
let paragraph = Api.CreateParagraph();
for (let i = 0; i < allItems.length; i++) {
    paragraph.AddText("Item " + (i + 1) + ": " + allItems[i].GetValue() + "\n");
}
doc.Push(paragraph);
```
