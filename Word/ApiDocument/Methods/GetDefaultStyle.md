# GetDefaultStyle

Returns the default style parameters for the specified document element.

## Syntax

expression.GetDefaultStyle(sStyleType);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStyleType | Required | [StyleType](../../Enumeration/StyleType.md) |  | The document element which we want to get the style for. |

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

This example shows how to get the default style parameters for the specified document element.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oParaPr = oDocument.GetDefaultParaPr();
oParaPr.SetSpacingLine(276, "auto");
oParaPr.SetSpacingAfter(200);
var oNormalStyle = oDocument.GetDefaultStyle("paragraph");
oParaPr = oNormalStyle.GetParaPr();
oParaPr.SetSpacingLine(240, "auto");
oParaPr.SetJc("both");
oParagraph.AddText("This is just a text.");
```
