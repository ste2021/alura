class NegociacoesView {

    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {

        return `<table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
             </table>
            `;
    }
}