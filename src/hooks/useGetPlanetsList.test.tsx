import { act, renderHook } from "@testing-library/react";
import { server } from "../mocks/server";
import PlanetContextProvider from "../store/contexts/PlanetContext.provider";
import useAppHook from "./useAppHook";
import useGetPlanetsList from "./useAppHook";

describe("Given an useAppHook custom hook", () => {
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
    expect(result.current.state.planets).toEqual([]);
    await act(async () => result.current.getPlanets());
    expect(result.current.state.planets[0].name).toBe("Mercury");
  });

  test("When the planets list is shown, only 3 cards are displayed", async () => {
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <PlanetContextProvider>{children}</PlanetContextProvider>
    );
    const { result } = renderHook(useAppHook, { wrapper: Wrapper });

    await act(async () => result.current.fragmentPlanets());
    expect(result.current.state.planets.length).toEqual(3);
  });

  test("When the function goToLeftPage is activated in the component, then it dispatches the action that decreases the page number in one", async () => {
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <PlanetContextProvider>{children}</PlanetContextProvider>
    );
    const { result } = renderHook(useAppHook, { wrapper: Wrapper });

    await act(async () => result.current.goToLeftPage(2));
    expect(result.current.state.page).toEqual(1);
  });

  test("When the function goToNextPage is activated in the component, then it dispatches the action that increases the page number in one", async () => {
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <PlanetContextProvider>{children}</PlanetContextProvider>
    );
    const { result } = renderHook(useAppHook, { wrapper: Wrapper });

    await act(async () => result.current.goToNextPage(1));
    expect(result.current.state.page).toEqual(2);
  });
});
