# GetElement

Returns an element by its position in the document.

## Syntax

```javascript
expression.GetElement(nPos);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The element position that will be taken from the document. |

## Returns

[DocumentElement](../../Enumeration/DocumentElement.md)

## Example

This example shows how to get element.

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
var oBullet = Api.CreateNumbering("ArabicParenR", 1);
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the numbered paragraph.");
oParagraph = Api.CreateParagraph();
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the numbered paragraph.");
oDocContent.Push(oParagraph);
oSlide.AddObject(oShape);
```
