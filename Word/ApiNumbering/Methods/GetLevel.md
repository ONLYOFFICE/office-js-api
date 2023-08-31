# GetLevel

Returns the specified level of the current numbering.

## Syntax

expression.GetLevel(nLevel);

`expression` - A variable that represents a [ApiNumbering](../ApiNumbering.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nLevel | Required | number | The numbering level index. This value MUST BE from 0 to 8. |

## Returns

[ApiNumberingLevel](../../ApiNumberingLevel/ApiNumberingLevel.md)

## Example

This example shows how to get the specified level of the numbering.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("Default bullet lvl " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oParagraph.SetContextualSpacing(true);
	oDocument.Push(oParagraph);
}
builder.SaveFile("docx", "GetLevel.docx");
builder.CloseFile();
```