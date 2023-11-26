// Sample data for the Sankey graph
const data = {
    nodes: [
      {"name":"Desirable Event"}, // 0
            {"name":"Undesirable Event"}, // 1
            {"name":"Neutral Event"}, // 2
            {"name":"Underestimated"}, // 3
            {"name":"Overestimated"}, // 4
            {"name":"Good News"}, // 5
            {"name":"Bad News"}, // 6
            {"name":"Filtered Out"}, // 7
    ],
    links: [
      // From desirable (0) - under
            {"source":0,"target":3,"value":1638, "name":'desirable'},
            // desirable - over
            {"source":0,"target":4,"value":1924, "name":'undesirable'},
            // From undesirable (1) - under
            {"source":1,"target":3,"value":1522},
            // undes - over
            {"source":1,"target":4,"value":1726},
            // From neutral (2)
            {"source":2,"target":7,"value":1608},
            // From underestimated/des - good
            {"source":3,"target":5,"value":1638, "name":'goodnews'},
            // under/undes - bad
            {"source":3,"target":6,"value":1522, "name":'badnews'},
            // From overestimated/undes - good
            {"source":4,"target":5,"value":1726, "name":'goodnews'},
            // over/des - bad
            {"source":4,"target":6,"value":1924, "name":'badnews'},
    ]
  };
  
  // Set up the SVG container
  const margin = { top: 10, right: 100, bottom: 80, left: 50 };
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  
  const svg = d3.select("#plt")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  // Create the Sankey diagram
  const sankey = d3.sankey()
      .nodeWidth(15)
      .nodePadding(20) // Increase the nodePadding to add more vertical space
      .nodeAlign(d3.sankeyLeft)
  
  .extent([[1, 1], [width - 1, height - 6]]);
  
  const { nodes, links } = sankey(data);
  
  
  // Draw nodes
  const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .attr("transform", d => `translate(${d.x0},${d.y0})`);
  
  node.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", d => d.y1 - d.y0)
      .attr("width", d => d.x1 - d.x0)
      .attr("stroke", "#000");
  
  
  
  // Add node labels to the right of nodes
//   svg.append("g")
//     .selectAll("text")
//     .data(nodes)
//     .enter()
//     .append("text")
//     .attr("x", d => d.x1 + 6)  // Adjusted x-coordinate to the right of the node
//     .attr("y", d => (d.y0 + d.y1) / 2)
//     .attr("dy", "0.35em")
//     .attr("text-anchor", "start")  // Align text to the start of the text element
//     .text(d => d.name);
  
  // Set up the color scale for nodes
  const colorScale = d3.scaleOrdinal()
  .domain(["Desirable Event", "Undesirable Event", "Neutral Event", "Underestimated", "Overestimated", "Good News", "Bad News", "Filtered Out"])
      .range([
          "#989C97", 
          "#989C97", 
          "#989C97", 
          "#1f78b4", 
          "#702082", 
          "#FFCB05", 
          "#00274C", 
          "#131516"
      ]);
  
  // Draw nodes with colors
  node.attr("fill", d => colorScale(d.name));
  
  
  // Define a gradient for links
  const gradient = svg.append("defs")
  .selectAll("linearGradient")
  .data(links)
  .enter()
  .append("linearGradient")
  .attr("id", (d, i) => "gradient" + i)
  .attr("gradientUnits", "userSpaceOnUse")
  .attr("x1", d => d.source.x1)
  .attr("x2", d => d.target.x0);
  
  gradient.append("stop")
  .attr("offset", "0%")
  .attr("stop-color", d => colorScale(d.source.name));
  
  gradient.append("stop")
  .attr("offset", "100%")
  .attr("stop-color", d => colorScale(d.target.name));
  
  // Draw links with gradients
  svg.append("g")
  .selectAll("path")
  .data(links)
  .enter()
  .append("path")
  .attr("d", d3.sankeyLinkHorizontal())
  
  .attr("stroke", (d, i) => `url(#gradient${i})`)  // Apply gradient to the stroke
  .attr("stroke-width", d => Math.max(1, d.width))
  .attr("fill", "none")
  .attr("opacity", 0.7) // Adjust opacity as needed
  .attr("class", "link")
  .attr("opacity", d => {
    // Set different opacities based on conditions
    if (d.source.name === "Desirable Event" && d.target.name === "Overestimated") {
      return 0.1; // Set opacity to 0.5 for a specific link
    } else if (d.source.name === "Desirable Event" && d.target.name === "Underestimated") {
      return 0.1; 
    } else if (d.source.name === "Undesirable Event" && d.target.name === "Overestimated") {
        return 0.1; 
    } else if (d.source.name === "Undesirable Event" && d.target.name === "Underestimated") {
        return 0.1; 
    } else if (d.source.name === "Overestimated" && d.target.name === "Bad News") {
        return 0.1; 
    } else if (d.source.name === "Underestimated" && d.target.name === "Good News") {
        return 0.1; 
    } else if (d.source.name === "Desirable Event" && d.target.name === "Overestimated") {
        return 0.1; 
    } else if (d.source.name === "Overestimated" && d.target.name === "Good News") {
        return 0.1; 
    } else if (d.source.name === "Underestimated" && d.target.name === "Bad News") {
        return 0.1; 
    // } else if (d.source.name === "Neutral Event" && d.target.name === "Filtered Out") {
    //     return 0.1; 
    }
    // Set default opacity for other links
    return 0.7;
  });

  