# CaptionSep

Possible values for the caption separator.\n-**"hyphen"** - the "-" punctuation mark.\n-**"period"** - the "." punctuation mark.\n-**"colon"** - the ":" punctuation mark.\n-**"longDash"** - the "—" punctuation mark.\n-**"dash"** - the "-" punctuation mark.

## Type

Enumeration

## Values

- "hyphen"
- "period"
- "colon"
- "longDash"
- "dash"


## Example

This example add a caption with a hyphen as a numbering separator to the paragraph.

```javascript editor-xlsx
paragraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
```
