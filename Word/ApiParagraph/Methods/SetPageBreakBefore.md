# SetPageBreakBefore

Specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered at
the beginning of a new page in the document.

## Syntax

```javascript
expression.SetPageBreakBefore(isPageBreakBefore);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isPageBreakBefore | Required | boolean |  | The true value enables the option to render the contents of the paragraph at the beginning of a new page in the document. |

## Returns

This method doesn't return any data.

## Example

This example specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered at the beginning of a new page in the document.

```javascript editor-docx
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetPageBreakBefore(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a page break before a paragraph. ");
paragraph.AddText("The second paragraph will start from a new page, as it has a page break before it. ");
paragraph.AddText("Scroll down to the second page to see it. ");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it has page break before it enabled.");
paragraph.SetStyle(myStyle);
doc.Push(paragraph);
```
