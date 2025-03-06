# CaptionNumberingFormat

Possible values for the caption numbering format.\n-**"ALPHABETIC"** - upper letter.\n-**"alphabetic"** - lower letter.\n-**"Roman"** - upper Roman.\n-**"roman"** - lower Roman.\n-**"Arabic"** - arabic.

## Type

Enumeration

## Values

- "ALPHABETIC"
- "alphabetic"
- "Roman"
- "roman"
- "Arabic"


## Example

This example add a caption with the Arabic numbering format to the paragraph.

```javascript editor-pdf
paragraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
```
