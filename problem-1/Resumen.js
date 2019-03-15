export default class Resumen {
    constructor(tableRentas, tableInfo) {
        this._tableRentas = tableRentas;
        this._tableInfo = tableInfo;

        this._numRentas = 0;
        this._sumDays = 0;

    }

    aadResumen(resumen) {
     
        let row = this._tableList.insertRow(-1);

        let cellPlacas = row.insertCell(0);
        let cellFechaInicio = row.insertCell(1);
        let cellFechaEntrega = row.insertCell(2);
        let cellCosto = row.insertCell(3);

        cellPlacas.innerHTML = resumen.placas;
        cellFechaInicio.innerHTML = resumen.getFecha1AsString();
        cellFechaEntrega.innerHTML = resumen.getFecha2AsString();
        cellCosto.innerHTML = resumen.getCosto();

        this._numRentas++;
        this._tableInfo.rows[0].cells[1].innerHTML = this._numRentas;

        this._sumDays += resumen.getDias();
        this._tableInfo.rows[1].cells[1].innerHTML = this._sumDays;

    }
    }


