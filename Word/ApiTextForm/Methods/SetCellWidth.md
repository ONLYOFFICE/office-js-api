# SetCellWidth

Sets the cell width to the applied comb of characters.

## Syntax

expression.SetCellWidth(nCellWidth?);

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nCellWidth | Optional | [mm](../../../Enumerations/mm.md) | The cell width measured in millimeters. If this parameter is not specified or equal to 0 or less, then the width will be set automatically. Must be >= 1 and <= 558.8. Default value is "0". |

## Returns

Boolean

## Example

This example sets the cell width to the applied comb of characters.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.SetComb(true);
oTextForm.SetCellWidth(7);
builder.SaveFile("docx", "SetCellWidth.docx");
builder.CloseFile();
```