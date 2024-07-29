# headingRefTo

Available values of the "heading" reference type:

## Type

Enumeration

## Values

- "text"
- "pageNum"
- "headingNum"
- "noCtxHeadingNum"
- "fullCtxHeadingNum"
- "aboveBelow"


## Example

This example adds a cross-reference to the page containing a heading.

```javascript
oParagraph.AddHeadingCrossRef("pageNum", oHeadingParagraph);
```