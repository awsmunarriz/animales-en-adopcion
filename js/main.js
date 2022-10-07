var cad = `
<div class="row row-cols-1 row-cols-md-4 g-4">
`;
for (let i = 0; i < data.length; i++) {
  cad += `
  <div class="col">
  <div class="card">
  <img src="${data[i].img}" alt="foto" style="height:230px; width: auto;">
    <div class="card-body">
      <h4 class="card-title" style="text-align: center;">Nombre: ${data[i].nombre}</h4>
      <ul style="list-style: none;">
      <li>Raza: ${data[i].raza}</li>
      <li>Genero: ${data[i].genero}</li>
      <li>Tamaño: ${data[i].tamaño}</li>
      <li>Vacunas: ${data[i].vacunas}</li>
      <li>Castrado: ${data[i].castrado}</li>
      <li>Pelaje: ${data[i].pelaje}</li>
      <li>Tratamiento: ${data[i].tratamiento}</li>  
    </ul>
      </div>
  </div>
</div>
`;
}

cad += `
    </div>
`;
document.getElementById("gatos").innerHTML = cad;
