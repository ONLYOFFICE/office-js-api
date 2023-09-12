# SetCaps

Specifies that any lowercase characters in this paragraph are formatted for display only as their capital letter character equivalents.

## Syntax

expression.SetCaps(isCaps);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isCaps | Required | Boolean | Specifies that the contents of the current paragraph are displayed capitalized. |

## Returns

[ApiParagraph](../ApiParagraph.md)

## Example

This example specifies that any lowercase characters in this paragraph are formatted for display only as their capital letter character equivalents.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the font set to capitalized letters.");
oParagraph.SetCaps(true);
builder.SaveFile("docx", "SetCaps.docx");
builder.CloseFile();
```