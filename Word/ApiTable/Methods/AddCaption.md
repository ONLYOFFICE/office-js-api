# AddCaption

Adds a caption paragraph after (or before) the current table.
<br>Please note that the current table must be in the document (not in the footer/header). And if the current table is placed in a shape, then a caption is added after (or before) the parent shape.

## Syntax

expression.AddCaption(sAdditional, sLabel?, ?bExludeLabel?, sNumberingFormat?, bBefore?, nHeadingLvl?, sCaptionSep?);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAdditional | Required | String | Description |
| sLabel | Optional | [CaptionLabel](../../../Enumerations/CaptionLabel.md) | String | Description |
| bExludeLabel | Optional | Boolean | Description |
| sNumberingFormat | Optional | [CaptionNumberingFormat](../../../Enumerations/CaptionNumberingFormat.md) | Description |
| bBefore | Optional | Boolean | Description |
| nHeadingLvl | Optional | Number | Description |
| sCaptionSep | Optional | [CaptionSep](../../../Enumerations/CaptionSep.md) | Description |

## Returns

Boolean

## Example

This example adds a caption paragraph after the current table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text in the first cell.");
var oCell = oTable.GetCell(0,0);
oTable.AddElement(oCell, 0, oParagraph);
oTable.AddCaption("", "Table", false, "Arabic", false, undefined, "hyphen");
builder.SaveFile("docx", "AddCaption.docx");
builder.CloseFile();
```