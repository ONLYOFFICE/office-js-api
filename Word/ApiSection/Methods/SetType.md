# SetType

Specifies a type of the current section. The section type defines how the contents of the current 
section are placed relative to the previous section.

## Syntax

expression.SetType(sType);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [SectionBreakType](../../Enumeration/SectionBreakType.md) |  | The section break type. |

## Returns

This method doesn't return any data.

## Example

This example sets section break type "continuous".

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSection = oDocument.CreateSection(oParagraph);
oParagraph.AddText("This is section #1 of the document. ");
oSection = oDocument.GetFinalSection();
oSection.SetType("continuous");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is section #2 and we set 'Continuous' type to it. ");
oParagraph.AddText("As you can see, the section is not on a new page. ");
oParagraph.AddText("If this section had some other type (nextPage, oddPage, evenPage), it would start a new page.");
oDocument.Push(oParagraph);
```
