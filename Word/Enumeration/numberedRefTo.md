# numberedRefTo

Available values of the "numbered" reference type:

## Type

Enumeration

## Values

- "pageNum"
- "paraNum"
- "noCtxParaNum"
- "fullCtxParaNum"
- "text"
- "aboveBelow"


## Example

This example adds a cross-reference to the page containing a numbered paragraph.

```javascript
oParagraph.AddNumberedCrossRef("pageNum", oNumberedParagraph, true, true);
```