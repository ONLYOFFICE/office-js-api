# ScaleWidth

Scales the width of the figure using the specified coefficient.

## Syntax

expression.ScaleWidth(coefficient);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| coefficient | Required | number |  | The coefficient by which the figure width will be scaled. |

## Returns

boolean

## Example

This example scales the width of the figure using the specified coefficient.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
for (let i = 1; i < 4; i++ ){
	var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
	var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
	var oDrawing = Api.CreateShape("cube", 963295, 963295, oFill, oStroke);
	oParagraph.AddDrawing(oDrawing);
	oDrawing.ScaleWidth( i );
}
```
