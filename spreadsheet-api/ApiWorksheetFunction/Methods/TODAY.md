# TODAY

Returns the current date in the &lt;em&gt;MM/dd/yy&lt;/em&gt; format.

## Syntax

```javascript
expression.TODAY();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.TODAY());
```
