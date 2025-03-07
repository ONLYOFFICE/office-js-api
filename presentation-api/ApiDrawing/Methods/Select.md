# Select

Selects the current graphic object.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example selects the current graphic object.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var aAllDrawings = oSlide.GetAllDrawings();
if(aAllDrawings.length > 0)
{
	var oDrawing = aAllDrawings[0];
	oDrawing.Select();
}
```
