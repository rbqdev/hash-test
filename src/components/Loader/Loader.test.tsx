import render from "@testsUtils/renderWithTheme";
import Loader from ".";

describe("Component: Loader", () => {
  it("should render component correctly", () => {
    const { baseElement } = render(<Loader />);
    expect(baseElement).toMatchSnapshot();
  });

  describe("if customText", () => {
    const mockText = "texTest";

    it("should render if passed", () => {
      const { queryByText } = render(<Loader customText={mockText} />);

      expect(queryByText(mockText)).toBeInTheDocument();
    });

    it("should NOT render if not passed", () => {
      const { queryByText } = render(<Loader />);

      expect(queryByText(mockText)).not.toBeInTheDocument();
    });
  });
});
