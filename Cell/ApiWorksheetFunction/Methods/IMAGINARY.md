# IMAGINARY

Returns the imaginary coefficient of a complex number.

## Syntax

```javascript
expression.IMAGINARY(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the &lt;em&gt;x + yi&lt;/em&gt; or &lt;em&gt;x + yj&lt;/em&gt; form. |

## Returns

number

## Example

This example shows how to return the imaginary coefficient of a complex number.

```javascript editor-xlsx
// How to get the imaginary part of the complex number.

// Use a function to get an imaginary coefficient of the complex number. 

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMAGINARY("-2+2.5i"));
```
