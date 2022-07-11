import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          Build a GPT-3 Discord Chatbot with Node.js
        </h1>
        <p>
          OpenAI’s GPT-3 is a language model that offers a multifaceted “text
          in, text out” interface that can be applied to virtually any task. It
          can produce code, stories, recipes, and more. The engine is capable of
          doing anything - it can even do your homework for you! OpenAI's GPT-3
          engine is also a remarkable tool for chatbots since its output text is
          indistinguishable from human text. A fitting integration with this is
          Discord chatbots.{" "}
        </p>
        <p>
          In recent years, Discord has become the central messaging platform for
          communities especially with the help of Discord bots. Through Discords
          extensive API, developers are able to build robust bots that are
          capable of various actions such as automating tasks and chatting with
          users.
        </p>
        <p>
          With the gaining traction of both of these technologies, I decided to
          combine them to build an intelligent but fun chatbot.
        </p>

        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
