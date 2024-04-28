import React from "react";
import { render, screen } from "@testing-library/react";
import SocialIcon from "./SocialIcon"; // Update the path to your SocialIcon component file
import "@testing-library/jest-dom";

describe("SocialIcon", () => {
  test("renders a link with correct href", () => {
    const link = "https://discord.com/invite/zxFvvQMu9K";
    const alt = "Discord icon";
    const color = "bg-neon-green";
    const size = "23px"; // Or whatever size you are expecting

    render(<SocialIcon link={link} alt={alt} color={color} size={size} />);

    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toHaveAttribute("href", link);
  });
});
