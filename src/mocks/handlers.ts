// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post(
    `https://api-private-luis-ropero.onrender.com/api-private`,
    (_req, res, ctx) => {
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
    }
  ),
  rest.get(
    `https://api-private-luis-ropero.onrender.com/api-private`,
    (_req, res, ctx) => {
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
            host_star_temperature: 6001,
          },
          {
            name: "Mercury",
            mass: 0.0537,
            radius: 0.346,
            period: 59800,
            semi_major_axis: 30.07,
            temperature: 72,
            distance_light_year: 0.000478,
            host_star_mass: 1,
            host_star_temperature: 6002,
          },
          {
            name: "Mercury",
            mass: 0.0537,
            radius: 0.346,
            period: 59800,
            semi_major_axis: 30.07,
            temperature: 72,
            distance_light_year: 0.000478,
            host_star_mass: 1,
            host_star_temperature: 6003,
          },
        ])
      );
    }
  ),

  rest.get(`https://api.api-ninjas.com/v1/planets`, (_req, res, ctx) => {
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
          host_star_temperature: 6005,
        },
        {
          name: "Mercury",
          mass: 0.0537,
          radius: 0.346,
          period: 59800,
          semi_major_axis: 30.07,
          temperature: 72,
          distance_light_year: 0.000478,
          host_star_mass: 1,
          host_star_temperature: 6002,
        },
        {
          name: "Mercury",
          mass: 0.0537,
          radius: 0.346,
          period: 59800,
          semi_major_axis: 30.07,
          temperature: 72,
          distance_light_year: 0.00048,
          host_star_mass: 1,
          host_star_temperature: 6000,
        },
      ])
    );
  }),
];
