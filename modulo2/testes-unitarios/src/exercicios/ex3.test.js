
import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true para '[1, 2 ,1]'", () => {
        const haDuplicados = checaItensDuplicados("[1, 2 ,1]");
        expect(haDuplicados).toEqual(true);
    });

    test("retorna true para '[5, 5, 3, 6, 5, 6]'", () => {
        const haDuplicados = checaItensDuplicados("[5, 5, 3, 6, 5, 6]");
        expect(haDuplicados).toEqual(true);
    });

    test("retorna false para '[1]' ", () => {
        const haDuplicados = checaItensDuplicados("[1]");
        expect(haDuplicados).toEqual(false);
    });
    
    test("retorna false para '[1, 2, 3]'", () =>{
        const haDuplicados = checaItensDuplicados("[1, 2, 3]");
        expect(haDuplicados).toEqual(false);
    })
});
 