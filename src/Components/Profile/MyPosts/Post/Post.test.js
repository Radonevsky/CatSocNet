import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Post from "./Post";

let container = null;
beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders a post without the post text or like counts and with post text and likes count", () => {
    act(() => {
        render(<Post />, container);
    });
    expect(container).not.toBe(null);

    act(() => {
        render(<Post message="Hello world of testing!" />, container);
    });
    expect(container.textContent).toBe("Hello world of testing!Like()");

    act(() => {
        render(<Post message="I'm happy!" count_like={4} />, container);
    });
    expect(container.textContent).toBe("I'm happy!Like(4)");
});