import { create } from 'd3-selection';
import { scaleLinear, scaleBand, ScaleLinear, ScaleBand, NumberValue } from 'd3-scale';
import { axisBottom } from 'd3-axis';
import { max, min } from 'd3-array';
import { timeMonths } from 'd3-time';
import { line } from 'd3-shape';

import { Selection } from 'd3-selection';
import { ProductDataSales } from '../App';

const LineChart = (
  chartDiv: HTMLDivElement,
  data: ProductDataSales[],
  lineKey: keyof ProductDataSales,
  dateKey: keyof ProductDataSales
) => {
  const MIN_HEIGHT = 300;
  const AXIS_HEIGHT = 20;
  const CHART_PADDING = 10;
  let height = 0;
  let width = 0;
  let xAxisScale: ScaleBand<string>;
  let xScale: ScaleLinear<number, number>;
  let yScale: ScaleLinear<number, number>;
  let maxDate = max(data, d => d[dateKey])! as Date;
  let minDate = min(data, d => d[dateKey])! as Date;
  let months: string[];
  const chartSvg = create('svg');

  function updateChartDimensions() {
    const bounds = chartDiv.getBoundingClientRect();
    console.log('Chart div bounds', bounds);
    height = bounds.height < MIN_HEIGHT ? MIN_HEIGHT : bounds.height;
    width = bounds.width;
    console.log(`height: ${height}, width: ${width}`);
  }

  function updateChartScales() {
    months = timeMonths(minDate, maxDate, 1).map(date => date.toLocaleString('en-US', { month: 'short' }));
    xAxisScale = scaleBand()
      .domain(months)
      .range([0, width - 2 * CHART_PADDING]);
    xScale = scaleLinear()
      .domain([minDate.getDate(), maxDate.getDate()])
      .range([0, width - 2 * CHART_PADDING]);
    yScale = scaleLinear()
      .domain([min(data, d => d[lineKey]), max(data, d => d[lineKey])] as Iterable<NumberValue>)
      .range([height - 2 * CHART_PADDING - AXIS_HEIGHT, CHART_PADDING]);
  }

  function initChart(svg: Selection<SVGSVGElement, undefined, null, undefined>) {
    updateChartDimensions();
    updateChartScales();

    svg.attr('viewBox', `0 0 ${width} ${height}`);

    svg.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('height', height)
      .attr('width', width)
      .attr('fill', 'white')
      .classed('background', true);

    svg.append('g')
      .attr('transform', `translate(${CHART_PADDING}, ${CHART_PADDING})`)
      .classed('axes', true);
    svg.append('g')
      .attr('transform', `translate(${CHART_PADDING}, ${CHART_PADDING})`)
      .classed('plot', true);
    chartDiv.appendChild(svg.node()!);
  }

  function drawAxes() {
    const xAxis = axisBottom(xAxisScale)
      .tickValues(months)
      .tickSize(0);

    chartSvg.select('g.axes')
      .append('g')
      .classed('xAxis', true)
      .attr('transform', `translate(0,${height - 2 * CHART_PADDING - AXIS_HEIGHT})`)
      .call(xAxis);
  }

  function drawLines() {
    console.log('Draw lines');
    const plot = chartSvg.select("g.plot");
    const dLine = line<ProductDataSales>().y(d => yScale(d[lineKey])).x(d => xScale((d[dateKey] as Date).getDate()));
    plot.append("path").attr("d", dLine(data)).attr("stroke", "currentColor").attr("fill", "none");
  }

  initChart(chartSvg);
  drawAxes();
  drawLines();
};

export default LineChart;