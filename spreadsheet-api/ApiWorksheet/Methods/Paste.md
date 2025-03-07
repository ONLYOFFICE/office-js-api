# Paste

Pastes the contents of the clipboard to the current sheet.

## Syntax

```javascript
expression.Paste(destination);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| destination | Optional | [ApiRange](../../ApiRange/ApiRange.md) |  | The cell range where the clipboard contents should be pasted. If this argument is omitted, the current selection is used. |

## Returns

This method doesn't return any data.

## Example

This example shows how to paste date from clipboard.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.Paste();
```
