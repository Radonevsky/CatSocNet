import React from "react";
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

test("status form props should be in the state", () => {
    const component = create(<ProfileStatus status="Hello world of testing!"/>)
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Hello world of testing!")
})

test("after creation span should be displayed", () => {
    const component = create(<ProfileStatus status="Hello world of testing!"/>)
    let span = component.root.findByType("span")
    expect(span).not.toBe(null)
})


