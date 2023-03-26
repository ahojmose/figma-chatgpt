import { once, on, showUI } from '@create-figma-plugin/utilities'

import { CloseHandler, RunCode } from './types'

export default function () {

  on<RunCode>('RUN_CODE', function (code: string) {
    console.log("Run code")

    let hasCodeMarkup
    let regex

    if (code.indexOf("```javascript") != -1) {
      hasCodeMarkup = "```javascript"
      regex = /```javascript\n([^`]+)```/g;
    } else if (code.indexOf("```js") != -1) {
      hasCodeMarkup = "```js"
      regex = /```js\n([^`]+)```/g;
    } else if (code.indexOf("```typescript") != -1) {
      hasCodeMarkup = "```typescript"
      regex = /```typescript\n([^`]+)```/g;
    } else if (code.indexOf("```") != -1) {
      hasCodeMarkup = "```"
      regex = /```([^`]+)```/g;
    } else if (code.indexOf("<code>") != -1) {
      hasCodeMarkup = "<code>"
      regex = /<code>(.*?)<\/code>/s
    }
  
    if(regex) {
      const codeSnippet = regex.exec(code)![1];
      code = codeSnippet
      console.log("NEW CODE")
      console.log(code)
    }
    
    eval(code);
  })

  once<CloseHandler>('CLOSE', function () {
    figma.closePlugin()
  })

  showUI({
    height: 200,
    width: 240
  })

  const fontLoading = async () => {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" })
    await figma.loadFontAsync({ family: "Roboto", style: "Regular" })
  }
  
  fontLoading().then(() => {
    console.log("Font loaded");
  })
}


