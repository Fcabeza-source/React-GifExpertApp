const { getGifs } = require("../../components/helpers/getGifts");


describe('Pruebas con getGifts fetch', () => {
    
    test('Debe de traer 10 elementos ', async() => {
        
        const gifs = await getGifs("One Piece");

        expect(gifs.length).toBe(10);
    })

    test('Debe de traer 10 elementos ', async() => {
        
        const gifs = await getGifs("");

        expect(gifs.length).toBe(0);
    })
        
})
