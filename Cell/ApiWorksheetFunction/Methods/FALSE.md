# FALSE

Returns the **false** logical value.

## Syntax

```javascript
expression.FALSE();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to return the false logical value.

```javascript editor-xlsx
// How to get false value.

// Use function to get a boolean false.

const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.FALSE(); //returns false, doesnt require arguments
oWorksheet.GetRange("C1").SetValue(ans);

```
