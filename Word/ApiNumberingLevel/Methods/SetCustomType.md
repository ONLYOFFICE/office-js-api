# SetCustomType

Sets your own customized numbering type.

## Syntax

expression.SetCustomType(sType, sTextFormatString, sAlign);

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [NumberingCustomType](../../../Enumerations/NumberingCustomType.md) | The custom numbering type used for the current numbering definition. |
| sTextFormatString | Required | String | Any text in this parameter will be taken as literal text to be repeated in each instance of this numbering level, except for any use of the percent symbol (%) followed by a number, which will be used to indicate the one-based index of the number to be used at this level. Any number of a level higher than this level will be ignored. |
| sAlign | Required | [HorAlign](../../../Enumerations/HorAlign.md) | Type of justification applied to the text run in the current numbering level. |

## Returns

This method doesn't return any data.

## Example

This example sets your own customized numbering type.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("numbered");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var sFormatString = "";
	for (let nTempLvl = 1; nTempLvl <= (nLvl + 1); ++nTempLvl) sFormatString += "%" + nTempLvl + ".";
	oNumLvl.SetCustomType("lowerRoman", sFormatString, "left");
	oNumLvl.SetStart(nLvl + 1);
	oNumLvl.SetSuff("space");
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("Custom numbered lvl " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oParagraph.SetContextualSpacing(true);
	oDocument.Push(oParagraph);
}
builder.SaveFile("docx", "SetCustomType.docx");
builder.CloseFile();
```