# CaptionSep

Possible values for the caption separator.

## Type

String

## Properties

- "hyphen" - the "-" punctuation mark.
- "period" - the "." punctuation mark.
- "colon" - the ":" punctuation mark.
- "longDash" - the "—" punctuation mark.
- "dash" - the "-" punctuation mark.

## Example

This example add a caption with a hyphen as a numbering separator to the paragraph.

```javascript
oParagraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
```