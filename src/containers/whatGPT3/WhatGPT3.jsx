import React from "react";
import { Feature } from "../../components";
import "./whatgpt3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="GPT-3 is the third version of the GPT language model from OpenAI.
          OpenAI's GPT-3 is a language model that offers a multifaceted 'textin, text out' interface that can be applied to virtually any task.
          It can produce code, stories, recipes, and more."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="OpenAI's GPT-3 engine is also a remarkable tool for chatbots since its output text is indistinguishable from human text. A fitting integration with this is Discord chatbots."
        />
        <Feature
          title="Knowledgebase"
          text="Handle responses with GPT-3. How GPT-3 and OpenAI API work. The of the OpenAI API is the completions endpoint: You input some text as a prompt, and the model will generate a text completion based on the context or the pattern of the prompt."
        />
        <Feature
          title="Education"
          text="In this tutorial we walked through how to use the OpenAI API with Discord's API to create an intelligent chatbot that keeps up a conversation and answers questions for you."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
