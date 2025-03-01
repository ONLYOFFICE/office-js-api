# Save

Saves changes to the specified document.

## Syntax

```javascript
expression.Save();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example saves changes to the specified document.

```javascript editor-xlsx
// How to save changes of the spreadsheets.

// Save all applied changes.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
Api.Save();
```
