# Paste

Pastes the contents of the clipboard to the current sheet.

## Syntax

expression.Paste(destination);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| destination | Optional | [ApiRange](../../ApiRange/ApiRange.md) | The cell range where the clipboard contents should be pasted. If this argument is omitted, the current selection is used. |

## Returns

This method doesn't return any data.

## Example

This example shows how to paste date from clipboard.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.Paste();
builder.SaveFile("xlsx", "GetRangeByNumber.xlsx");
builder.CloseFile();
```