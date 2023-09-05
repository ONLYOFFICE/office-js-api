# CaptionNumberingFormat

Possible values for the caption numbering format.

## Type

String

## Properties

- "ALPHABETIC" - upper letter.
- "alphabetic" - lower letter.
- "Roman" - upper Roman.
- "roman" - lower Roman.
- "Arabic" - arabic.

## Example

This example add a caption with the Arabic numbering format to the paragraph.

```javascript
oParagraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
```