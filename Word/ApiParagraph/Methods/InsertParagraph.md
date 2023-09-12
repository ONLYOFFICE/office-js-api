# InsertParagraph

Inserts a paragraph at the specified position.

## Syntax

expression.InsertParagraph(paragraph, sPosition, beRNewPara);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| paragraph | Required | String &#124; [ApiParagraph](../ApiParagraph.md) | Text or paragraph. |
| sPosition | Required | String | The position where the text or paragraph will be inserted ("before" or "after" the paragraph specified). |
| beRNewPara | Required | Boolean | Defines if this method returns a new paragraph (true) or the current paragraph (false). |

## Returns

[ApiParagraph](../ApiParagraph.md) &#124; null (returns null if param paragraph is invalid)

## Example

This example inserts a paragraph at the specified position.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("This is just a sample text.");
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This paragraph was inserted here.");
oParagraph1.InsertParagraph(oParagraph2, "after", true);
builder.SaveFile("docx", "InsertParagraph.docx");
builder.CloseFile();
```