# SetStrikeout

Specifies that the contents of this paragraph are displayed with a single horizontal line through the center of the line.

## Syntax

expression.SetStrikeout(isStrikeout);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | Boolean | Specifies that the contents of the current paragraph are displayed struck through. |

## Returns

[ApiParagraph](../ApiParagraph.md)

## Example

This example specifies that the contents of this paragraph are displayed with a single horizontal line through the center of the line.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text struck out with a single line.");
oParagraph.SetStrikeout(true);
builder.SaveFile("docx", "SetStrikeout.docx");
builder.CloseFile();
```