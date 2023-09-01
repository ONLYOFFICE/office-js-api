# GetFullName

Returns the full name of the currently opened file.

## Syntax

expression.GetFullName();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the full name of the currently opened file.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var sName = Api.GetFullName();
oWorksheet.GetRange("B1").SetValue("File name: " + sName);
builder.SaveFile("xlsx", "GetFullName.xlsx");
builder.CloseFile();
```