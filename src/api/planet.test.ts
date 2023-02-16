import { server } from "../mocks/server";
import { getSolarSystemPlanets } from "./planet.data";
import { Planet } from "./planet.model";

describe("Given Planet API", () => {
  beforeAll(() => server.listen()); // antes de cada test levantamos el server
  afterEach(() => server.resetHandlers()); // para cada test reseteamos el server
  afterAll(() => server.close()); // paramos el server al terminar los test
  test("When get planets, then it should return JSON eight objects for the eight planets in the solar system", async () => {
    const planets: Planet[] = await getSolarSystemPlanets();
    expect(planets[0].name).toBe("Mercury");
  });
});
