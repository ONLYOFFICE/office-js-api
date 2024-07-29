# GetName

Returns a type of the ApiName class.

## Syntax

expression.GetName();

`expression` - A variable that represents a [ApiName](../ApiName.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get a type of the ApiName class.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var oDefName = Api.GetDefName("numbers");
oWorksheet.GetRange("A3").SetValue("Name: " + oDefName.GetName());
```
