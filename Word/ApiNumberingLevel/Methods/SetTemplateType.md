# SetTemplateType

Sets one of the existing predefined numbering templates.

## Syntax

expression.SetTemplateType(sType, sSymbol?);

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [NumberingTemplateType](../../../Enumerations/NumberingTemplateType.md) | The predefined numbering template. |
| sSymbol | Optional | String | The symbol used for the list numbering. This parameter has the meaning only if the predefined numbering template is "bullet". Default value is "". |

## Returns

This method doesn't return any data.

## Example

This example sets one of the existing predefined numbering templates.

```javascript
builder.CreateFile("docx");
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
builder.SaveFile("docx", "SetTemplateType.docx");
builder.CloseFile();
```