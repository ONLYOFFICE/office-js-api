# RemoveAllElements

Removes all the elements from the current document or from the current document element.
💡 When all elements are removed, a new empty paragraph is automatically created. If you want to add
content to this paragraph, use the &#123;@link ApiDocumentContent#GetElement&#125; method.

## Syntax

```javascript
expression.RemoveAllElements();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example shows how to remove all elements from a shape.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is just a sample paragraph.");
oDocContent.RemoveAllElements();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
oDocContent.Push(oParagraph);
oSlide.AddObject(oShape);
```
