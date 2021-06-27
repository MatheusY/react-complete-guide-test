import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hellow World as a text", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello World!");

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you as a text if the button was not clicked", () => {
    render(<Greeting />);

    const goodToSeeElement = screen.getByText("good to see ", { exact: false });

    expect(goodToSeeElement).toBeInTheDocument();
  });

  test("renders changed as a text if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const changedElement = screen.getByText("Changed!");

    expect(changedElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const goodToSeeElement = screen.queryByText("good to see ", { exact: false });

    expect(goodToSeeElement).toBeNull();
  });
});
