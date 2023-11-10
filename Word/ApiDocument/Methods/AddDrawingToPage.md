# AddDrawingToPage

Add the drawing to a specified page.
<br>This method can be a little bit slow, because it runs the document calculation process.

## Syntax

expression.AddDrawingToPage(oDrawing, nPage, X, Y);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oDrawing | Required | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) | The drawing to add to the page. |
| nPage | Required | Number | The page number. |
| X | Required | [EMU](../../../Enumerations/Emu.md) | Horizontal position on the page. |
| Y | Required | [EMU](../../../Enumerations/Emu.md) | Vertical position on the page. |

## Returns

Boolean

## Example

This example shows how to get a collection of tables on a given absolute page.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
var oParagraph = Api.CreateParagraph();
oParagraph.AddPageBreak();
oDocument.Push(oParagraph);
oDocument.AddDrawingToPage(oDrawing, 1, 50 * 36000, 50 * 36000);
builder.SaveFile("docx", "AddDrawingToPage.docx");
builder.CloseFile();
```