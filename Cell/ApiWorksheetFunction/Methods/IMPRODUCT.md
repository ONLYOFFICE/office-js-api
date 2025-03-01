# IMPRODUCT

Returns the product of the specified complex numbers.

## Syntax

```javascript
expression.IMPRODUCT(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | Up to 255 complex numbers expressed in the &lt;em&gt;x + yi&lt;/em&gt; or &lt;em&gt;x + yj&lt;/em&gt; form. |

## Returns

number

## Example

This example shows how to return the product of the specified complex numbers.

```javascript editor-xlsx
// How to get the result from multiplication of a complex number.

// Use a function to get the result from the product.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMPRODUCT("-2+2.5i", "0.1+1.5j", "1+3i"));
```
