# FALSE

Returns the -**false** logical value.

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



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.FALSE(); //returns false, doesnt require arguments
worksheet.GetRange("C1").SetValue(ans);

```
