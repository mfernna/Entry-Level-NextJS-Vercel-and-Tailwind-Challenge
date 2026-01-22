import { render, screen } from "@testing-library/react";
import { PostCard } from "../components/PostCard";
import "@testing-library/jest-dom";

const mockPost = {
  userId: 1,
  id: 101,
  title: "Testing Streaver Challenge",
  body: "This is a sample body for the test post card component.",
};

describe("PostCard Component", () => {
  it("should render the post title and body correctly", () => {
    render(<PostCard post={mockPost} />);

    const titleElement = screen.getByText(/Testing Streaver Challenge/i);
    expect(titleElement).toBeInTheDocument();

    const bodyElement = screen.getByText(/sample body/i);
    expect(bodyElement).toBeInTheDocument();
  });

  it("should display the correct post ID", () => {
    render(<PostCard post={mockPost} />);

    const postIdElement = screen.getByText(/ID: 101/i);
    expect(postIdElement).toBeInTheDocument();
  });
});
