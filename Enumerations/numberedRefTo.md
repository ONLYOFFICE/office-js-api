# numberedRefTo

numbered reference type.

## Type

String

## Properties

- "pageNum" - the numbered item page number;
- "paraNum" - the numbered item paragraph number;
- "noCtxParaNum" - the abbreviated paragraph number (the specific item only, e.g. instead of "4.1.1" you refer to "1" only);
- "fullCtxParaNum" - the full paragraph number, e.g. "4.1.1";
- "text" - the paragraph text value, e.g. if you have "4.1.1. Terms and Conditions", you refer to "Terms and Conditions" only;
- "aboveBelow" - the words "above" or "below" depending on the item position.

## Example

This example adds a cross-reference to the page containing a numbered paragraph.

```javascript
oParagraph.AddNumberedCrossRef("pageNum", oNumberedParagraph, true, true);
```