# headingRefTo

Heading reference type.

## Type

String

## Properties

- "text" - the entire heading text;
- "pageNum" - the heading page number;
- "headingNum" - the heading sequence number;
- "noCtxHeadingNum" - the abbreviated heading number. Make sure the cursor pointer is in the section you are referencing to, e.g. you are in section 4 and you wish to refer to heading 4.B, so instead of "4.B" you receive "B" only;
- "fullCtxHeadingNum" - the full heading number even if the cursor pointer is in the same section;
- "aboveBelow" - the words "above" or "below" depending on the item position.

## Example

This example adds a cross-reference to the page containing a heading.

```javascript
oParagraph.AddHeadingCrossRef("pageNum", oHeadingParagraph);
```