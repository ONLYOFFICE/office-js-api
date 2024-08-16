# SetPageBreakBefore

Specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered atthe beginning of a new page in the document.

## Syntax

expression.SetPageBreakBefore(isPageBreakBefore);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isPageBreakBefore | Required | boolean |  | The true value enables the option to render the contents of the paragraph at the beginning of a new page in the document. |

## Returns

This method doesn't return any data.

## Example

This example specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered at the beginning of a new page in the document.

```javascript
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetPageBreakBefore(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of setting a page break before a paragraph. ");
oParagraph.AddText("The second paragraph will start from a new page, as it has a page break before it. ");
oParagraph.AddText("Scroll down to the second page to see it. ");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second paragraph and it has page break before it enabled.");
oParagraph.SetStyle(oMyStyle);
oDocument.Push(oParagraph);
```
