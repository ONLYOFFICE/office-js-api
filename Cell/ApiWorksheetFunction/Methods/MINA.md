# MINA

Returns the smallest value in a set of values. Does not ignore logical values and text.

## Syntax

```javascript
expression.MINA(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| string \| boolean \| (number \| string \| boolean)[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 values (number, text, logical value) for which the smallest value will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers, logical values and text representations of numbers, names, ranges, or arrays. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let minA = func.MINA(23, 45, true, "text", 0.89);
worksheet.GetRange("C1").SetValue(minA);

```
