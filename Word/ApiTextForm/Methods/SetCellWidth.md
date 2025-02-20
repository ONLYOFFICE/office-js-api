# SetCellWidth

Sets the cell width to the applied comb of characters.

## Syntax

```javascript
expression.SetCellWidth(nCellWidth);
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCellWidth | Optional | [mm](../../Enumeration/mm.md) | false | The cell width measured in millimeters. If this parameter is not specified or equal to 0 or less, then the width will be set automatically. Must be &gt;= 1 and &lt;= 558.8. |

## Returns

boolean

## Example

This example sets the cell width to the applied comb of characters.

```javascript editor-docx
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetComb(true);
textForm.SetCellWidth(7);
```
