# AddCaption

Adds a caption paragraph after (or before) the current content control.\
💡 Please note that the current content control must be in the document (not in the footer/header).\
And if the current content control is placed in a shape, then a caption is added after (or before) the parent shape.

## Syntax

```javascript
expression.AddCaption(additionalText, label, excludeLabel, numFormat, isBefore, headingLvl, captionSep);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| additionalText | Required | string |  | The additional text. |
| label | Optional | [CaptionLabel](../../Enumeration/CaptionLabel.md) \| String | "Table" | The caption label. |
| excludeLabel | Optional | boolean | false | Specifies whether to exclude the label from the caption. |
| numFormat | Optional | [CaptionNumberingFormat](../../Enumeration/CaptionNumberingFormat.md) | "Arabic" | The possible caption numbering format. |
| isBefore | Optional | boolean | false | Specifies whether to insert the caption before the current content control (true) or after (false) (after/before the shape if it is placed in the shape). |
| headingLvl | Optional | Number |  | The heading level (used if you want to specify the chapter number).\ 💡 If you want to specify "Heading 1", then nHeadingLvl === 0 and etc. |
| captionSep | Optional | [CaptionSep](../../Enumeration/CaptionSep.md) | "hyphen" | The caption separator (used if you want to specify the chapter number). |

## Returns

boolean

## Example

This example adds a caption paragraph after (or before) the current content control.

```javascript editor-docx
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
let image = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 60 * 36000, 35 * 36000);
paragraph.AddDrawing(image);
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
```
