function openModule(module) {
  const box = document.getElementById("resultBox");

  switch (module) {
    case "diagram":
      box.innerHTML = `
        <h3>Diagram Module</h3>
        <p>Generador de diagramas SVG.</p>
        <button onclick="generateDiagram()">Crear ejemplo</button>
      `;
      break;

    case "mockup":
      box.innerHTML = `
        <h3>Mockup Module</h3>
        <p>Diseño de interfaces.</p>
      `;
      break;

    case "interactive":
      box.innerHTML = `
        <h3>Interactive Module</h3>
        <p>Widgets interactivos.</p>
      `;
      break;

    case "chart":
      box.innerHTML = `
        <h3>Chart Module</h3>
        <p>Visualización de datos.</p>
      `;
      break;

    case "art":
      box.innerHTML = `
        <h3>Art Module</h3>
        <p>Generación artística.</p>
      `;
      break;
  }
}

function generateDiagram() {
  const box = document.getElementById("resultBox");

  box.innerHTML = `
    <h3>Diagrama simple</h3>
    <svg width="100%" height="150">
      <rect x="20" y="50" width="120" height="50" fill="#4CAF50"/>
      <text x="80" y="80" fill="white" text-anchor="middle">Inicio</text>

      <rect x="200" y="50" width="120" height="50" fill="#2196F3"/>
      <text x="260" y="80" fill="white" text-anchor="middle">Proceso</text>

      <line x1="140" y1="75" x2="200" y2="75" stroke="#000"/>
    </svg>
  `;
}
