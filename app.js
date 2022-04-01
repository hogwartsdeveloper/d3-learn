const DUMMY_DATA = [
    { id: 'd1', value: 10, region: 'USA' },
    { id: 'd2', value: 11, region: 'KZ' },
    { id: 'd3', value: 12, region: 'Russian' },
    { id: 'd4', value: 6, region: 'Germany' },
];

const xScale = 
    d3.scaleBand()
        .domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
        .rangeRound([0, 250])
        .padding(0.1);
const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

// d3.select('div')
//     .selectAll('p')
//     .data(DUMMY_DATA)
//     .enter()
//     .append('p')
//     .text(dta => dta.region);

const container = d3.select('svg')
    .classed('container', true);

const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .style('height', (data) => 200 - yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));

setTimeout(() => {
    bars.data(DUMMY_DATA.slice(0, 2)).exit().remove();
}, 2000)

// const container = d3.select('.line-svg').append('svg');
// console.log(container);