# Clear

Clears a list of values of the combo box / dropdown list content control.

## Syntax

```javascript
expression.Clear();
```

`expression` - A variable that represents a [ApiContentControlList](../ApiContentControlList.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example clears the list of values of combobox/listbox.

```javascript
let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
contentControlList.Clear();
doc.AddElement(0, Api.CreateParagraph().AddText("All items cleared from the list."));
```
