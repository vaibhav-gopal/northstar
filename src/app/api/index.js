const {VertexAI} = require('@google-cloud/vertexai');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({project: 'trusty-drive-413218', location: 'northamerica-northeast1'});
const model = 'gemini-pro';

// Instantiate the models
const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generation_config: {
    "max_output_tokens": 2048,
    "temperature": 0.9,
    "top_p": 1
},
  safety_settings: [],
});

async function generateContent() {
  const req = {
    contents: [{ role: 'user', parts: [{ text: "make a schedule for a student. Ensure it is in the format of an ICS file" }] }],
  };

  const streamingResp = await generativeModel.generateContentStream(req);

  for await (const item of streamingResp.stream) {
    if (item?.content?.role === 'model' && Array.isArray(item.content.parts)) {
      for (const part of item.content.parts) {
        if (part.text) {
          console.log('stream chunk:', part.text);
        }
      }
    }
  }

  //console.log('aggregated response:', JSON.stringify(await streamingResp.response));
  let rawResponse = await streamingResp.response;
  let finalResponse = rawResponse['candidates'][0]['content']['parts'][0]['text']
  console.log(finalResponse)

  // Write finalResponse to a text file
  const icsFileName = 'calendar.ics';
  fs.writeFileSync(icsFileName, finalResponse, 'utf-8');

  console.log(`Results written to ${icsFileName}`);
}

generateContent();