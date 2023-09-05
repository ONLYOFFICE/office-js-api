# SetPageBreakBefore

Specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered at the beginning of a new page in the document.<br>Inherited From: [ApiParaPr#SetPageBreakBefore](../../ApiParaPr/Methods/SetPageBreakBefore.md)

## Syntax

expression.SetPageBreakBefore(isPageBreakBefore);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isPageBreakBefore | Required | Boolean | The true value enables the option to render the contents of the paragraph at the beginning of a new page in the document. |

## Returns

This method doesn't return any data.

## Example

This example specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered at the beginning of a new page in the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of setting a page break before a paragraph. ");
oParagraph.AddText("The second paragraph will start from a new page, as it has a page break before it. ");
oParagraph.AddText("Scroll down to the second page to see it. ");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second paragraph and it has page break before it enabled.");
oParagraph.SetPageBreakBefore(true);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetPageBreakBefore.docx");
builder.CloseFile();
```