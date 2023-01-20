import { ecuacion } from './formula';

describe ('funcion', () =>{
    it('Should return area = 26, if b1= 9.5 and b2 = 3.5 and h = 4', ()=> {
        const area = ecuacion(9.5, 3.5, 4);
        expect(area).toBe(26);
    })

describe ('funcion', () =>{
    it('Should return area = 28, if b1= 8 and b2 = 6 and h = 4', ()=> {
        const area = ecuacion(8, 6, 4);
        expect(area).toBe(28);
    })

describe ('funcion', () =>{
        it('Should return area = 18, if b1= 6 and b2 = 3 and h = 4', ()=> {
            const area = ecuacion(6, 3, 4);
            expect(area).toBe(18);
        })

describe ('funcion', () =>{
            it('Should return area = 21, if b1= 8 and b2 = 6 and h = 3', ()=> {
                const area = ecuacion(8, 6, 3);
                expect(area).toBe(21);
            })
        })
    })
})
})