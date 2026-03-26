# ONLYOFFICE JavaScript API Examples

[![License](https://img.shields.io/badge/License-GNU%20AGPL%20v3-green.svg)](LICENSE.md)

**Tools for building [macros](https://api.onlyoffice.com/docs/plugin-and-macros/macros/getting-started/) and [plugins](https://api.onlyoffice.com/docs/plugin-and-macros/tutorials/developing/for-web-editors/) for ONLYOFFICE editors, for working with [ONLYOFFICE document content](https://api.onlyoffice.com/docs/document-builder/get-started/overview/), for using the [Automation API](https://api.onlyoffice.com/docs/docs-api/usage-api/automation-api/), and for integrating with web services.**

[ONLYOFFICE](https://www.onlyoffice.com) is an open-source office suite with editors for text documents, spreadsheets, presentations, PDFs, and forms. This repository provides JavaScript API examples to help you extend ONLYOFFICE editors and automate document workflows. Explore the examples below or visit [api.onlyoffice.com](https://api.onlyoffice.com) to get started.

<p align="center">
  <a href="https://api.onlyoffice.com/">
    <img width="800" src="https://static-blog.onlyoffice.com/wp-content/uploads/2025/08/28173547/onlyoffice-api-roundup.png" alt="ONLYOFFICE API">
  </a>
</p>

## 📂 What's Inside

This repository contains JavaScript code examples organized by category:

| Category | Description |
|----------|-------------|
| [Word](./Examples/Word/) | Text Document API: interact with and manipulate text documents, including formatting, content insertion, comments, and more |
| [Cell](./Examples/Cell/) | Spreadsheet API: manage spreadsheets, perform calculations, and handle cells, ranges, and charts |
| [Slide](./Examples/Slide/) | Presentation API: control presentations, add slides, manage content, and apply visual effects |
| [PDF](./Examples/Pdf/) | PDF Document API: work with PDF files, annotations, fields, and widgets |
| [Forms](./Examples/Forms/) | Form API: create and manipulate forms, handle user input, and integrate with external data sources |
| [Plugins](./Examples/Plugins/) | Plugin development examples for ONLYOFFICE editors |
| [Enumerations](./Examples/Enumerations/) | Enumeration reference examples |

## 🚀 Getting Started

These examples run inside ONLYOFFICE macros or with [Document Builder](https://api.onlyoffice.com/docs/document-builder/get-started/overview/). Browse the [Examples](./Examples/) directory to find code samples for your use case. Each file is a self-contained JavaScript example demonstrating a specific method or feature.

**Add a comment to a text document:**

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.AddComment(paragraph, "ONLYOFFICE for developers", "Jane");
```

**Create a combo box form field:**

```javascript
let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({
  "key": "Personal information",
  "tip": "Choose your country",
  "required": true,
  "placeholder": "Country",
  "editable": false,
  "autoFit": false,
  "items": ["Latvia", "USA", "UK"]
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
```

## 📖 API Documentation

- [Document Builder](https://api.onlyoffice.com/docs/document-builder/get-started/overview/): Create and modify documents programmatically.
- [Macros](https://api.onlyoffice.com/docs/plugin-and-macros/macros/getting-started/): Build and run macros in ONLYOFFICE editors.
- [Plugins](https://api.onlyoffice.com/docs/plugin-and-macros/tutorials/developing/for-web-editors/): Develop custom plugins for ONLYOFFICE web editors.
- [Automation API](https://api.onlyoffice.com/docs/docs-api/usage-api/automation-api/): Integrate ONLYOFFICE with web services.

## 💬 Community and Feedback

- 🐛 **Found a bug?** Please report it by creating an [issue](https://github.com/ONLYOFFICE/office-js-api/issues).
- ❓ **Have a question?** Ask our community and developers on the [ONLYOFFICE Forum](https://community.onlyoffice.com/).
- 👨‍💻 **Need help for developers?** Check our [API documentation](https://api.onlyoffice.com/).
- 💡 **Want to suggest a feature?** Share your ideas on our [feedback platform](https://feedback.onlyoffice.com/forums/966080-your-voice-matters).

## 📜 License

This project is distributed under the GNU Affero General Public License v3.0. See [LICENSE.md](LICENSE.md) for full details.

---
<p align="center">Made with ❤️ by the ONLYOFFICE Team</p>