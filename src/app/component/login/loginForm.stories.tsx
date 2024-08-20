import { http, HttpResponse, delay } from "msw";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import SignIn from "./loginForm";

const meta: Meta<typeof SignIn> = {
  title: "request/signin",
  component: SignIn,
};

export default meta;
type Story = StoryObj<typeof SignIn>;

// Mocked data
const TestData = [
  {
    email: "leakna@gmail.com",
    password: "12345678",
  },
  {
    email: "test@gmail.com",
    password: "654321",
  },
];

function errorFetch() {
  return {
    msw: {
      handlers: [
        http.post("https://your-restful-endpoint/", async () => {
          await delay(800);
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  };
}

function successFetch() {
  return {
    msw: {
      handlers: [
        http.post("https://your-restful-endpoint/", () => {
          return HttpResponse.json(TestData);
        }),
      ],
    },
  };
}

// PascalCase story names
export const LoginSuccess: Story = {
  parameters: successFetch(),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate interactions with the component
    await userEvent.type(canvas.getByTestId("email"), "leakna@gmail.com");
    await userEvent.type(canvas.getByTestId("password"), "12345678");
    await userEvent.click(canvas.getByRole("button"));

    // Assert DOM structure for success message
    await waitFor(async () => {
      expect(canvas.queryByText("SignIn Success")).toBeInTheDocument();
    });
  },
};

export const LoginRequire: Story = {
  parameters: errorFetch(),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate interactions with the component
    await userEvent.clear(canvas.getByTestId("email"));
    await userEvent.clear(canvas.getByTestId("password"));
    await userEvent.click(canvas.getByRole("button"));

    // Assert DOM structure for error message
    await waitFor(() => {
      expect(canvas.getByText("Password is required")).toBeInTheDocument();
      expect(canvas.getByText("Email is required")).toBeInTheDocument();
    });
  },
};

export const LoginEmailFormat: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post("https://your-restful-endpoint/", async () => {
          await delay(800);
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate user interaction
    await userEvent.type(canvas.getByTestId("email"), "wrongemail"); // Invalid email format
    await userEvent.type(canvas.getByTestId("password"), "password123");
    await userEvent.click(canvas.getByRole("button"));

    // Wait for the error message
    await waitFor(() => {
      expect(canvas.getByText((content) => content.includes("Invalid format"))).toBeInTheDocument();
    });
  },
};

export const LoginLimitFormat: Story = {
  parameters: errorFetch(),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate interactions with the component
    await userEvent.type(canvas.getByTestId("email"), "wrongema@gmail.com"); // Invalid email format
    await userEvent.type(canvas.getByTestId("password"), "passwo3");
    await userEvent.click(canvas.getByRole("button"));

    // Assert DOM structure for invalid email format error message
    await waitFor(() => {
      expect(
        canvas.getByText("Password must be at least 8 characters long")
      ).toBeInTheDocument();
    });
  },
};

export const LoginError: Story = {
  parameters: errorFetch(),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate interactions with the component
    await userEvent.type(canvas.getByTestId("email"), "wrongemail@gmail.com");
    await userEvent.type(canvas.getByTestId("password"), "wrongpassword");
    await userEvent.click(canvas.getByRole("button"));

    // Assert DOM structure for error message
    await waitFor(() => {
      expect(canvas.getByText("SignIn Unsuccessful")).toBeInTheDocument();
    });
  },
};
