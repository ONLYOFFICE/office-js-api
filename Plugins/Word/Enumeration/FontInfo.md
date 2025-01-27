# FontInfo

An object containing the font information.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| m_wsFontName | string | The font name. |
| m_wsFontPath | string | The path to the file with the current font. |
| m_lIndex | number | The font number in the file if there is more than one font in the file. |
| m_bBold | boolean | Specifies if the font characters are bold or not. |
| m_bItalic | boolean | Specifies if the font characters are italic or not. |
| m_bIsFixed | boolean | Specifies if the current font is monospaced or not. |
| m_aPanose | number[] | The PANOSE Typeface Classification Number, a compact 10-byte description of the font critical visual characteristics, such as contrast, weight, and serif style. |
| m_ulUnicodeRange1 | number | The Unicode range encompassed by the font file (Bits 0-31). |
| m_ulUnicodeRange2 | number | The Unicode range encompassed by the font file (Bits 32-63). |
| m_ulUnicodeRange3 | number | The Unicode range encompassed by the font file (Bits 64-95). |
| m_ulUnicodeRange4 | number | The Unicode range encompassed by the font file (Bits 96-127). |
| m_ulCodePageRange1 | number | The code pages encompassed by the font file (Bits 0-31). |
| m_ulCodePageRange2 | number | The code pages encompassed by the font file (Bits 32-63). |
| m_usWeigth | number | The visual weight (stroke blackness or thickness) of the font characters (1-1000). |
| m_usWidth | number | The relative change from the normal aspect ratio (width to height ratio). |
| m_sFamilyClass | number | The font family class which values are assigned by IBM to each font family. |
| m_eFontFormat | number | The specific file type(s) used to store font data: **0** - *.fon, **1** - *.ttf, **2** - *.ttf, *.otf (CFF), **3** - unknown font format. |
| m_shAvgCharWidth | number | The arithmetic average of the escapement (width) of all non-zero width glyphs in the font. |
| m_shAscent | number | The height above the baseline for a clipping region. |
| m_shDescent | number | The vertical extent below the baseline for a clipping region. |
| m_shLineGap | number | The typographic line gap for the current font. |
| m_shXHeight | number | The distance between the baseline and the approximate height of non-ascending lowercase letters measured in FUnits. |
| m_shCapHeight | number | The distance between the baseline and the approximate height of uppercase letters measured in FUnits. |
## Type

Object



## Example

```javascript
let fontInfo = {
    "m_wsFontName": "Open Sans",
    "m_wsFontPath": "OpenSans-Bold.ttf",
    "m_lIndex": 0,
    "m_bBold": true,
    "m_bItalic": false,
    "m_bIsFixed": false,
    "m_aPanose": [2, 11, 8, 6, 3, 5, 4, 2, 2, 4],
    "m_ulUnicodeRange1": 3758097135,
    "m_ulUnicodeRange2": 1073750107,
    "m_ulUnicodeRange3": 40,
    "m_ulUnicodeRange4": 0,
    "m_ulCodePageRange1": 536871327,
    "m_ulCodePageRange2": 0,
    "m_usWeigth": 700,
    "m_usWidth": 5,
    "m_sFamilyClass": 2050,
    "m_eFontFormat": 1,
    "m_shAvgCharWidth": 632,
    "m_shAscent": 765,
    "m_shDescent": -240,
    "m_shLineGap": 64,
    "m_shXHeight": 545,
    "m_shCapHeight": 713
};
```
