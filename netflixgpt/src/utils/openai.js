import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
  // This is the default and can be omitted
});

export default openai;
