import "./App.css";
import { useRef, useState, useEffect, useCallback  } from "react";
import AlignLeftIcons from "./components/icons/AlignLeft.icon";
import AlignCenterIcons from "./components/icons/AlignCenter.icon";
import AlignRightIcons from "./components/icons/AlignRight.icon";
import Underline from "./components/icons/Underline.icon";
import ItalicIcon from "./components/icons/Italics.icon";
import BoldIcon from "./components/icons/Bold.icon";
import { sanitizeHTML } from "./lib/./SantizeHtml";


function App() {
  const [align, setAlign] = useState("");
  const [boldActive, setBoldActive] = useState(false);
  const [italicActive, setItalicActive] = useState(false);
  const [underlineActive, setUnderlineActive] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

const handleSelectionChange = useCallback(() => {
  requestAnimationFrame(() => {
    const newBold = document.queryCommandState("bold");
    const newItalic = document.queryCommandState("italic");
    const newUnderline = document.queryCommandState("underline");

    if (newBold !== boldActive) setBoldActive(newBold);
    if (newItalic !== italicActive) setItalicActive(newItalic);
    if (newUnderline !== underlineActive) setUnderlineActive(newUnderline);

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    let node = selection.anchorNode as HTMLElement | null;

    while (node && node !== editorRef.current) {
      if (node.nodeType === 1) {
        const display = window.getComputedStyle(node).display;
        if (display === "block" || display === "flex") break;
      }
      node = node.parentElement;
    }

    let newAlign = "";
    if (node && editorRef.current?.contains(node)) {
      const align = window.getComputedStyle(node).textAlign;
      if (align === "center") newAlign = "center";
      else if (align === "right") newAlign = "right";
      else newAlign = "left";
    }

    if (newAlign !== align) setAlign(newAlign);

    if (editorRef.current) {
      const dirtyHTML = editorRef.current.innerHTML;
      const cleanHTML = sanitizeHTML(dirtyHTML);
      console.log(cleanHTML);
    }
  });
}, [boldActive, italicActive, underlineActive, align]);


useEffect(() => {
  const editor = editorRef.current;
  if (!editor) return;

  document.addEventListener("selectionchange", handleSelectionChange);
  editor.addEventListener("input", handleSelectionChange);

  return () => {
    document.removeEventListener("selectionchange", handleSelectionChange);
    editor.removeEventListener("input", handleSelectionChange);
  };
}, [handleSelectionChange]);

  const exec = (command: string, value?: string) => {
    const selection = window.getSelection();
    const isCollapsed = selection && selection.isCollapsed;
    const isFormatCmd =
      command === "bold" || command === "italic" || command === "underline";

    if (
      isFormatCmd &&
      isCollapsed &&
      editorRef.current &&
      document.activeElement === editorRef.current
    ) {
      document.execCommand(command, false, value);
      document.execCommand("insertHTML", false, "<span>\u200B</span>");
      const range = document.createRange();
      const editor = editorRef.current;
      if (editor.lastChild) {
        range.setStartAfter(editor.lastChild);
        range.collapse(true);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }

      // Update the bold state after executing the command
      handleSelectionChange();
    } else {
      document.execCommand(command, false, value);
      // Update the bold state after executing the command
      handleSelectionChange();
    }

    editorRef.current?.focus();
  };

  return (
    <div className="w-[500px] h-auto border-2 border-blue-500 p-3 rounded-lg shadow-lg mx-auto mt-10">
      <div className="flex space-x-2 mb-2">
        <button
          className={`px-2 py-1 rounded ${
            boldActive ? "bg-gray-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => exec("bold")}
        >
          <BoldIcon />
        </button>
        <button
          className={`px-2 py-1 rounded ${
            italicActive ? "bg-gray-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => exec("italic")}
        >
          <ItalicIcon />
        </button>
        <button
          className={`px-2 py-1 rounded ${
            underlineActive ? "bg-gray-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => exec("underline")}
        >
          <Underline />
        </button>
        <button
          className={`px-2 py-1 rounded ${
            align === "left" ? "bg-gray-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => exec("justifyLeft")}
        >
          <AlignLeftIcons />
        </button>
        <button
          className={`px-2 py-1 rounded ${
            align === "center" ? "bg-gray-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => exec("justifyCenter")}
        >
          <AlignCenterIcons />
        </button>
        <button
          className={`px-2 py-1 rounded ${
            align === "right" ? "bg-gray-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => exec("justifyRight")}
        >
          <AlignRightIcons />
        </button>
        <button
          className="px-2 py-1 rounded bg-gray-100"
          onClick={() => exec("undo")}
        >
          Undo
        </button>
        <button
          className="px-2 py-1 rounded bg-gray-100"
          onClick={() => exec("redo")}
        >
          Redo
        </button>
      </div>
      <div
        ref={editorRef}
        className="w-full h-60 p-2 border border-gray-300 rounded-lg focus:outline-none resize-none"
        contentEditable
      ></div>
    </div>
  );
}

export default App;
