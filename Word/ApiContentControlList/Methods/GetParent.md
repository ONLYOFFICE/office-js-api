# GetParent

Returns a parent of the combo box / dropdown list content control.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiContentControlList](../ApiContentControlList.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | [ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## Example

This example shows how to get a parent content control.

```javascript
let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let parentControl = contentControlList.GetParent();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Parent content control tag: " + parentControl.GetTag());
doc.AddElement(0, paragraph);

```
