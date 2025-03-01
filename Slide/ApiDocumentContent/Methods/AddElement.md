# AddElement

Adds a paragraph or a table or a blockLvl content control using its position in the document content.

## Syntax

```javascript
expression.AddElement(nPos, oElement);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The position where the current element will be added. |
| oElement | Required | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The document element which will be added at the current position. |

## Returns

boolean

## Example

This example adds a paragraph to presentation.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
oDocContent.RemoveAllElements();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
oDocContent.AddElement(oParagraph);
oDocContent.Push(oParagraph);
oSlide.AddObject(oShape);
```
