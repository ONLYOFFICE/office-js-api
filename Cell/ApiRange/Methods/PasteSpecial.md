# PasteSpecial

Merges the selected cell range into a single cell or a cell row.

## Syntax

expression.PasteSpecial(sPasteType, sPasteSpecialOperation, bSkipBlanks, bTranspose);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sPasteType | Required | [PasteType](../../../Enumerations/PasteType) | Paste option. |
| sPasteSpecialOperation | Optional | [PasteSpecialOperation](../../../Enumerations/PasteSpecialOperation) | The mathematical operation which will be applied to the copied data. |
| bSkipBlanks | Optional | Boolean | Specifies whether to avoid replacing values in the paste area when blank cells occur in the copy area. |
| bTranspose | Optional | Boolean | Specifies whether the pasted data will be transposed from rows to columns. |

## Returns

This method doesn't return any data.

## Example

This example pastes data from clipboard(if it possible) with options.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.setValue("test");
oWorksheet.GetRange("A1").Copy();
oWorksheet.GetRange("B1").PasteSpecial("xlPasteAll", "xlPasteSpecialOperationNone", false, false);
builder.SaveFile("xlsx", "SpeicialPaste.xlsx");
builder.CloseFile();
```