# Add

Adds a new value to the combo box / dropdown list content control.

## Syntax

```javascript
expression.Add(sText, sValue, nIndex);
```

`expression` - A variable that represents a [ApiContentControlList](../ApiContentControlList.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The display text for the list item. |
| sValue | Optional | string | sText | The list item value. |
| nIndex | Optional | number | this.GetElementsCount() | A position where a new value will be added. |

## Returns

boolean

## Example



```javascript
let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
contentControlList.Add("Item3_D", "Item3_V", 2);
doc.AddElement(0, contentControlList);
```
