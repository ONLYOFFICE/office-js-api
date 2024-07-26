# ScaleHeight

Scales the height of the figure using the specified coefficient.

## Syntax

expression.ScaleHeight(coefficient);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| coefficient | Required | number |  | The coefficient by which the figure height will be scaled. |

## Returns

boolean

## Example

This example scales the height of the figure using the specified coefficient.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
for (let i = 3; i > 0; i-- ){
	var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
	var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
	var oDrawing = Api.CreateShape("cube", 3212465, 963295, oFill, oStroke);
	oParagraph.AddDrawing(oDrawing);
	oDrawing.ScaleHeight( i );
}
```
