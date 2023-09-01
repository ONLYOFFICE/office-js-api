# CreateSchemeColor

Creates a complex color scheme selecting from one of the available schemes.

## Syntax

expression.CreateSchemeColor(sSchemeColorId);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sSchemeColorId | Required | [SchemeColorId](../../../Enumerations/SchemeColorId.md) | The color scheme identifier. |

## Returns

[ApiSchemeColor](../../ApiSchemeColor/ApiSchemeColor.md)

## Example

This example reates a complex color scheme selecting from one of the available schemes.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oSchemeColor = Api.CreateSchemeColor("dk1");
var oFill = Api.CreateSolidFill(oSchemeColor);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("curvedUpArrow", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);
builder.SaveFile("xlsx", "CreateSchemeColor.xlsx");
builder.CloseFile();
```