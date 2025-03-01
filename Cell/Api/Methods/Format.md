# Format

Returns a class formatted according to the instructions contained in the format expression.

## Syntax

```javascript
expression.Format(expression, format);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| expression | Required | string |  | Any valid expression. |
| format | Optional | string |  | A valid named or user-defined format expression. |

## Returns

string

## Example

This example shows how to get a class formatted according to the instructions contained in the format expression.

```javascript editor-xlsx
// How to set a format for a cell or a range using a format expression.

// Change a format of a range using an expression.

var oWorksheet = Api.GetActiveSheet();
var oFormat = Api.Format("123456", "$#,##0");
oWorksheet.GetRange("A1").SetValue(oFormat);
```
