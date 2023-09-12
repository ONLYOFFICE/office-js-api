# AddNumberedCrossRef

Adds a numbered cross-reference to the current paragraph.
<br>Please note that this paragraph must be in the document.

## Syntax

expression.AddNumberedCrossRef(sRefType, oParaTo, bLink?, bAboveBelow?, sSepWith?);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sRefType | Required | [numberedRefTo](../../../Enumerations/numberedRefTo.md) | The text or numeric value of a numbered reference you want to insert. |
| oParaTo | Required | [ApiParagraph](../ApiParagraph.md) | The numbered paragraph to be referred to (must be in the document). |
| bLink | Optional | Boolean | Specifies if the reference will be inserted as a hyperlink. Default value is "true". |
| bAboveBelow | Optional | Boolean | Specifies if the above/below words indicating the position of the reference should be included (don't used with the "text" and "aboveBelow" sRefType). Default value is "false". |
| sSepWith | Optional | String | A number separator (used only with the "fullCtxParaNum" sRefType). Default value is "". |

## Returns

Boolean

## Example

This example adds a numbered cross-reference to the paragraph.

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
oParagraph = Api.CreateParagraph();
oParagraph.AddText("An example of the customized numbering type can be found in the paragraph № ");
oDocument.Push(oParagraph);
oParagraph.AddNumberedCrossRef("paraNum", aNumberedParagraphs[1], true, true);
builder.SaveFile("docx", "AddNumberedCrossRef.docx");
builder.CloseFile();
```