# CreateSchemeColor

Creates a complex color scheme selecting from one of the available schemes.

## Syntax

```javascript
expression.CreateSchemeColor(schemeColorId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| schemeColorId | Required | [SchemeColorId](../../Enumeration/SchemeColorId.md) |  | The color scheme identifier. |

## Returns

[ApiSchemeColor](../../ApiSchemeColor/ApiSchemeColor.md)

## Example

This example shows how to create a scheme color with the 'dk1' identifier.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oSchemeColor = Api.CreateSchemeColor("dk1");
var oFill = Api.CreateSolidFill(oSchemeColor);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("curvedUpArrow", 300 * 36000, 130 * 36000, oFill, oStroke);
oSlide.AddObject(oDrawing);
oDrawing.SetPosition(608400, 1267200);
```
