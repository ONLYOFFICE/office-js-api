# IMCOSH

Returns the hyperbolic cosine of a complex number.

## Syntax

```javascript
expression.IMCOSH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the &lt;em&gt;x + yi&lt;/em&gt; or &lt;em&gt;x + yj&lt;/em&gt; form. |

## Returns

number

## Example

This example shows how to return the hyperbolic cosine of a complex number.

```javascript editor-xlsx
// How to get the hyperbolic cosine.

// Use a function to get the hyperbolic cosine of a complex number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMCOSH("-2+2.5i"));
```
