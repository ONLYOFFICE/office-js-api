# GetAllNumberedParagraphs

Returns all numbered paragraphs from the current document.

## Syntax

expression.GetAllNumberedParagraphs();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiParagraph](../../ApiParagraph/ApiParagraph.md)>

## Example

This example shows how to get all numbered paragraphs from the current document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("numbered");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var sFormatString = "";
	for (let nTempLvl = 0; nTempLvl <= nLvl; ++nTempLvl) sFormatString += "%" + nTempLvl + ".";
	oNumLvl.SetCustomType("lowerRoman", sFormatString, "left");
	oNumLvl.SetStart(nLvl + 1);
	oNumLvl.SetSuff("space");
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("Custom numbered lvl " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oParagraph.SetContextualSpacing(true);
	oDocument.Push(oParagraph);
}
var aNumberedParagraphs = oDocument.GetAllNumberedParagraphs();
aNumberedParagraphs[0].SetBold(true);
builder.SaveFile("docx", "GetAllNumberedParagraphs.docx");
builder.CloseFile();
```