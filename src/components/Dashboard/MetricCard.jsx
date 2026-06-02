function MetricCard({ titulo, valor }) {
    return (
        <div className="metric-card">
            <h3 className="metric-card__titulo">{titulo}</h3>
            <p className="metric-card__valor">{valor}</p>
        </div>
    );
}

export default MetricCard;
