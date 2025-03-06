# headingRefTo

Available values of the "heading" reference type:\n-**"text"** - the entire heading text;\n-**"pageNum"** - the heading page number;\n-**"headingNum"** - the heading sequence number;\n-**"noCtxHeadingNum"** - the abbreviated heading number. Make sure the cursor pointer is in the section you are referencing to, e.g. you are in section 4 and you wish to refer to heading 4.B, so instead of "4.B" you receive "B" only;\n-**"fullCtxHeadingNum"** - the full heading number even if the cursor pointer is in the same section;\n-**"aboveBelow"** - the words "above" or "below" depending on the item position.

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

```javascript editor-pdf
paragraph.AddHeadingCrossRef("pageNum", headingParagraph);
```
