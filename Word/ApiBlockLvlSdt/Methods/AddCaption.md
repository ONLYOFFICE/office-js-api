# AddCaption

Adds a caption paragraph after (or before) the current content control.💡 Please note that the current content control must be in the document (not in the footer/header).And if the current content control is placed in a shape, then a caption is added after (or before) the parent shape.

## Syntax

expression.AddCaption(sAdditional, sLabel, bExludeLabel, sNumberingFormat, bBefore, nHeadingLvl, sCaptionSep);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAdditional | Required | string |  | The additional text. |
| sLabel | Optional | [CaptionLabel](../../Enumeration/CaptionLabel.md) &#124;String | "Table" | The caption label. |
| bExludeLabel | Optional | boolean | false | Specifies whether to exclude the label from the caption. |
| sNumberingFormat | Optional | [CaptionNumberingFormat](../../Enumeration/CaptionNumberingFormat.md) | "Arabic" | The possible caption numbering format. |
| bBefore | Optional | boolean | false | Specifies whether to insert the caption before the current content control (true) or after (false) (after/before the shape if it is placed in the shape). |
| nHeadingLvl | Optional | Number |  | The heading level (used if you want to specify the chapter number). 💡 If you want to specify "Heading 1", then nHeadingLvl === 0 and etc. |
| sCaptionSep | Optional | [CaptionSep](../../Enumeration/CaptionSep.md) | "hyphen" | The caption separator (used if you want to specify the chapter number). |

## Returns

boolean

## Example

This example adds a caption paragraph after (or before) the current content control.

```javascript
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oDrawing);
oBlockLvlSdt.AddElement(oParagraph, 0);
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
```
