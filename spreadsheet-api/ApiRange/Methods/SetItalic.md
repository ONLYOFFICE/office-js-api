# SetItalic

Sets the italic property to the text characters in the current cell or cell range.

## Syntax

```javascript
expression.SetItalic(isItalic);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | boolean |  | Specifies that the contents of the current cell / cell range are displayed italicized. |

## Returns

This method doesn't return any data.

## Example

This example sets the italic property to the text characters in the cell.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Italicized text");
worksheet.GetRange("A2").SetItalic(true);
worksheet.GetRange("A3").SetValue("Normal text");
```
