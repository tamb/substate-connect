// __tests__/fetch.test.js
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import substate from "substate";

import { connect, Provide } from "./../dist/react/index.js";

const store = new substate({
  state: {
    personName: "Frank",
    id: "newID",
    count: 0,
  },
});

function Hello(props) {
  return (
    <div>
      <h1 role="heading" className="yolo" id={props.id}>
        Hello
        <strong>{props.person}</strong>
      </h1>

      <p>{props.count}</p>
    </div>
  );
}

describe("React component renders as normal", () => {
  render(<Hello id="tree" />);

  test("loads and displays greeting", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Hello");
    expect(screen.getByRole("heading")).toHaveAttribute("id", "tree");
    expect(screen.getByRole("heading")).toHaveClass("yolo");
  });
});
