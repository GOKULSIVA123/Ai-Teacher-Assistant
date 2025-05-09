import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

// Widget component for option buttons
const Options = (props) => {
  const options = [
    { text: "Explain a topic", handler: () => props.actionProvider.handleExplain(), id: 1 },
    { text: "Help with homework", handler: () => props.actionProvider.handleHomework(), id: 2 },
    { text: "Study tips", handler: () => props.actionProvider.handleStudyTips(), id: 3 },
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
  botName: "TeacherBot",
  initialMessages: [
    {
      type: "bot",
      id: "1",
      message: "Hello! I’m your Teacher Assistant. What do you want help with?",
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
      "Sure! What topic would you like me to explain?"
    );
    this.addMessageToState(message);
  };

  handleHomework = () => {
    const message = this.createChatBotMessage(
      "Please describe your homework problem."
    );
    this.addMessageToState(message);
  };

  handleStudyTips = () => {
    const message = this.createChatBotMessage(
      "Here are some study tips:\n1. Schedule study time\n2. Take breaks\n3. Practice actively."
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

    if (lowerCase.includes("explain")) {
      this.actionProvider.handleExplain();
    } else if (lowerCase.includes("homework")) {
      this.actionProvider.handleHomework();
    } else if (lowerCase.includes("study")) {
      this.actionProvider.handleStudyTips();
    } else {
      const defaultMessage = this.actionProvider.createChatBotMessage(
        "Sorry, I didn't understand. Please choose an option."
      );
      this.actionProvider.addMessageToState(defaultMessage);
    }
  }
}

// Main component
const TeacherAssistant = () => {
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

export default TeacherAssistant;
