import { useEffect, useState } from 'react';
import pedidosData from '../data/pedidos.js';
import MetricsCard from '../components/Dashboard/MetricCard';
import RetiroTable from '../components/Dashboard/RetiroTable';

function Dashboard() {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        setPedidos(pedidosData);
    }, []);



    const total = pedidos.length;
    const pendientes = pedidos.filter(pedido => pedido.estado === 'Pendiente').length;
    const completados = pedidos.filter(pedido => pedido.estado === 'Completado').length;  



    return (
      <div className="dashboard">
        <h2 className="dashboard__titulo">Panel de métricas</h2>

        <div className="dashboard__metricas">
          <MetricsCard titulo="Total de retiros" valor={total} />
          <MetricsCard titulo="Retiros pendientes" valor={pendientes} />
          <MetricsCard titulo="Retiros completados" valor={completados} />
        </div>

        <div className="dashboard__tabla">
          <h3>Registro de retiros</h3>
          <RetiroTable pedidos={pedidos} />
        </div>
      </div>
    );
}





  

export default Dashboard;