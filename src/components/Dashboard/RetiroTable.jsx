function RetiroTable({pedidos}) {
    return (
        <div className="retiro-table">
            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Producto</th>
                        <th>Cliente</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map((pedido) => (
                        <tr key={pedido.id}>
                            <td>{pedido.codigo}</td>
                            <td>{pedido.descripcion}</td>
                            <td>{pedido.cliente}</td>
                            <td>{pedido.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RetiroTable;