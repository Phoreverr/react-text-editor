import './App.css';
import { useRef, useState } from 'react';
import AlignLeftIcons from './components/icons/AlignLeft.icon';
import AlignCenterIcons from './components/icons/AlignCenter.icon';
import AlignRightIcons from './components/icons/AlignRight.icon';
import Underline from './components/icons/Underline.icon';
import ItalicIcon from './components/icons/Italics.icon';
import BoldIcon from './components/icons/Bold.icon';

function App() {

  const [align, setAlign] = useState("");
  // const [align, setAlign] = useState<'left' | 'center' | 'right'>("");
  const editorRef = useRef<HTMLDivElement>(null);

  const exec = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  return (
    <div className="w-[500px] h-auto border-2 border-blue-500 p-3 rounded-lg shadow-lg mx-auto mt-10">
      <div className='flex space-x-2 mb-2'>
        <button className="px-2 py-1 rounded bg-gray-100" onClick={() => exec('bold')}>
          <BoldIcon/>
        </button>
        <button className="px-2 py-1 rounded bg-gray-100" onClick={() => exec('italic')}>
          <ItalicIcon/>
        </button>
        <button className="px-2 py-1 rounded bg-gray-100" onClick={() => exec('underline')}>
          <Underline/>
        </button>
         <button
          className={`px-2 py-1 rounded ${align === 'left' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
          onClick={() => setAlign('left')}>
          <AlignLeftIcons/>
        </button>
        <button
          className={`px-2 py-1 rounded ${align === 'center' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
          onClick={() => setAlign('center')}>
          <AlignCenterIcons/>
        </button>
        <button
          className={`px-2 py-1 rounded ${align === 'right' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
          onClick={() => setAlign('right')}
        >
          <AlignRightIcons/>
        </button>
        <button className="px-2 py-1 rounded bg-gray-100" onClick={() => exec('undo')}>
          Undo
        </button>
        <button className="px-2 py-1 rounded bg-gray-100" onClick={() => exec('redo')}>
          Redo
        </button>
        <button className="px-2 py-1 rounded bg-gray-100" onClick={() => exec('insertOrderedList')}>
          1.
        </button>
        <button className="px-2 py-1 rounded bg-gray-100" onClick={() => exec('insertUnorderedList')}>
          •
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

