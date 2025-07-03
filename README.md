# ✨ Rich-text-editor

A truly "rich" text editor — finally one that respects your CSS.

## 🔥 What makes it different?

Unlike most rich text editors that sanitize or strip out your CSS, `Rich-text-editor` is built to **retain your custom styles**, even when embedded directly in the HTML. Whether it’s inline `<style>` tags, scoped CSS, or class-based styling, this editor ensures your design stays intact.

Perfect for:
- 📰 Newsletter editors
- 🧱 Website builders
- 🧾 Custom CMS platforms
- 🎨 Any app where pixel-perfect output matters

## ⚙️ Features

- ✅ Accepts and renders raw HTML + CSS
- ✅ WYSIWYG editing experience
- ✅ Built with React (fully componentized)
- ✅ Lightweight and extensible
- ✅ No style stripping or over-sanitizing
- ✅ Supports copy-paste from styled HTML sources

## 📦 Installation

```bash
npm install Rich-text-editor
# or
yarn add Rich-text-editor
````

## 🚀 Usage

```tsx
import React from "react";
import RichTextEditor from "Rich-text-editor";

const App = () => {
  return (
    <RichTextEditor
      initialContent={`<div class="styled-box"><style>.styled-box { color: red; }</style> Hello World</div>`}
    />
  );
};

export default App;
```

## 🛡️ Why this editor?

Most WYSIWYG editors aggressively sanitize input, removing `<style>` tags and custom class names. This makes them unsuitable for platforms where **style fidelity** is critical. `your-rich-text-editor` was built to solve this pain — giving developers and users the freedom to control their design.

## 📚 Documentation

> Coming soon...

## 💬 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to [open an issue](https://github.com/yourusername/your-rich-text-editor/issues) or submit a PR.

## 📄 License

MIT © [Your Name](https://github.com/yourusername)

