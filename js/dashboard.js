document.addEventListener('DOMContentLoaded', function() {
    fetch('../python/customer_movements.json')
        .then(response => response.json())
        .then(data => {
            const areas = ['Entrance', 'Produce', 'Dairy', 'Bakery', 'Frozen', 'Checkout'];
            const timeSlots = Array.from({length: (22 - 8) * 4}, (_, i) => {
                const hours = Math.floor((8 * 60 + i * 15) / 60);
                const minutes = (8 * 60 + i * 15) % 60;
                return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
            });

            const heatmapData = areas.map(area => timeSlots.map(() => 0));

            data.forEach(entry => {
                const timeIndex = Math.floor((entry.time - 8 * 60) / 15);
                const areaIndex = areas.indexOf(entry.area);
                if (timeIndex >= 0 && timeIndex < timeSlots.length && areaIndex >= 0) {
                    heatmapData[areaIndex][timeIndex] += 1;
                }
            });

            const plotData = [{
                z: heatmapData,
                x: timeSlots,
                y: areas,
                type: 'heatmap',
                colorscale: 'YlGnBu'
            }];

            Plotly.newPlot('heatmap', plotData, {
                title: 'Heatmap of Customer Movements',
                xaxis: { title: 'Time' },
                yaxis: { title: 'Area' }
            });
        })
        .catch(error => console.error('Error loading JSON data:', error));
});
