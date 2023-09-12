# AddCaption

Adds a caption paragraph after (or before) the current content control.

## Syntax

expression.AddCaption(sAdditional, sLabel?, bExludeLabel?, sNumberingFormat?, bBefore?, nHeadingLvl?, sCaptionSep?);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.
## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAdditional | Required | String | The additional text. |
| sLabel | Optional | [CaptionLabel](../../../Enumerations/CaptionLabel.md) &#124; String | The caption label. Default value is "Table". |
| bExludeLabel | Optional | Boolean | Specifies whether to exclude the label from the caption. Default value is "false". |
| sNumberingFormat | Optional | [CaptionNumberingFormat](../../../Enumerations/CaptionNumberingFormat.md) | The possible caption numbering format. Default value is "Arabic". |
| bBefore | Optional | Boolean | Specifies whether to insert the caption before the current content control (true) or after (false) (after/before the shape if it is placed in the shape). Default value is "false". |
| nHeadingLvl | Optional | Number | The heading level (used if you want to specify the chapter number). If you want to specify "Heading 1", then nHeadingLvl === 0 and etc. Default value is "null". |
| sCaptionSep | Optional | [CaptionSep](../../../Enumerations/CaptionSep.md) | The caption separator (used if you want to specify the chapter number). Default value is "hyphen". |

## Returns

Boolean

## Example

This example adds a caption paragraph after (or before) the current content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oDrawing);
oBlockLvlSdt.AddElement(oParagraph, 0);
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
builder.SaveFile("docx", "AddCaption.docx");
builder.CloseFile();
```