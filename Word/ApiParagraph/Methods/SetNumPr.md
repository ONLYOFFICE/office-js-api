# SetNumPr

Specifies that the current paragraph references a numbering definition instance in the current document.<br>Inherited From: [ApiParaPr#SetNumPr](../../ApiParaPr/Methods/SetNumPr.md)

## Syntax

expression.SetNumPr(oNumPr, nLvl?);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oNumPr | Required | [ApiNumbering](../../ApiNumbering/ApiNumbering.md) | Specifies a numbering definition. |
| nLvl | Optional | Number | Specifies a numbering level reference. If the current instance of the ApiParaPr class is direct formatting of a paragraph, then this parameter MUST BE specified. Otherwise, if the current instance of the ApiParaPr class is the part of ApiStyle properties, this parameter will be ignored. Default value is "0". |

## Returns

This method doesn't return any data.

## Example

This example specifies that the current paragraph references a numbering definition instance in the current document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
var oNumbering = oDocument.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("Default bullet lvl " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oParagraph.SetContextualSpacing(true);
	oDocument.Push(oParagraph);
}
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oMyStyle);
oParagraph.SetNumPr(oNumbering, 3);
oParagraph.AddText("This is a paragraph styled as level 4 of a bulleted list.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetNumPr.docx");
builder.CloseFile();
```