import { EventHandler } from '@create-figma-plugin/utilities'

export interface RunCode extends EventHandler {
  name: 'RUN_CODE'
  handler: (code: string) => void
}

export interface CloseHandler extends EventHandler {
  name: 'CLOSE'
  handler: () => void
}
