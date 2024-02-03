const {VertexAI} = require('@google-cloud/vertexai');

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({project: 'trusty-drive-413218', location: 'us-central1'});
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
        contents: [{ role: 'user', parts: [{ text: "make a schedule for a student" }] }], // put prompt here
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
      let r = await streamingResp.response;
      console.log(r['candidates'][0]['content']['parts'][0]['text']);

};

generateContent();