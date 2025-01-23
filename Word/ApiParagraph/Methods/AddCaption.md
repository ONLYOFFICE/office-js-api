# AddCaption

Adds a caption paragraph after (or before) the current paragraph.
💡 Please note that the current paragraph must be in the document (not in the footer/header).
And if the current paragraph is placed in a shape, then a caption is added after (or before) the parent shape.

## Syntax

expression.AddCaption(sAdditional, sLabel, bExludeLabel, sNumberingFormat, bBefore, nHeadingLvl, sCaptionSep);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAdditional | Required | string |  | The additional text. |
| sLabel | Optional | [CaptionLabel](../../Enumeration/CaptionLabel.md) | String | "Table" | The caption label. |
| bExludeLabel | Optional | boolean | false | Specifies whether to exclude the label from the caption. |
| sNumberingFormat | Optional | [CaptionNumberingFormat](../../Enumeration/CaptionNumberingFormat.md) | "Arabic" | The possible caption numbering format. |
| bBefore | Optional | boolean | false | Specifies whether to insert the caption before the current paragraph (true) or after (false) (after/before the shape if it is placed in the shape). |
| nHeadingLvl | Optional | Number |  | The heading level (used if you want to specify the chapter number). 💡 If you want to specify "Heading 1", then nHeadingLvl === 0 and etc. |
| sCaptionSep | Optional | [CaptionSep](../../Enumeration/CaptionSep.md) | "hyphen" | The caption separator (used if you want to specify the chapter number). |

## Returns

boolean

## Example

This example adds a caption paragraph after the paragraph.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 60 * 36000, 35 * 36000);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
```
