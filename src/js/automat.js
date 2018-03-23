export default class Automat {
    /**
     * 
     * @param {string} stareInitiala 
     * @param {Array<string>} stariFinale 
     * @param {JSON} tranzitii
     */
    constructor(stareInitiala, stariFinale, tranzitii) {
        this._stareInitiala = stareInitiala;
        this._stariFinale = stariFinale;
        this._tranzitii = tranzitii;
        this._pasi = [];
        this._ajungeInStareFinala = false;
    }

    /**
     * Verifica daca pasii dati duc intr-o stare finala sau nu
     * @returns o valoare booleana 
     * @param {Array<string>} pasi 
     */
    verificaPasi(pasi) {
        this._pasi = pasi;
        this._ajungeInStareFinala = false;
        this._cautaDrumCatreStareFinala();
        return this._ajungeInStareFinala;
    }

    /**
     * Cauta un drum catre starea finala
     * @param {number} indexPas 
     * @param {number} indexStare - indexul starii in care ne duce starea precedenta
     * @param {string} starePrecedenta 
     */
    _cautaDrumCatreStareFinala(indexPas = 0, indexStare = 0, starePrecedenta = this._stareInitiala) {
        // Am gasit drum care duce intr-o stare finala
        if (this._ajungeInStareFinala) {
            return;
        }

        // Am facut toti pasii
        if (indexPas >= this._pasi.length) {
            return;
        }

        const pasCurent = this._pasi[indexPas];

        // NU se poate trece intr-o stare din starea precedenta
        if (!this._tranzitii[starePrecedenta]) {
            return;
        }

        // NU exista tranzitie prin pasul curent
        if (!this._tranzitii[starePrecedenta][pasCurent]) {
            return;
        }

        // Am trecut deja prin toate starile prin care poate trece starea precedenta
        if (!this._tranzitii[starePrecedenta][pasCurent][indexStare]) {
            return;
        }

        const stareCurenta = this._tranzitii[starePrecedenta][pasCurent][indexStare];

        // Suntem la ultimul pas
        if (indexPas == this._pasi.length - 1) {
            if (this._stariFinale.includes(stareCurenta)) {
                this._ajungeInStareFinala = true;
                return;
            }
        }

        // Trecem la urmatorul pas
        this._cautaDrumCatreStareFinala(
            indexPas + 1,
            0,
            stareCurenta
        );

        // Trecem la urmatoarea stare
        this._cautaDrumCatreStareFinala(
            indexPas,
            indexStare + 1,
            stareCurenta
        );
    }
}