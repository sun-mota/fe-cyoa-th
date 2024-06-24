import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("renders the comment list container with no error message", () => {
  const result = render(<App />);
  const listElement = result.container.querySelector(".comment-list");
  expect(listElement).toBeInTheDocument();

  const errorMessageEl = result.container.querySelector(".error-message");
  expect(errorMessageEl).not.toBeInTheDocument();
});

test("renders the comment form", () => {
  const result = render(<App />);
  const formElement = result.container.querySelector(".comment-form form");
  expect(formElement).toBeInTheDocument();
});

test("post a comment", () => {
  const result = render(<App />);
  const formElement = result.container.querySelector(".comment-form form");
  expect(formElement).toBeInTheDocument();

  const nameInput = result.container.querySelector(".comment-form form #name");
  const commentInput = result.container.querySelector(
    ".comment-form form #comment",
  );
  const submitBtn = result.container.querySelector(
    ".comment-form form button[type='submit']",
  );

  // FILL OUT THE FORM AND SUBMIT
  // nameInput.setAttribute("value", "Tester");
  // commentInput.setAttribute("value", "This is a testing comment");
  // fireEvent.click(submitBtn);
  // TODO: NEED TO INTERCEPT THE API, will use nock maybe?
});
