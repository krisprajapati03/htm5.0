require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY; // Add your API key here
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
    temperature: 0.5, // Lowered for more focused responses
    topP: 0.9,        // Slightly lower to make responses more focused
    topK: 50,         // Adjusted for balance between diversity and coherence
    maxOutputTokens: 2000, // Reduced to a more practical limit
    responseMimeType: "application/json",
};


const getQuestion = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You generate me a question on given topics and level of questions and user give an answer for every question.
Don't mention a topics and level
If the job description is provided, create question that align withthe job requirements and skill set mentioned in the job description.
Just give question like you are interviewer and you want to hire a fresher.
Ask question in a way that user can understand and answer it.
Ask question like real interviewer.
For Basic level ask questions like small company hire a fresher.
For Intermediate level ask questions like medium company hire a fresher.
For Advance level ask questions like big company hire a fresher.

example: 
[
    {"number": 1, "question": "What is the difference between a linear and a non-linear data structure? Give an example of each."},
    {"number": 2, "question": "What is the purpose of an abstract class, and how is it different from an interface?"},
    {"number": 3, "question": "Describe the process of inserting and deleting elements in a binary search tree."},
    {"number": 4, "question": "What is encapsulation in object-oriented programming, and why is it important?"},
    {"number": 5, "question": "Explain the concept of a hash table and how it can be used to efficiently store and retrieve data."}
]

Guidelines for AI:

-Do not explicitly mention the level (basic, intermediate, advanced) in the questions.
-Create questions that align with the job requirements and skill set mentioned in the job description.
-Frame the questions naturally, as if conducting a real-world interview.
-Ensure questions are open-ended, clear, and allow candidates to demonstrate their understanding and thought process effectively.

`,
});

exports.generateQuestion = async (topic, level, numberOfQuestions, jobDescription) => {
    const chatSession = getQuestion.startChat({
        generationConfig,
        history: [
        ],
    });

    let inputMessage;
    if (jobDescription) {
        inputMessage = `Generate me ${numberOfQuestions} questions based on the job description: ${jobDescription}`;
    } else {
        inputMessage = `Generate me ${numberOfQuestions} questions on ${topic} at ${level} level`;
    } 


    const result = await chatSession.sendMessage(`${inputMessage}`);

    // Extract and clean the response text
    const rawResponse = result.response.text();

    // Replace invalid characters and make it valid JSON format
    const correctedResponse = rawResponse
        .replace(/^```json/, '')  // Remove the initial code block notation
        .replace(/```$/, '')      // Remove the ending code block notation
        .replace(/\\\"/g, '"')    // Remove unnecessary escape characters

    // Parse the cleaned JSON string
    try {
        const questionsArray = JSON.parse(correctedResponse);
        return questionsArray;
    } catch (error) {
        console.error("Error parsing JSON:", error);
        console.log("Error genrate the questions")
        return null; // Return null if there was an error
    }
};

const getFeedback = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You are now tasked with providing detailed feedback on the given answers to the questions like interviewer. For each answer, provide the following:

1. **Marks**: Score the answer out of 10 for job interview, like college student give intervew for fresher role.
2. **Area of Improvement**: Provide specific suggestions to improve the answer.

example: '{feedback_of_questions: [{
      "number":1,
      "question":"What is a data structure? Explain different types of data structures and provide an example for each.",
      "answer":"Data structure is a way to store a data in memory. Two types one is a linear like array and second is non-linear like tree",
      "marks":3,
      "area_of_improvement":"The answer lacks depth and detail. It should be expanded to include more types of data structures, and provide a clearer explanation of each type. For example, the answer should include examples of linear data structures such as stacks, queues, and lists. It should also provide examples of non-linear data structures such as graphs and trees, along with brief descriptions of their properties and use cases."
   },
    {
      "number":2,
      "question":"What is the difference between a linear and a non-linear data structure? Give an example of each.",
      "answer":"Linear data structure is a structure in which elements are stored in a sequential manner. Non-linear data structure is a structure in which elements are not stored in a sequential manner. Example of linear data structure is array and example of non-linear data structure is tree",
      "marks":2,
      "area_of_improvement":"The answer is too brief and lacks detail. It should provide a more comprehensive explanation of the differences between linear and non-linear data structures, including their characteristics and examples. The answer should also include a discussion of how operations are performed on these data structures, and the advantages and disadvantages of each type."
      },
   ],
   "result":{
        "examName":"Data Structures Quiz",
        "overallFeedback":"The answers are too brief and lack details. Focus on providing a clear and comprehensive explanation of data structures, including their types, characteristics, and examples. You should also understand the difference between linear and non-linear data structures, and how to perform various operations on them."
}}'
Maintain the feedback format as shown in the example.
`,

});

exports.generateFeedback = async (data) => {
    const chatSession = getFeedback.startChat({
        generationConfig,
        history: [],
    });

    try {
        // Send data and get result
        const result = await chatSession.sendMessage(`${data}`);
        const rawResponse = result.response.text();

        // Clean the response text
        let cleanedResponse = rawResponse
            .replace(/^```json/, '') // Remove leading ```json if present
            .replace(/```$/, '')     // Remove trailing ``` if present
            .replace(/\\\"/g, '"')   // Replace escaped quotes with actual quotes
            .replace(/\\n/g, '\n')   // Replace escaped newlines with actual newlines
            .trim();                 // Trim any extra whitespace

        // Check if the cleaned response is a valid JSON string
        if (!cleanedResponse || cleanedResponse === '') {
            console.error("Cleaned response is empty or invalid");
            return null;
        }

        // Parse the cleaned JSON string
        try {
            const feedbackObject = JSON.parse(cleanedResponse);
            return feedbackObject;
        } catch (error) {
            console.error("Error parsing JSON:", error);
            return null; // Return null if there was an error
        }
    } catch (error) {
        console.error("Error during chat session:", error);
        return null; // Return null if there was an error
    }
};


