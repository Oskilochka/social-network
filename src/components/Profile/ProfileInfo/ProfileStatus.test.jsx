import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("Profile Status component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Julia" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Julia");
    });
});