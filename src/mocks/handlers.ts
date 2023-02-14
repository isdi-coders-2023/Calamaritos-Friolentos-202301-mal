// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get(`https://api.api-ninjas.com/v1/planets`, (_req, res, ctx) => {
    /* const { maxDistance } = req.url.searchParams.get(
        "max_distance_light_year"
      );*/
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Mercury",
          mass: 0.0537,
          radius: 0.346,
          period: 59800,
          semi_major_axis: 30.07,
          temperature: 72,
          distance_light_year: 0.000478,
          host_star_mass: 1,
          host_star_temperature: 6000,
        },
      ])
    );
  }),
];
