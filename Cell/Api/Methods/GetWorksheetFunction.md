# GetWorksheetFunction

Returns the ApiWorksheetFunction object.

## Syntax

```javascript
expression.GetWorksheetFunction();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWorksheetFunction](../../ApiWorksheetFunction/ApiWorksheetFunction.md)

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ASC("text"));
```
