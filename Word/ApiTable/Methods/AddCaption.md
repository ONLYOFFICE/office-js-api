# AddCaption

Adds a caption paragraph after (or before) the current table.
<br>Please note that the current table must be in the document (not in the footer/header). And if the current table is placed in a shape, then a caption is added after (or before) the parent shape.

## Syntax

expression.AddCaption(sAdditional, sLabel?, ?bExludeLabel?, sNumberingFormat?, bBefore?, nHeadingLvl?, sCaptionSep?);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAdditional | Required | String | The additional text. |
| sLabel | Optional | [CaptionLabel](../../../Enumerations/CaptionLabel.md) &#124; String | The caption label. Default value is "Table". |
| bExludeLabel | Optional | Boolean | Specifies whether to exclude the label from the caption. Default value is "false". |
| sNumberingFormat | Optional | [CaptionNumberingFormat](../../../Enumerations/CaptionNumberingFormat.md) | The possible caption numbering format. Default value is "Arabic". |
| bBefore | Optional | Boolean | Specifies whether to insert the caption before the current table (true) or after (false) (after/before the shape if it is placed in the shape). Default value is "false". |
| nHeadingLvl | Optional | Number | The heading level (used if you want to specify the chapter number). If you want to specify "Heading 1", then nHeadingLvl === 0 and etc. Default value is "null". |
| sCaptionSep | Optional | [CaptionSep](../../../Enumerations/CaptionSep.md) | The caption separator (used if you want to specify the chapter number). Default value is "hyphen". |

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