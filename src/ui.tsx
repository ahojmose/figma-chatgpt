import {Button, Columns, Container, Muted, render, Text, TextboxMultiline, VerticalSpace} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'
import { CloseHandler, RunCode } from './types'

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

function Plugin() {
  //console.log(process.env.OPENAI_API_KEY);
  async function runCompletion (prompt:string) {

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {role: "system", content: "You are a design assistant helping a product designer working in Figma using the Figma plugin API."},
          {role: "user", content: prompt + ". Wrap any code examples in <code></code> blocks."}
        ],
      });
      console.log(completion.data.choices[0].message.content);
      emit<RunCode>('RUN_CODE', completion.data.choices[0].message.content)
      //runCode(completion.data.choices[0].message.content)
      //emit<GenerateText>('GENERATE_TEXT', completion.data.choices[0].text)
  
    } catch (e) {
      console.log("Error getting GPT completion: ", e)
      throw e
    }
  }

  
  /*
  const runCode = (code: string) => {
    return eval(code);
  }
  */
  //const [count, setCount] = useState<number | null>(5)
  const [countString, setCountString] = useState('What up?')

  const handleCreateRectanglesButtonClick = useCallback(
    function () {
      if (countString !== null) {
        runCompletion(countString)
      }
    },
    [countString]
  )
  const handleCloseButtonClick = useCallback(function () {
    emit<CloseHandler>('CLOSE')
  }, [])
  return (
    <Container space="medium">
      <VerticalSpace space="large" />
      <Text>
        <Muted>Prompt</Muted>
      </Text>
      <VerticalSpace space="small" />
      <TextboxMultiline
        onValueInput={setCountString}
        value={countString}
        variant="border"
      />
      <VerticalSpace space="extraLarge" />
      <Columns space="extraSmall">
        <Button fullWidth onClick={handleCreateRectanglesButtonClick}>
          Create
        </Button>
      </Columns>
      <VerticalSpace space="small" />
    </Container>
  )

}


/*
async function makeRequest() {
  const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  const apiKey = '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';
  const prompt = 'Hello, world!';

  try {
    const response = await axios.post(url, { prompt }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
*/
export default render(Plugin)
