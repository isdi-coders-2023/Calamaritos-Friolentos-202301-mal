import { act, renderHook } from "@testing-library/react";
import { server } from "../mocks/server";
import PlanetContextProvider from "../store/contexts/PlanetContext.provider";
import useGetPlanetsfromApiPrivate from "./useGetPlanetsfromApiPrivate";

describe("Given an useAppHook custom hook", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test("when the user requests clicks the star button then it calls the function addFavPlanet and the planet is added to the private API", async () => {
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <PlanetContextProvider>{children}</PlanetContextProvider>
    );
    const { result } = renderHook(useGetPlanetsfromApiPrivate, {
      wrapper: Wrapper,
    });
    expect(result.current.state.planetsApiPrivate).toEqual([]);
    await act(async () =>
      result.current.addFavPlanet({
        name: "Mercury",
        mass: 0.0537,
        radius: 0.346,
        period: 59800,
        semi_major_axis: 30.07,
        temperature: 72,
        distance_light_year: 0.000478,
        host_star_mass: 1,
        host_star_temperature: 6000,
      })
    );
    expect(result.current.state.planetsApiPrivate.length).toBe(0);
  });
});
