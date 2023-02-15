import { act, renderHook } from "@testing-library/react";
import { server } from "../mocks/server";
import PlanetContextProvider from "../store/contexts/PlanetContext.provider";
import useGetPlanetsList from "./useGetPlanetsList";

describe("Given a useGetPlanetsList hook", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test("when the user requests a list of planets then the hook should return the list", async () => {
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <PlanetContextProvider>{children}</PlanetContextProvider>
    );
    const { result } = renderHook(useGetPlanetsList, { wrapper: Wrapper });
    expect(result.current.planets).toEqual([]);
    await act(async () => result.current.getPlanets());
    expect(result.current.planets[0].name).toBe("Mercury");
  });
});
