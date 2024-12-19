# SectionBreakType

The section break type which defines how the contents of the current section are placed relative to the previous section.
WordprocessingML supports five distinct types of section breaks:
**Next page** ("nextPage") - starts a new section on the next page (the default value).
**Odd** ("oddPage") - starts a new section on the next odd-numbered page.
**Even** ("evenPage") - starts a new section on the next even-numbered page.
**Continuous** ("continuous") - starts a new section in the next paragraph.
This means that continuous section breaks might not specify certain page-level section properties,
since they shall be inherited from the following section.
However, these breaks can specify other section properties, such as line numbering and footnote/endnote settings.
**Column** ("nextColumn") - starts a new section in the next column on the page.

## Type

Enumeration

## Values

- "nextPage"
- "oddPage"
- "evenPage"
- "continuous"
- "nextColumn"
