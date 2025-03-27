# NA

Returns the &lt;em&gt;#N/A&lt;/em&gt; error value which means "no value is available".

## Syntax

```javascript
expression.NA();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet(); 
let func = Api.GetWorksheetFunction();
let result = func.NA();
worksheet.GetRange("C3").SetValue(result);

```
