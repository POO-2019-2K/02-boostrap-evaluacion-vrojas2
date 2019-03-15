import rentas from "./Rentas.js";
import Resumen from "./Resumen";

class Main {
    constructor() {
        this._rentas = new rentas(document.querySelector("#rentas"),
        document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {

            let placas = document.querySelector("#placas").value;
            let fechaInicio = document.querySelector("#fechaInicio").value;
            let fechaEntrega = document.querySelector("#fechaEntrega").value;
            let resumen = new Resumen(placas, fechaInicio, fechaEntrega);
            this._rentas.addResumen(resumen);
            
        });
        
    }
}
let m = new Main();