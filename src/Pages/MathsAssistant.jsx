import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

const Options = (props) => {
  const options = [
    { text: "Explain a math topic", handler: () => props.actionProvider.handleExplain(), id: 1 },
    { text: "Solve a math problem", handler: () => props.actionProvider.handleProblem(), id: 2 },
    { text: "Math formulas", handler: () => props.actionProvider.handleFormulas(), id: 3 },
  ];

  return (
    <div style={{ marginTop: "10px" }}>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          style={{
            margin: "5px",
            padding: "8px 12px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#28a745",
            color: "white",
            cursor: "pointer",
          }}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

const config = {
  botName: "MathsBot",
  initialMessages: [
    {
      type: "bot",
      id: "1",
      message: "Hello! I’m your Maths Assistant. How can I help you today?",
      widget: "options",
    },
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
      mapStateToProps: ["messages"],
    },
  ],
};

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleExplain = () => {
    const message = this.createChatBotMessage(
      "Sure! What math topic would you like me to explain?"
    );
    this.addMessageToState(message);
  };

  handleProblem = () => {
    const message = this.createChatBotMessage(
      "Please describe the math problem you want help with."
    );
    this.addMessageToState(message);
  };

  handleFormulas = () => {
    const message = this.createChatBotMessage(
      "Here are some common math formulas:\n- Quadratic Formula: x = [-b ± √(b²-4ac)]/(2a)\n- Area of Circle: A = πr²\n- Pythagorean Theorem: a² + b² = c²"
    );
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCase = message.toLowerCase();

    if (lowerCase.includes("explain") || lowerCase.includes("topic")) {
      this.actionProvider.handleExplain();
    } else if (lowerCase.includes("problem") || lowerCase.includes("solve")) {
      this.actionProvider.handleProblem();
    } else if (lowerCase.includes("formula") || lowerCase.includes("formulas")) {
      this.actionProvider.handleFormulas();
    } else {
      const defaultMessage = this.actionProvider.createChatBotMessage(
        "Sorry, I didn't understand. Please choose an option."
      );
      this.actionProvider.addMessageToState(defaultMessage);
    }
  }
}

const MathsAssistant = () => {
  return (
    <div style={{ maxWidth: "250px", margin: "40px auto" }}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default MathsAssistant;
