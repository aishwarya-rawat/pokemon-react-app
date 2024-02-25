import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('https://pokeapi.co/api/v2/pokemon/:searchTerm', ({ params }) => {
        console.log(params.searchTerm);
        const { searchTerm } = params;
        if (searchTerm === "bulbasaur") {
            return HttpResponse.json({
                name: "bulbasaur",
                sprites: {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                },
                abilities: [{
                    ability: { name: "overgrow" }
                }, {
                    ability: { name: "chlorophyll" }
                }]
            }, { status: 200 })
        } else {
            return new HttpResponse(null, { status: 404 });
        }
    }),
]