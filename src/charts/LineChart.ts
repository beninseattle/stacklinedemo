import { create as d3Create } from 'd3-selection';

import { Selection } from 'd3-selection';
import { ProductDataSales } from "../App";

const LineChart = (chartDiv: HTMLDivElement, data: ProductDataSales[]) => {
  const MIN_HEIGHT = 300;
  let height = 0;
  let width = 0;

  function updateChartDimensions() {
    const bounds = chartDiv.getBoundingClientRect();
    console.log('Chart div bounds', bounds);
    height = bounds.height < MIN_HEIGHT ? MIN_HEIGHT : bounds.height;
    width = bounds.width;
  }

  function initChart(svg: Selection<SVGSVGElement, undefined, null, undefined>) {
    updateChartDimensions();

    svg.attr("viewBox", `0 0 ${width} ${height}`);

    svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", height)
      .attr("width", width)
      .attr("fill", "white")
      .classed("background", true);

    svg.append("g")
      .classed("axis", true);
    svg.append("g")
      .classed("plot", true);
    chartDiv.appendChild(svg.node()!);
  }

  function drawAxes() {
    console.log('Draw axes');
  }

  function drawLines() {
    console.log('Draw lines');
  }

  const chartSvg = d3Create('svg');
  initChart(chartSvg);
  drawAxes();
  drawLines();
};

export default LineChart;