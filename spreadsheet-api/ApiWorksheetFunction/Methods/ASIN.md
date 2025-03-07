# ASIN

Returns the arcsine of a number in radians, in the range from &lt;em&gt;-Pi/2&lt;/em&gt; to &lt;em&gt;Pi/2&lt;/em&gt;.

## Syntax

```javascript
expression.ASIN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle sine. It must be from -1 to 1. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ASIN(0.25));
```
