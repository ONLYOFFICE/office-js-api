# SectionBreakType

The section break type which defines how the contents of the current section are placed relative to the previous section.\nWordprocessingML supports five distinct types of section breaks:\n-**Next page** ("nextPage") - starts a new section on the next page (the default value).\n-**Odd** ("oddPage") - starts a new section on the next odd-numbered page.\n-**Even** ("evenPage") - starts a new section on the next even-numbered page.\n-**Continuous** ("continuous") - starts a new section in the next paragraph.\nThis means that continuous section breaks might not specify certain page-level section properties,\nsince they shall be inherited from the following section.\nHowever, these breaks can specify other section properties, such as line numbering and footnote/endnote settings.\n-**Column** ("nextColumn") - starts a new section in the next column on the page.

## Type

Enumeration

## Values

- "nextPage"
- "oddPage"
- "evenPage"
- "continuous"
- "nextColumn"
