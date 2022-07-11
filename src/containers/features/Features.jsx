import React from "react";
import { Feature } from "../../components";
import "./features.css";

// feature data Array

const featuresData = [
  {
    title: "Example Refecting GPT-3 Working",
    text: "Generative Pre-trained Transformer 3 (GPT-3) is a highly advanced language model from OpenAI that can generate written text that virtually indistinguishable from text written by human.",
  },
  {
    title: "Become ",
    text: "Being trained on the dataset of half a trillion words, GPT-3 can recognize splendid linguistics patters incorporated in that.",
  },
  {
    title: "Specifying GPT-3: Brief Touch",
    text: "For a short description of GPT-3, “ It is a language model that employs machine learning algorithms to translate text, answer questions, and compose text predictively. By examining an array of words, texts, or other relevant data, GPT-3 operates and develops on these examples to generate a completely authentic outcome in the context of a paragraph or an image.”",
  },
  {
    title: "Latest news",
    text: "Sharif Shameem, the founder of debuild.co, a startup that lets developers in making apps with least effort, has leveraged GPT-3 to produce code. He tweeted, “This is mind-blowing. With GPT-3, I built a layout generator where you just describe any layout you want, and it generates the JSX code for you.”",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
