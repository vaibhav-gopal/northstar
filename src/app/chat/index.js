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

async function sendPromptTest() {


  return {
    contents: [{ role: 'user', parts: [{ text: `Make an ICS file for a schedule for a student that has the following format. 

    BEGIN:VCALENDAR
    VERSION:2.0
    PRODID:-//Google Inc//Google Calendar 70.9054//EN
    CALSCALE:GREGORIAN
    METHOD:PUBLISH
    X-WR-CALNAME:Student Schedule
    X-WR-TIMEZONE:America/Los_Angeles
    BEGIN:VTIMEZONE
    TZID:America/Los_Angeles
    X-LIC-LOCATION:America/Los_Angeles
    BEGIN:STANDARD
    TZOFFSETFROM:-0800
    TZOFFSETTO:-0800
    TZNAME:PST
    DTSTART:19700308T020000
    RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
    END:STANDARD
    BEGIN:DAYLIGHT
    TZOFFSETFROM:-0700
    TZOFFSETTO:-0700
    TZNAME:PDT
    DTSTART:19701101T020000
    RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
    END:DAYLIGHT
    END:VTIMEZONE
    BEGIN:VEVENT
    UID:040000008200E000-102A1862-00540000A3030000
    DTSTART;TZID=America/Los_Angeles:20230828T080000
    DTEND;TZID=America/Los_Angeles:20230828T090000
    RRULE:FREQ=WEEKLY;UNTIL=20240607T170000Z
    SUMMARY:English class
    LOCATION:Room 101
    END:VEVENT
    BEGIN:VEVENT
    UID:040000008200E000-102A1862-00540000A3030100
    DTSTART;TZID=America/Los_Angeles:20230828T090000
    DTEND;TZID=America/Los_Angeles:20230828T100000
    RRULE:FREQ=WEEKLY;UNTIL=20240607T170000Z
    SUMMARY:Math class
    LOCATION:Room 202
    END:VEVENT
    BEGIN:VEVENT
    UID:040000008200E000-102A1862-00540000A3030200
    DTSTART;TZID=America/Los_Angeles:20230828T100000
    DTEND;TZID=America/Los_Angeles:20230828T110000
    RRULE:FREQ=WEEKLY;UNTIL=20240607T170000Z
    SUMMARY:Science class
    LOCATION:Room 303
    END:VEVENT
    BEGIN:VEVENT
    UID:040000008200E000-102A1862-00540000A3030300
    DTSTART;TZID=America/Los_Angeles:20230828T110000
    DTEND;TZID=America/Los_Angeles:20230828T120000
    RRULE:FREQ=WEEKLY;UNTIL=20240607T170000Z
    SUMMARY:Lunch
    LOCATION:Cafeteria
    END:VEVENT
    
    In addition, make a JSON file in the below format that contains the locations (longitude and latitude) and times in the calendar where the user has to be someplace. Must follow the format but can change the content appropriately.
    {
      "events": [
        {
          "name": "English class",
          "location": {
            "longitude": -118.2437,
            "latitude": 34.0522
          },
          "time": {
            "start": "2023-08-28T08:00:00",
            "end": "2023-08-28T09:00:00"
          }
        },
        {
          "name": "Math class",
          "location": {
            "longitude": -118.2437,
            "latitude": 34.0522
          },
          "time": {
            "start": "2023-08-28T09:00:00",
            "end": "2023-08-28T10:00:00"
          }
        }]}` }] }],
  };
}

async function sendPrompt() {
  try {
    console.log("Sending prompt...")
    //const prompt = document.getElementById("textInput");
    const prompt = `
    BEGIN:VCALENDAR
    VERSION:2.0
    PRODID:-//Google Inc//Google Calendar 70.9054//EN
    CALSCALE:GREGORIAN
    METHOD:PUBLISH
    X-WR-CALNAME:Student Schedule
    X-WR-TIMEZONE:America/Los_Angeles
    BEGIN:VTIMEZONE
    TZID:America/Los_Angeles
    X-LIC-LOCATION:America/Los_Angeles
    BEGIN:STANDARD
    TZOFFSETFROM:-0800
    TZOFFSETTO:-0800
    TZNAME:PST
    DTSTART:19700308T020000
    RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
    END:STANDARD
    BEGIN:DAYLIGHT
    TZOFFSETFROM:-0700
    TZOFFSETTO:-0700
    TZNAME:PDT
    DTSTART:19701101T020000
    RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
    END:DAYLIGHT
    END:VTIMEZONE
    BEGIN:VEVENT
    UID:040000008200E000-102A1862-00540000A3030000
    DTSTART;TZID=America/Los_Angeles:20230828T080000
    DTEND;TZID=America/Los_Angeles:20230828T090000
    RRULE:FREQ=WEEKLY;UNTIL=20240607T170000Z
    SUMMARY:English class
    LOCATION:Room 101
    END:VEVENT
    BEGIN:VEVENT
    UID:040000008200E000-102A1862-00540000A3030100
    DTSTART;TZID=America/Los_Angeles:20230828T090000
    DTEND;TZID=America/Los_Angeles:20230828T100000
    RRULE:FREQ=WEEKLY;UNTIL=20240607T170000Z
    SUMMARY:Math class
    LOCATION:Room 202
    END:VEVENT
    BEGIN:VEVENT
    UID:040000008200E000-102A1862-00540000A3030200
    DTSTART;TZID=America/Los_Angeles:20230828T100000
    DTEND;TZID=America/Los_Angeles:20230828T110000
    RRULE:FREQ=WEEKLY;UNTIL=20240607T170000Z
    SUMMARY:Science class
    LOCATION:Room 303
    END:VEVENT
    BEGIN:VEVENT
    UID:040000008200E000-102A1862-00540000A3030300
    DTSTART;TZID=America/Los_Angeles:20230828T110000
    DTEND;TZID=America/Los_Angeles:20230828T120000
    RRULE:FREQ=WEEKLY;UNTIL=20240607T170000Z
    SUMMARY:Lunch
    LOCATION:Cafeteria
    END:VEVENT
    `
    console.log("Prompt received: ", prompt);

    return {
      contents: [{
        role: 'user',
        parts: [{ text: `Make changes to this ICS file to improve the schedule for a student and give them the best possible performance thorughout the day. Output the improved ICS file:\n${prompt}` }],
      }],
    };
  } catch (error) {
    console.error('Error reading file:', error.message);
    // Handle the error or return a default prompt
    return {
      contents: [{
        role: 'user',
        parts: [{ text: 'Default prompt text' }],
      }],
    };
  }
}

async function generateContent() {
  const req = await sendPrompt();

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
  let finalResponse = rawResponse['candidates'][0]['content']['parts'][0]['text'].replace("```", "");
  console.log(finalResponse)

  const calendarMatch = finalResponse.match(/BEGIN:VCALENDAR([\s\S]*?)END:VCALENDAR/);
  const calendarString = calendarMatch ? calendarMatch[0] : '';

  // Extract the content between the first "{" and the last "}"
  let jsonString = '';
  const jsonMatch = finalResponse.match(/\{([\s\S]*)\}/);
  if (jsonMatch) {
    jsonString = "{" + jsonMatch[1] + "}";
  }

  // Function to generate a random 6-digit number
  function generateRandomNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  // Write finalResponse to a text file
  const icsFileName = `calendar_${generateRandomNumber()}.ics`;
  const JSONFileName = "time_loc_data.json";
  fs.writeFileSync(icsFileName, calendarString, 'utf-8');
  console.log(`Results written to ${icsFileName}`);

  fs.writeFileSync(JSONFileName, jsonString, 'utf-8');  
  console.log(`Results written to ${JSONFileName}`);
}

generateContent();