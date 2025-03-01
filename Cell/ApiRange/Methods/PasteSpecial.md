# PasteSpecial

Pastes the Range object to the specified range using the special paste options.

## Syntax

```javascript
expression.PasteSpecial(sPasteType, sPasteSpecialOperation, bSkipBlanks, bTranspose);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPasteType | Optional | [PasteType](../../Enumeration/PasteType.md) | "xlPasteAll" | Paste option. |
| sPasteSpecialOperation | Optional | [PasteSpecialOperation](../../Enumeration/PasteSpecialOperation.md) | "xlPasteSpecialOperationNone" | The mathematical operation which will be applied to the copied data. |
| bSkipBlanks | Required | boolean |  | [bSkipBlanks=false] - Specifies whether to avoid replacing values in the paste area when blank cells occur in the copy area. |
| bTranspose | Required | boolean |  | [bTranspose=false] - Specifies whether the pasted data will be transposed from rows to columns. |

## Returns

This method doesn't return any data.

## Example

This example pastes data from theclipboard (if it is possible) with the specified options.

```javascript editor-xlsx
// How to paste the copied or cut data from the clipboard using the special paste options.

// Create a range, copy its value and paste it into another one with the specified properties.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("test");
oWorksheet.GetRange("A1").Copy();
oWorksheet.GetRange("B1").PasteSpecial("xlPasteAll", "xlPasteSpecialOperationNone", false, false);
```
