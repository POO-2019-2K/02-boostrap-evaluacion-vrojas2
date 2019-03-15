export default class Rentas {
    constructor(fechaInicio, fechaEntrega, placa) {
        this._placa = placa;
        this._fechaInicio = fechaInicio;
        this._fechaEntrega = fechaEntrega;
    }

    getReservacion()
    {
        let fechaInicio = document.querySelector("#fechaInicio").value;
        fechaInicio = fechaInicio.split('-')
        let fechaEntrega = document.querySelector("#fechaEntrega").value;
        fechaEntrega = fechaEntrega.split('-')
        this._fechaInicio = fechaInicio;
        this._fechaInicio = new Date(fechaInicio[0], fechaInicio[1], fechaInicio[2])
        this._fechaEntrega = new Date(fechaEntrega[0], fechaEntrega[1], fechaEntrega[2])
        let oneDay = 86400000;
        let differenceMs = Math.abs(new Date(this._fechaEntrega) - new Date(this._fechaInicio));
        return Math.round(differenceMs / oneDay);
    }

    
    get nombre() {
        return this._placa;
    }

    get fechaInicio() {
        return this._fechaInicio;
    }

    get fechaEntrega() {
        return this._fechaEntrega;
    }

    getFecha1AsString() {
        let fechaUno = this._fechaInicio.getDate() + "/" + this._fechaInicio.getMonth() + "/" + this._fechaInicio.getFullYear();
    
        return fechaUno;
    }

    getFecha2AsString() {
        let fechaDos = this._fechaEntrega.getDate() + "/" + this._fechaEntrega.getMonth() + "/" + this._fechaEntrega.getFullYear();
    
        return fechaDos;
    }

    getDias(){
        let dia = 24 * 60 * 60 * 1000;
        let resta = this._fechaEntrega - this._fechaInicio;
        let total = resta / dia;
        return total;
        
    }

    getCosto(){
        let dia = 24 * 60 * 60 * 1000;
          let resta = this._fechaEntrega - this._fechaInicio;
          let totalD = resta / dia;
          let costo = totalD * 55;
          return costo;
    }
}

}