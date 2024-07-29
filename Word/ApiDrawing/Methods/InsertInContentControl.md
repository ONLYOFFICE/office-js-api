# InsertInContentControl

Wraps the graphic object with a rich text content control.

## Syntax

expression.InsertInContentControl(nType);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nType | Required | number |  | Defines if this method returns the ApiBlockLvlSdt (nType === 1) or ApiDrawing (any value except 1) object. |

## Returns

ApiDrawing, ApiBlockLvlSdt

## Example

This example wraps the graphic object with a rich text content control.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This graphic object was wrapped in content control");
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oDrawing.InsertInContentControl(1);
```
