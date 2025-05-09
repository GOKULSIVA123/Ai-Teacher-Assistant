import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

const Options = (props) => {
  const options = [
    { text: "Explain a chemistry concept", handler: () => props.actionProvider.handleExplain(), id: 1 },
    { text: "Help with chemical equations", handler: () => props.actionProvider.handleEquations(), id: 2 },
    { text: "Periodic table info", handler: () => props.actionProvider.handlePeriodicTable(), id: 3 },
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
            backgroundColor: "#dc3545",
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
  botName: "ChemistryBot",
  initialMessages: [
    {
      type: "bot",
      id: "1",
      message: "Hello! I’m your Chemistry Assistant. How can I help you today?",
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
      "Sure! What chemistry concept would you like me to explain?"
    );
    this.addMessageToState(message);
  };

  handleEquations = () => {
    const message = this.createChatBotMessage(
      "I can help you balance chemical equations. Please provide the equation you need help with."
    );
    this.addMessageToState(message);
  };

  handlePeriodicTable = () => {
    const message = this.createChatBotMessage(
      "The periodic table organizes elements by increasing atomic number and groups with similar properties."
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

    if (lowerCase.includes("explain") || lowerCase.includes("concept")) {
      this.actionProvider.handleExplain();
    } else if (lowerCase.includes("equation") || lowerCase.includes("balance")) {
      this.actionProvider.handleEquations();
    } else if (lowerCase.includes("periodic")) {
      this.actionProvider.handlePeriodicTable();
    } else {
      const defaultMessage = this.actionProvider.createChatBotMessage(
        "Sorry, I didn't understand. Please choose an option."
      );
      this.actionProvider.addMessageToState(defaultMessage);
    }
  }
}

const ChemistryAssistant = () => {
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

export default ChemistryAssistant;
