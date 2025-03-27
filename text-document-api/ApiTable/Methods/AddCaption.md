# AddCaption

Adds a caption paragraph after (or before) the current table.\
💡 Please note that the current table must be in the document (not in the footer/header).\
And if the current table is placed in a shape, then a caption is added after (or before) the parent shape.

## Syntax

```javascript
expression.AddCaption(sAdditional, sLabel, bExludeLabel, sNumberingFormat, bBefore, nHeadingLvl, sCaptionSep);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAdditional | Required | string |  | The additional text. |
| sLabel | Optional | [CaptionLabel](../../Enumeration/CaptionLabel.md) \| String | "Table" | The caption label. |
| bExludeLabel | Optional | boolean | false | Specifies whether to exclude the label from the caption. |
| sNumberingFormat | Optional | [CaptionNumberingFormat](../../Enumeration/CaptionNumberingFormat.md) | "Arabic" | The possible caption numbering format. |
| bBefore | Optional | boolean | false | Specifies whether to insert the caption before the current table (true) or after (false) (after/before the shape if it is placed in the shape). |
| nHeadingLvl | Optional | Number |  | The heading level (used if you want to specify the chapter number).\ 💡 If you want to specify "Heading 1", then nHeadingLvl === 0 and etc. |
| sCaptionSep | Optional | [CaptionSep](../../Enumeration/CaptionSep.md) | "hyphen" | The caption separator (used if you want to specify the chapter number). |

## Returns

boolean

## Example

This example adds a caption paragraph after the current table.

```javascript editor-docx
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text in the first cell.");
let cell = table.GetCell(0, 0);
table.AddElement(cell, 0, paragraph);
table.AddCaption("", "Table", false, "Arabic", false, undefined, "hyphen");
```
