import "./App.css";
import { useRef, useState, useEffect, useCallback } from "react";
import AlignLeftIcons from "./components/icons/AlignLeft.icon";
import AlignCenterIcons from "./components/icons/AlignCenter.icon";
import AlignRightIcons from "./components/icons/AlignRight.icon";
import Underline from "./components/icons/Underline.icon";
import ItalicIcon from "./components/icons/Italics.icon";
import BoldIcon from "./components/icons/Bold.icon";
import { sanitizeHTML } from "./lib/./SantizeHtml";
import UnorderedListIcon from "./components/icons/UnorderedList.icon";
import OrderedListIcon from "./components/icons/OrderedList.icon";
import { Dropdown, Button, Input } from "antd";
import { DownOutlined, LinkOutlined } from "@ant-design/icons";

function App() {
  const [align, setAlign] = useState("");
  const [boldActive, setBoldActive] = useState(false);
  const [italicActive, setItalicActive] = useState(false);
  const [underlineActive, setUnderlineActive] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const [formatBlock, setFormatBlock] = useState("");
  const [orderedListActive, setOrderedListActive] = useState(false);
  const [unorderedListActive, setUnorderedListActive] = useState(false);
  const [linkDropdownOpen, setLinkDropdownOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");


  const handleSelectionChange = useCallback(() => {
    requestAnimationFrame(() => {
      const newBold = document.queryCommandState("bold");
      const newItalic = document.queryCommandState("italic");
      const newUnderline = document.queryCommandState("underline");
      const newOrderedList = document.queryCommandState("insertOrderedList");
      const newUnorderedList = document.queryCommandState(
        "insertUnorderedList"
      );
      const newFormatBlock = document
        .queryCommandValue("formatBlock")
        ?.toLowerCase();

      if (newBold !== boldActive) setBoldActive(newBold);
      if (newItalic !== italicActive) setItalicActive(newItalic);
      if (newUnderline !== underlineActive) setUnderlineActive(newUnderline);
      if (newOrderedList !== orderedListActive)
        setOrderedListActive(newOrderedList);
      if (newUnorderedList !== unorderedListActive)
        setUnorderedListActive(newUnorderedList);
      if (newFormatBlock !== formatBlock) setFormatBlock(newFormatBlock);

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
        // console.log("dirty", dirtyHTML);
        const cleanHTML = sanitizeHTML(dirtyHTML);
        console.log(cleanHTML);
      }
    });
  }, [
    boldActive,
    italicActive,
    underlineActive,
    orderedListActive,
    unorderedListActive,
    formatBlock,
    align,
  ]);

const insertLink = () => {
  const url = linkUrl.trim();
  if (!url) return;

  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) {
    alert("Please select text to turn into a link.");
    return;
  }

  // Insert the link
  document.execCommand("createLink", false, url);

  // Post-process: add inline style to the newly created <a>
  const editor = editorRef.current;
  if (editor) {
    const anchors = editor.getElementsByTagName("a");
    for (let i = 0; i < anchors.length; i++) {
      const a = anchors[i];
      if (a.getAttribute("href") === url) {
        a.setAttribute("style", "text-decoration: none;");
      }
    }
  }

  setLinkUrl("");
  setLinkDropdownOpen(false);
};


  useEffect(() => {
    // if (hasRun.current) return;
    // hasRun.current = true;

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
      <div className="flex flex-wrap mb-2 gap-1">
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
            formatBlock === "h1" ? "bg-gray-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => exec("formatBlock", "H1")}
        >
          H1
        </button>
        <button
          className={`px-2 py-1 rounded ${
            formatBlock === "h2" ? "bg-gray-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => exec("formatBlock", "H2")}
        >
          H2
        </button>
        <button
          className={`px-2 py-1 rounded ${
            formatBlock === "h3" ? "bg-gray-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => exec("formatBlock", "H3")}
        >
          H3
        </button>
        <button
          className={`px-2 py-1 rounded ${
            unorderedListActive ? "bg-gray-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => exec("insertUnorderedList")}
        >
          <UnorderedListIcon />
        </button>
        <button
          className={`px-2 py-1 rounded ${
            orderedListActive ? "bg-gray-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => exec("insertOrderedList")}
        >
          <OrderedListIcon />
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
        <Dropdown
          open={linkDropdownOpen}
          onOpenChange={setLinkDropdownOpen}
          trigger={["click"]} // Only open on click
          popupRender={() => (
            <div className="p-2 bg-white border rounded shadow-md w-64">
              <Input
                placeholder="https://example.com"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                onPressEnter={insertLink}
              />
              <div className="flex justify-end mt-2">
                <Button size="small" type="primary" onClick={insertLink}>
                  Insert
                </Button>
              </div>
            </div>
          )}
        >
          <Button
            icon={<LinkOutlined />}
            className="px-2 py-1 rounded bg-gray-100"
          >
            Link <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <div
        ref={editorRef}
        className="w-full h-60 overflow-y-auto p-2 border border-gray-300 rounded-lg focus:outline-none scrollbar-thin scrollbar-thumb-gray-400"
        contentEditable
      ></div>
    </div>
  );
}

export default App;
