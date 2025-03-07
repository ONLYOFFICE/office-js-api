# NOW

Returns the current date and time in the &lt;em&gt;MM/dd/yy hh:mm&lt;/em&gt; format.

## Syntax

```javascript
expression.NOW();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.NOW(); 

worksheet.GetRange("C1").SetValue(ans);

```
