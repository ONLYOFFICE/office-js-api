# SetTemplateType

Sets one of the existing predefined numbering templates.

## Syntax

expression.SetTemplateType(sType, sSymbol);

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "none" &#124;"bullet" &#124;"1)" &#124;"1." &#124;"I." &#124;"A." &#124;"a)" &#124;"a." &#124;"i." |  | The predefined numbering template. |
| sSymbol | Optional | string | "" | The symbol used for the list numbering. This parameter has the meaning only if the predefined numbering template is "bullet". |

## Returns

This method doesn't return any data.

## Example

This example sets one of the existing predefined numbering templates.

```javascript
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("numbered");
var oNumLvl = oNumbering.GetLevel(0);
oNumLvl.SetTemplateType("A.");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetNumbering(oNumLvl);
oParagraph.AddText("This is the first element of an A.-B.-C. numbered list");
oParagraph = Api.CreateParagraph();
oParagraph.SetNumbering(oNumLvl);
oParagraph.AddText("This is the second element of an A.-B.-C. numbered list");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.SetNumbering(oNumLvl);
oParagraph.AddText("This is the third element of an A.-B.-C. numbered list");
oDocument.Push(oParagraph);
```
