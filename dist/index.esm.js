import { jsx, jsxs } from 'react/jsx-runtime';
import React, { forwardRef, useState, useRef, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import DOMPurify from 'dompurify';
import { Dropdown, Input, Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden=\"until-found\"])) {\n  display: none;\n}\n.index_collapse__FaKrw {\n  visibility: collapse;\n}\n.index_mx-auto__sLZ9b {\n  margin-left: auto;\n  margin-right: auto;\n}\n.index_mb-2__3OYyR {\n  margin-bottom: 0.5rem;\n}\n.index_mt-10__hGGNB {\n  margin-top: 2.5rem;\n}\n.index_mt-2__NkMtB {\n  margin-top: 0.5rem;\n}\n.index_block__pWaAl {\n  display: block;\n}\n.index_inline__FFnu- {\n  display: inline;\n}\n.index_flex__HmsC8 {\n  display: flex;\n}\n.index_h-60__Oq8nX {\n  height: 15rem;\n}\n.index_h-auto__0oj4t {\n  height: auto;\n}\n.index_w-64__fYdwY {\n  width: 16rem;\n}\n.index_w---500px--__k9TJl {\n  width: 500px;\n}\n.index_w-full__0-yPf {\n  width: 100%;\n}\n.index_flex-wrap__lHht7 {\n  flex-wrap: wrap;\n}\n.index_justify-end__1T0lv {\n  justify-content: flex-end;\n}\n.index_gap-1__EE72P {\n  gap: 0.25rem;\n}\n.index_overflow-y-auto__Use8G {\n  overflow-y: auto;\n}\n.index_rounded__92HJ8 {\n  border-radius: 0.25rem;\n}\n.index_rounded-lg__lb6lM {\n  border-radius: 0.5rem;\n}\n.index_border__p98ad {\n  border-width: 1px;\n}\n.index_border-2__R7nGN {\n  border-width: 2px;\n}\n.index_border-blue-500__IyC7e {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity, 1));\n}\n.index_border-gray-300__BSo1b {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n}\n.index_bg-gray-100__Bu1iZ {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n.index_bg-gray-500__igMIZ {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity, 1));\n}\n.index_bg-white__d0iSm {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.index_p-2__vVl4k {\n  padding: 0.5rem;\n}\n.index_p-3__W4lNj {\n  padding: 0.75rem;\n}\n.index_px-2__sEjQ7 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.index_py-1__4A9Me {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.index_italic__y0w-C {\n  font-style: italic;\n}\n.index_text-white__56DMu {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.index_underline__CPzoe {\n  text-decoration-line: underline;\n}\n.index_shadow-lg__T1D-- {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.index_shadow-md__PxbPH {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.index_filter__qcQi4 {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n.index_focus--outline-none__MExjr:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n";
styleInject(css_248z$1);

var css_248z = "*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden=\"until-found\"])) {\n  display: none;\n}\n.App_collapse__9JhwE {\n  visibility: collapse;\n}\n.App_mx-auto__-54G3 {\n  margin-left: auto;\n  margin-right: auto;\n}\n.App_mb-2__G6QK8 {\n  margin-bottom: 0.5rem;\n}\n.App_mt-10__-O2vn {\n  margin-top: 2.5rem;\n}\n.App_mt-2__Xdvk0 {\n  margin-top: 0.5rem;\n}\n.App_block__DFn6u {\n  display: block;\n}\n.App_inline__sGjXZ {\n  display: inline;\n}\n.App_flex__0gACS {\n  display: flex;\n}\n.App_h-60__-cWfd {\n  height: 15rem;\n}\n.App_h-auto__VPQJo {\n  height: auto;\n}\n.App_w-64__ZQChb {\n  width: 16rem;\n}\n.App_w---500px--__5rWZN {\n  width: 500px;\n}\n.App_w-full__0iXbB {\n  width: 100%;\n}\n.App_flex-wrap__nEgmB {\n  flex-wrap: wrap;\n}\n.App_justify-end__Rqcim {\n  justify-content: flex-end;\n}\n.App_gap-1__BhGKI {\n  gap: 0.25rem;\n}\n.App_overflow-y-auto__bDYrn {\n  overflow-y: auto;\n}\n.App_rounded__nsMKQ {\n  border-radius: 0.25rem;\n}\n.App_rounded-lg__V-mAL {\n  border-radius: 0.5rem;\n}\n.App_border__0eo1P {\n  border-width: 1px;\n}\n.App_border-2__nJyuh {\n  border-width: 2px;\n}\n.App_border-blue-500__ZQarK {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity, 1));\n}\n.App_border-gray-300__-yMsS {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n}\n.App_bg-gray-100__abSgl {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n.App_bg-gray-500__7EALL {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity, 1));\n}\n.App_bg-white__buZT4 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.App_p-2__1VavW {\n  padding: 0.5rem;\n}\n.App_p-3__wTIil {\n  padding: 0.75rem;\n}\n.App_px-2__V0c5P {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.App_py-1__M3Y2X {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.App_italic__9iTCe {\n  font-style: italic;\n}\n.App_text-white__TnoRw {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.App_underline__JJJsJ {\n  text-decoration-line: underline;\n}\n.App_shadow-lg__kr6LF {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.App_shadow-md__tkl5B {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.App_filter__iCbx3 {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.App_App__nwVAc {\n  text-align: center;\n}\n\n.App_App-logo__chRk9 {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App_App-logo__chRk9 {\n    animation: App_App-logo-spin__4BuHA infinite 20s linear;\n  }\n}\n\n.App_App-header__1cw6J {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App_App-link__8PWxp {\n  color: #61dafb;\n}\n\n@keyframes App_App-logo-spin__4BuHA {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\nh1 {\n  font-size: 2rem; \n  font-weight: bold;\n  margin: 0.5rem 0;\n}\n\nh2 {\n  font-size: 1.5rem; \n  font-weight: bold;\n  margin: 0.5rem 0;\n}\n\nh3 {\n  font-size: 1.125rem;\n  font-weight: bold;\n  margin: 0.5rem 0;\n}\n\na {\n  color: #0000EE;\n  text-decoration: none;\n}\n\n.App_focus--outline-none__qZlCY:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n";
styleInject(css_248z);

var AlignLeftIcons = function () {
    return (jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", children: jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 6h8m-8 4h12M6 14h8m-8 4h12" }) }));
};

var AlignCenterIcons = function () {
    return (jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", children: jsx("path", { fill: "currentColor", d: "M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-4 4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m4 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-4 4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2" }) }));
};

var AlignRightIcons = function () {
    return (jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", children: jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M18 6h-8m8 4H6m12 4h-8m8 4H6" }) }));
};

var Underline = function () {
    return (jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "19", height: "19", viewBox: "0 0 24 24", children: jsxs("g", { fill: "none", children: [jsx("path", { d: "m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }), jsx("path", { fill: "currentColor", d: "M18 19a1 1 0 0 1 .117 1.993L18 21H6a1 1 0 0 1-.117-1.993L6 19zM17 3a1 1 0 0 1 .993.883L18 4v8a6 6 0 0 1-11.996.225L6 12V4a1 1 0 0 1 1.993-.117L8 4v8a4 4 0 0 0 7.995.2L16 12V4a1 1 0 0 1 1-1" })] }) }));
};

var ItalicIcon = function () {
    return (jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", children: jsx("path", { fill: "currentColor", d: "M22 1v2h-5v1h-1v2h-1v2h-1v3h-1v2h-1v3h-1v2h-1v2H9v1h7v2H2v-2h5v-1h1v-2h1v-2h1v-3h1v-2h1V8h1V6h1V4h1V3H8V1z" }) }));
};

var BoldIcon = function () {
    return (jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", children: jsx("path", { fill: "currentColor", d: "M6 4.75c0-.69.56-1.25 1.25-1.25h5a4.752 4.752 0 0 1 3.888 7.479A5 5 0 0 1 14 20.5H7.25c-.69 0-1.25-.56-1.25-1.25ZM8.5 13v5H14a2.5 2.5 0 1 0 0-5Zm0-2.5h3.751A2.25 2.25 0 0 0 12.25 6H8.5Z" }) }));
};

// sanitizeHTML.ts
// Hook to sanitize CSS styles manually
DOMPurify.addHook('uponSanitizeAttribute', function (node) {
    if (node.hasAttribute('style')) {
        var style = node.getAttribute('style') || '';
        // Allow only safe styles
        var safeStyles = style
            .split(';')
            .map(function (s) { return s.trim(); })
            .filter(function (s) {
            var prop = s.split(':').map(function (p) { return p.trim().toLowerCase(); })[0];
            return [
                'color',
                'font-weight',
                'font-style',
                'text-decoration',
                'background-color',
                'font-size',
                'text-align',
            ].includes(prop);
        })
            .join('; ');
        if (safeStyles) {
            node.setAttribute('style', safeStyles);
        }
        else {
            node.removeAttribute('style');
        }
    }
});
// Your sanitize function
function sanitizeHTML(dirty) {
    return DOMPurify.sanitize(dirty, {
        ALLOWED_TAGS: ['b', 'i', 'u', 'strong', 'em', 'span', 'div', 'br', 'p', 'h1', 'h2', 'h3', 'ul', 'ol', 'li', 'a'],
        ALLOWED_ATTR: ['style', 'href'],
        FORBID_ATTR: ['onerror', 'onclick', 'onload'],
        FORBID_TAGS: ['script', 'iframe', 'object', 'embed'],
    });
}

var UnorderedListIcon = function () {
    return (jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 16 16", children: jsx("path", { fill: "currentColor", d: "M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5m0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5m0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5M2 14a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0M2 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2" }) }));
};

var OrderedListIcon = function () {
    return (jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: jsxs("g", { fill: "none", children: [jsx("path", { d: "m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }), jsx("path", { fill: "currentColor", d: "M5.436 16.72a1.466 1.466 0 0 1 1.22 2.275a1.466 1.466 0 0 1-1.22 2.275c-.65 0-1.163-.278-1.427-.901a.65.65 0 1 1 1.196-.508a.18.18 0 0 0 .165.109c.109 0 .23-.03.23-.167c0-.1-.073-.143-.156-.154l-.051-.004a.65.65 0 0 1-.096-1.293l.096-.007c.102 0 .207-.037.207-.158c0-.137-.12-.167-.23-.167a.18.18 0 0 0-.164.11a.65.65 0 1 1-1.197-.509c.264-.622.777-.9 1.427-.9ZM20 18a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM6.08 9.945a1.552 1.552 0 0 1 .43 2.442l-.554.593h.47a.65.65 0 1 1 0 1.3H4.573a.655.655 0 0 1-.655-.654c0-.207.029-.399.177-.557L5.559 11.5c.11-.117.082-.321-.06-.392c-.136-.068-.249.01-.275.142l-.006.059a.65.65 0 0 1-.65.65c-.39 0-.65-.327-.65-.697a1.482 1.482 0 0 1 2.163-1.317ZM20 11a1 1 0 0 1 .117 1.993L20 13H9a1 1 0 0 1-.117-1.993L9 11zM6.15 3.39v3.24a.65.65 0 1 1-1.3 0V4.522a.65.65 0 0 1-.46-1.183l.742-.495a.655.655 0 0 1 1.018.545ZM20 4a1 1 0 0 1 .117 1.993L20 6H9a1 1 0 0 1-.117-1.993L9 4z" })] }) }));
};

var ToolbarButton = function (_a) {
    var active = _a.active, onClick = _a.onClick, icon = _a.icon, label = _a.label;
    return (jsx("button", { className: "px-2 py-1 rounded ".concat(active ? "bg-gray-500 text-white" : "bg-gray-100"), onClick: onClick, children: icon || label }));
};

var LinkDropdown = function (_a) {
    var open = _a.open, setOpen = _a.setOpen, linkUrl = _a.linkUrl, setLinkUrl = _a.setLinkUrl, insertLink = _a.insertLink;
    return (jsx(Dropdown, { open: open, onOpenChange: setOpen, trigger: ["click"], popupRender: function () { return (jsxs("div", { className: "p-2 bg-white border rounded shadow-md w-64", children: [jsx(Input, { placeholder: "https://example.com", value: linkUrl, onChange: function (e) { return setLinkUrl(e.target.value); }, onPressEnter: insertLink }), jsx("div", { className: "flex justify-end mt-2", children: jsx(Button, { size: "small", type: "primary", onClick: insertLink, children: "Insert" }) })] })); }, children: jsx(Button, { icon: jsx(LinkOutlined, {}), className: "px-2 py-1 rounded bg-gray-100" }) }));
};

var Editor = forwardRef(function (_, ref) {
    return (jsx("div", { ref: ref, className: "w-full h-60 overflow-y-auto p-2 border border-gray-300 rounded-lg focus:outline-none scrollbar-thin scrollbar-thumb-gray-400", contentEditable: true }));
});

function App() {
    var _a = useState(""), align = _a[0], setAlign = _a[1];
    var _b = useState(false), boldActive = _b[0], setBoldActive = _b[1];
    var _c = useState(false), italicActive = _c[0], setItalicActive = _c[1];
    var _d = useState(false), underlineActive = _d[0], setUnderlineActive = _d[1];
    var editorRef = useRef(null);
    var _e = useState(""), formatBlock = _e[0], setFormatBlock = _e[1];
    var _f = useState(false), orderedListActive = _f[0], setOrderedListActive = _f[1];
    var _g = useState(false), unorderedListActive = _g[0], setUnorderedListActive = _g[1];
    var _h = useState(false), linkDropdownOpen = _h[0], setLinkDropdownOpen = _h[1];
    var _j = useState(""), linkUrl = _j[0], setLinkUrl = _j[1];
    var handleSelectionChange = useCallback(function () {
        requestAnimationFrame(function () {
            var _a, _b;
            var newBold = document.queryCommandState("bold");
            var newItalic = document.queryCommandState("italic");
            var newUnderline = document.queryCommandState("underline");
            var newOrderedList = document.queryCommandState("insertOrderedList");
            var newUnorderedList = document.queryCommandState("insertUnorderedList");
            var newFormatBlock = (_a = document
                .queryCommandValue("formatBlock")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            if (newBold !== boldActive)
                setBoldActive(newBold);
            if (newItalic !== italicActive)
                setItalicActive(newItalic);
            if (newUnderline !== underlineActive)
                setUnderlineActive(newUnderline);
            if (newOrderedList !== orderedListActive)
                setOrderedListActive(newOrderedList);
            if (newUnorderedList !== unorderedListActive)
                setUnorderedListActive(newUnorderedList);
            if (newFormatBlock !== formatBlock)
                setFormatBlock(newFormatBlock);
            var selection = window.getSelection();
            if (!selection || selection.rangeCount === 0)
                return;
            var node = selection.anchorNode;
            while (node && node !== editorRef.current) {
                if (node.nodeType === 1) {
                    var display = window.getComputedStyle(node).display;
                    if (display === "block" || display === "flex")
                        break;
                }
                node = node.parentElement;
            }
            var newAlign = "";
            if (node && ((_b = editorRef.current) === null || _b === void 0 ? void 0 : _b.contains(node))) {
                var align_1 = window.getComputedStyle(node).textAlign;
                if (align_1 === "center")
                    newAlign = "center";
                else if (align_1 === "right")
                    newAlign = "right";
                else
                    newAlign = "left";
            }
            if (newAlign !== align)
                setAlign(newAlign);
            if (editorRef.current) {
                var dirtyHTML = editorRef.current.innerHTML;
                // console.log("dirty", dirtyHTML);
                var cleanHTML = sanitizeHTML(dirtyHTML);
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
    var insertLink = function () {
        var url = linkUrl.trim();
        if (!url)
            return;
        var selection = window.getSelection();
        if (!selection || selection.isCollapsed) {
            alert("Please select text to turn into a link.");
            return;
        }
        // Insert the link
        document.execCommand("createLink", false, url);
        // Post-process: add inline style to the newly created <a>
        var editor = editorRef.current;
        if (editor) {
            var anchors = editor.getElementsByTagName("a");
            for (var i = 0; i < anchors.length; i++) {
                var a = anchors[i];
                if (a.getAttribute("href") === url) {
                    a.setAttribute("style", "text-decoration: none;");
                }
            }
        }
        setLinkUrl("");
        setLinkDropdownOpen(false);
    };
    useEffect(function () {
        var editor = editorRef.current;
        if (!editor)
            return;
        document.addEventListener("selectionchange", handleSelectionChange);
        editor.addEventListener("input", handleSelectionChange);
        return function () {
            document.removeEventListener("selectionchange", handleSelectionChange);
            editor.removeEventListener("input", handleSelectionChange);
        };
    }, [handleSelectionChange]);
    var exec = function (command, value) {
        var _a;
        var selection = window.getSelection();
        var isCollapsed = selection && selection.isCollapsed;
        var isFormatCmd = command === "bold" || command === "italic" || command === "underline";
        if (isFormatCmd &&
            isCollapsed &&
            editorRef.current &&
            document.activeElement === editorRef.current) {
            document.execCommand(command, false, value);
            document.execCommand("insertHTML", false, "<span>\u200B</span>");
            var range = document.createRange();
            var editor = editorRef.current;
            if (editor.lastChild) {
                range.setStartAfter(editor.lastChild);
                range.collapse(true);
                selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
                selection === null || selection === void 0 ? void 0 : selection.addRange(range);
            }
            // Update the bold state after executing the command
            handleSelectionChange();
        }
        else {
            document.execCommand(command, false, value);
            // Update the bold state after executing the command
            handleSelectionChange();
        }
        (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return (jsxs("div", { className: "w-[500px] h-auto border-2 border-blue-500 p-3 rounded-lg shadow-lg mx-auto mt-10", children: [jsxs("div", { className: "flex flex-wrap mb-2 gap-1", children: [jsx(ToolbarButton, { active: boldActive, onClick: function () { return exec("bold"); }, icon: jsx(BoldIcon, {}) }), jsx(ToolbarButton, { active: italicActive, onClick: function () { return exec("italic"); }, icon: jsx(ItalicIcon, {}) }), jsx(ToolbarButton, { active: underlineActive, onClick: function () { return exec("underline"); }, icon: jsx(Underline, {}) }), jsx(ToolbarButton, { active: formatBlock === "h1", onClick: function () { return exec("formatBlock", "H1"); }, label: "H1" }), jsx(ToolbarButton, { active: formatBlock === "h2", onClick: function () { return exec("formatBlock", "H2"); }, label: "H2" }), jsx(ToolbarButton, { active: formatBlock === "h3", onClick: function () { return exec("formatBlock", "H3"); }, label: "H3" }), jsx(ToolbarButton, { active: unorderedListActive, onClick: function () { return exec("insertUnorderedList"); }, icon: jsx(UnorderedListIcon, {}) }), jsx(ToolbarButton, { active: orderedListActive, onClick: function () { return exec("insertOrderedList"); }, icon: jsx(OrderedListIcon, {}) }), jsx(ToolbarButton, { active: align === "left", onClick: function () { return exec("justifyLeft"); }, icon: jsx(AlignLeftIcons, {}) }), jsx(ToolbarButton, { active: align === "center", onClick: function () { return exec("justifyCenter"); }, icon: jsx(AlignCenterIcons, {}) }), jsx(ToolbarButton, { active: align === "right", onClick: function () { return exec("justifyRight"); }, icon: jsx(AlignRightIcons, {}) }), jsx(ToolbarButton, { onClick: function () { return exec("undo"); }, label: "Undo" }), jsx(ToolbarButton, { onClick: function () { return exec("redo"); }, label: "Redo" }), jsx(LinkDropdown, { open: linkDropdownOpen, setOpen: setLinkDropdownOpen, linkUrl: linkUrl, setLinkUrl: setLinkUrl, insertLink: insertLink })] }), jsx(Editor, { ref: editorRef })] }));
}

var TextEditor = function () {
    var _a = useState(""), align = _a[0], setAlign = _a[1];
    var _b = useState(false), boldActive = _b[0], setBoldActive = _b[1];
    var _c = useState(false), italicActive = _c[0], setItalicActive = _c[1];
    var _d = useState(false), underlineActive = _d[0], setUnderlineActive = _d[1];
    var editorRef = useRef(null);
    var _e = useState(""), formatBlock = _e[0], setFormatBlock = _e[1];
    var _f = useState(false), orderedListActive = _f[0], setOrderedListActive = _f[1];
    var _g = useState(false), unorderedListActive = _g[0], setUnorderedListActive = _g[1];
    var _h = useState(false), linkDropdownOpen = _h[0], setLinkDropdownOpen = _h[1];
    var _j = useState(""), linkUrl = _j[0], setLinkUrl = _j[1];
    var handleSelectionChange = useCallback(function () {
        requestAnimationFrame(function () {
            var _a, _b;
            var newBold = document.queryCommandState("bold");
            var newItalic = document.queryCommandState("italic");
            var newUnderline = document.queryCommandState("underline");
            var newOrderedList = document.queryCommandState("insertOrderedList");
            var newUnorderedList = document.queryCommandState("insertUnorderedList");
            var newFormatBlock = (_a = document
                .queryCommandValue("formatBlock")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            if (newBold !== boldActive)
                setBoldActive(newBold);
            if (newItalic !== italicActive)
                setItalicActive(newItalic);
            if (newUnderline !== underlineActive)
                setUnderlineActive(newUnderline);
            if (newOrderedList !== orderedListActive)
                setOrderedListActive(newOrderedList);
            if (newUnorderedList !== unorderedListActive)
                setUnorderedListActive(newUnorderedList);
            if (newFormatBlock !== formatBlock)
                setFormatBlock(newFormatBlock);
            var selection = window.getSelection();
            if (!selection || selection.rangeCount === 0)
                return;
            var node = selection.anchorNode;
            while (node && node !== editorRef.current) {
                if (node.nodeType === 1) {
                    var display = window.getComputedStyle(node).display;
                    if (display === "block" || display === "flex")
                        break;
                }
                node = node.parentElement;
            }
            var newAlign = "";
            if (node && ((_b = editorRef.current) === null || _b === void 0 ? void 0 : _b.contains(node))) {
                var align_1 = window.getComputedStyle(node).textAlign;
                if (align_1 === "center")
                    newAlign = "center";
                else if (align_1 === "right")
                    newAlign = "right";
                else
                    newAlign = "left";
            }
            if (newAlign !== align)
                setAlign(newAlign);
            if (editorRef.current) {
                var dirtyHTML = editorRef.current.innerHTML;
                // console.log("dirty", dirtyHTML);
                var cleanHTML = sanitizeHTML(dirtyHTML);
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
    var insertLink = function () {
        var url = linkUrl.trim();
        if (!url)
            return;
        var selection = window.getSelection();
        if (!selection || selection.isCollapsed) {
            alert("Please select text to turn into a link.");
            return;
        }
        // Insert the link
        document.execCommand("createLink", false, url);
        // Post-process: add inline style to the newly created <a>
        var editor = editorRef.current;
        if (editor) {
            var anchors = editor.getElementsByTagName("a");
            for (var i = 0; i < anchors.length; i++) {
                var a = anchors[i];
                if (a.getAttribute("href") === url) {
                    a.setAttribute("style", "text-decoration: none;");
                }
            }
        }
        setLinkUrl("");
        setLinkDropdownOpen(false);
    };
    useEffect(function () {
        var editor = editorRef.current;
        if (!editor)
            return;
        document.addEventListener("selectionchange", handleSelectionChange);
        editor.addEventListener("input", handleSelectionChange);
        return function () {
            document.removeEventListener("selectionchange", handleSelectionChange);
            editor.removeEventListener("input", handleSelectionChange);
        };
    }, [handleSelectionChange]);
    var exec = function (command, value) {
        var _a;
        var selection = window.getSelection();
        var isCollapsed = selection && selection.isCollapsed;
        var isFormatCmd = command === "bold" || command === "italic" || command === "underline";
        if (isFormatCmd &&
            isCollapsed &&
            editorRef.current &&
            document.activeElement === editorRef.current) {
            document.execCommand(command, false, value);
            document.execCommand("insertHTML", false, "<span>\u200B</span>");
            var range = document.createRange();
            var editor = editorRef.current;
            if (editor.lastChild) {
                range.setStartAfter(editor.lastChild);
                range.collapse(true);
                selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
                selection === null || selection === void 0 ? void 0 : selection.addRange(range);
            }
            // Update the bold state after executing the command
            handleSelectionChange();
        }
        else {
            document.execCommand(command, false, value);
            // Update the bold state after executing the command
            handleSelectionChange();
        }
        (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return (jsxs("div", { className: "w-[500px] h-auto border-2 border-blue-500 p-3 rounded-lg shadow-lg mx-auto mt-10", children: [jsxs("div", { className: "flex flex-wrap mb-2 gap-1", children: [jsx(ToolbarButton, { active: boldActive, onClick: function () { return exec("bold"); }, icon: jsx(BoldIcon, {}) }), jsx(ToolbarButton, { active: italicActive, onClick: function () { return exec("italic"); }, icon: jsx(ItalicIcon, {}) }), jsx(ToolbarButton, { active: underlineActive, onClick: function () { return exec("underline"); }, icon: jsx(Underline, {}) }), jsx(ToolbarButton, { active: formatBlock === "h1", onClick: function () { return exec("formatBlock", "H1"); }, label: "H1" }), jsx(ToolbarButton, { active: formatBlock === "h2", onClick: function () { return exec("formatBlock", "H2"); }, label: "H2" }), jsx(ToolbarButton, { active: formatBlock === "h3", onClick: function () { return exec("formatBlock", "H3"); }, label: "H3" }), jsx(ToolbarButton, { active: unorderedListActive, onClick: function () { return exec("insertUnorderedList"); }, icon: jsx(UnorderedListIcon, {}) }), jsx(ToolbarButton, { active: orderedListActive, onClick: function () { return exec("insertOrderedList"); }, icon: jsx(OrderedListIcon, {}) }), jsx(ToolbarButton, { active: align === "left", onClick: function () { return exec("justifyLeft"); }, icon: jsx(AlignLeftIcons, {}) }), jsx(ToolbarButton, { active: align === "center", onClick: function () { return exec("justifyCenter"); }, icon: jsx(AlignCenterIcons, {}) }), jsx(ToolbarButton, { active: align === "right", onClick: function () { return exec("justifyRight"); }, icon: jsx(AlignRightIcons, {}) }), jsx(ToolbarButton, { onClick: function () { return exec("undo"); }, label: "Undo" }), jsx(ToolbarButton, { onClick: function () { return exec("redo"); }, label: "Redo" }), jsx(LinkDropdown, { open: linkDropdownOpen, setOpen: setLinkDropdownOpen, linkUrl: linkUrl, setLinkUrl: setLinkUrl, insertLink: insertLink })] }), jsx(Editor, { ref: editorRef })] }));
};

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsx(React.StrictMode, { children: jsx(App, {}) }));

export { TextEditor };
