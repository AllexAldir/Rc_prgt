export function FormNew() {
    return (
        <form>
            <p>
                <input type='text' placeholder="Digite o nome do projeto"></input>
            </p>

            <p>
                <input type='number' placeholder="Digite o orçamento"></input>
            </p>

            <div>
                <select id="i_select">
                    <option selected disabled>Selecione a categoria</option>
                    <option disabled>Categoria</option>
                    <option disabled>Categoria</option>
                </select>
            </div>

            <div>
                <input type='submit'></input>
            </div>
        </form>

    )
}