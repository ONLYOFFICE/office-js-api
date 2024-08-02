# GetFullName

Returns the full name of the currently opened file.

## Syntax

expression.GetFullName();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the full name of the currently opened file.

```javascript
var oWorksheet = Api.GetActiveSheet();
var sName = Api.GetFullName();
oWorksheet.GetRange("B1").SetValue("File name: " + sName);
```
