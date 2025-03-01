# SetContextualSpacing

Specifies that any space before or after this paragraph set using the 
&#123;@link ApiParaPr#SetSpacingBefore&#125; or &#123;@link ApiParaPr#SetSpacingAfter&#125; spacing element, should not be applied when the preceding and 
following paragraphs are of the same paragraph style, affecting the top and bottom spacing respectively.

## Syntax

```javascript
expression.SetContextualSpacing(isContextualSpacing);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isContextualSpacing | Required | boolean |  | The true value will enable the paragraph contextual spacing. |

## Returns

boolean

## Example

This example specifies that any space before or after this paragraph set using the [ApiParaPr#SetSpacingBefore](./SetSpacingBefore.md) or [ApiParaPr#SetSpacingAfter](./SetSpacingAfter.md) spacing element, should not be applied when the preceding and following paragraphs are of the same paragraph style, affecting the top and bottom spacing respectively.

```javascript editor-docx
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetContextualSpacing(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with contextual spacing set to 'false' (no paragraph style is applied).");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'false' (no paragraph style is applied).");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is a paragraph with contextual spacing set to 'true' (paragraph style is applied).");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is a paragraph with contextual spacing set to 'true' (paragraph style is applied).");
doc.Push(paragraph);
```
