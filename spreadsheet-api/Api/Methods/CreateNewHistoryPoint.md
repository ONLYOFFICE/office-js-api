# CreateNewHistoryPoint

Creates a new history point.

## Syntax

```javascript
expression.CreateNewHistoryPoint();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example creates a new history point.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This is just a sample text.");
Api.CreateNewHistoryPoint();
worksheet.GetRange("A3").SetValue("New history point was just created.");
```
