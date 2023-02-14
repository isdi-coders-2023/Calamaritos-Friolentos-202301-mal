import { Planet } from "./planet.model"

export const getPlanetByName =  (planets: string[]) => {
  const planetsListData: Planet[] = [];
  for (let planet of planets) {
    fetch(`https://api.api-ninjas.com/v1/planets?name=${planet}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'X/eFoH5y1gzGiAgQPef9Gw==QUeLPZoIOIQ9j1u1',
      },
    })
    .then(response => response.json())
    .then(response =>planetsListData.push(response))
  }
 return planetsListData
}

/*hemos llamado la interfaz y hacemos un fetch por cada item de la array de string
(o sea, el fetch de cada planeta a partir del nombre)*/