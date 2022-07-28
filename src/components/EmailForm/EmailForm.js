import React, { useReducer } from "react";

import Input from "../UI/Input/Input";
import TextArea from "../UI/TextArea/TextArea";

import { FormContainer, ControlGroup, SubmitButton } from "./EmailForm.style";

// ---------------------------------------------
// Name
const reducerName = (state, action) => {
  if (action.type === "NAME_INPUT") {
    return {
      value: action.value,
    };
  }

  return initialNameState;
};

const initialNameState = { value: "" };

// ---------------------------------------------
// Email
const reducerEmail = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      value: action.value,
      isValid: action.value.includes("@"),
    };
  }

  if (action.type === "EMAIL_SUBMIT") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }

  return initialEmailState;
};

const initialEmailState = { value: "", isValid: null };

// ---------------------------------------------
// Subject
const reducerSubject = (state, action) => {
  if (action.type === "SUBJECT_INPUT") {
    return {
      value: action.value,
    };
  }

  return initialSubjectState;
};

const initialSubjectState = { value: "" };

// ---------------------------------------------
// Message
const reducerMessage = (state, action) => {
  if (action.type === "MESSAGE_INPUT") {
    return {
      value: action.value,
      isValid: action.value.length > 10,
    };
  }

  if (action.type === "MESSAGE_SUBMIT") {
    return {
      value: state.value,
      isValid: state.value.length > 10,
    };
  }

  return initialMessageState;
};

const initialMessageState = { value: "", isValid: null };

// ---------------------------------------------

const EmailForm = () => {
  const [name, dispatchName] = useReducer(reducerName, initialNameState);
  const [email, dispatchEmail] = useReducer(reducerEmail, initialEmailState);
  const [subject, dispatchSubject] = useReducer(
    reducerSubject,
    initialSubjectState
  );
  const [message, dispatchMessage] = useReducer(
    reducerMessage,
    initialMessageState
  );

  console.log(message);

  // -----------------------------------------------------------------
  const nameChangeHandler = (event) => {
    dispatchName({ type: "NAME_INPUT", value: event.target.value });
  };

  const nameBlurHandler = () => {};

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "EMAIL_INPUT", value: event.target.value });
  };

  const emailBlurHandler = () => {};

  const subjectChangeHandler = (event) => {
    dispatchSubject({ type: "SUBJECT_INPUT", value: event.target.value });
  };

  const subjectBlurHandler = () => {};

  const messageChangeHandler = (event) => {
    dispatchMessage({ type: "MESSAGE_INPUT", value: event.target.value });
  };

  const messageBlurHandler = () => {};

  const submitHandler = (event) => {
    event.preventDefault();

    dispatchEmail({ type: "EMAIL_SUBMIT" });
    dispatchMessage({ type: "MESSAGE_SUBMIT" });

    if (!email.isValid || !message.isValid) return;

    const enteredData = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    console.log(enteredData);
  };
  // -----------------------------------------------------------------

  return (
    <FormContainer>
      <form onSubmit={submitHandler}>
        <ControlGroup>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            value={name.value}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </ControlGroup>

        <ControlGroup className={!email.isValid === false ? "invalid" : ""}>
          <Input
            id="email"
            type="text"
            placeholder="Email"
            value={email.value}
            isValid={email.isValid}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </ControlGroup>

        <ControlGroup>
          <Input
            id="subject"
            type="text"
            placeholder="Subject"
            value={subject.value}
            onChange={subjectChangeHandler}
            onBlur={subjectBlurHandler}
          />
        </ControlGroup>

        <ControlGroup className={!message.isValid === false ? "invalid" : ""}>
          <TextArea
            id="message"
            placeholder="Message"
            isValid={message.isValid}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          >
            {message.value}
          </TextArea>
        </ControlGroup>

        <SubmitButton type="submit">Send Message!</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default EmailForm;
