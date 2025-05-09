import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

// Widget component for option buttons
const Options = (props) => {
  const options = [
    { text: "Explain a physics concept", handler: () => props.actionProvider.handleExplain(), id: 1 },
    { text: "Solve a physics problem", handler: () => props.actionProvider.handleProblem(), id: 2 },
    { text: "Physics formulas", handler: () => props.actionProvider.handleFormulas(), id: 3 },
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
            backgroundColor: "#007bff",
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

// Config object for the chatbot
const config = {
  botName: "PhysicsBot",
  initialMessages: [
    {
      type: "bot",
      id: "1",
      message: "Hello! I’m your Physics Assistant. How can I help you today?",
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

// ActionProvider class to handle bot responses
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleExplain = () => {
    const message = this.createChatBotMessage(
      "Sure! Please tell me which physics concept you'd like explained."
    );
    this.addMessageToState(message);
  };

  handleProblem = () => {
    const message = this.createChatBotMessage(
      "Describe the physics problem you want help with."
    );
    this.addMessageToState(message);
  };

  handleFormulas = () => {
    const message = this.createChatBotMessage(
      "Here are some common physics formulas:\n- Newton's Second Law: F = ma\n- Kinetic Energy: KE = 1/2 mv²\n- Ohm's Law: V = IR"
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

// MessageParser class to interpret user input
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCase = message.toLowerCase();

    if (lowerCase.includes("explain") || lowerCase.includes("concept")) {
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

// Main component
const PhysicsAssistant = () => {
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

export default PhysicsAssistant;
