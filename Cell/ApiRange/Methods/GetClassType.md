# GetClassType

Returns a type of the ApiRange class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"range"

## Example

This example gets a class type and inserts it into the table.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is just a sample text in the cell A1.");
var sClassType = oRange.GetClassType();
oWorksheet.GetRange('A3').SetValue("Class type: " + sClassType);
```
