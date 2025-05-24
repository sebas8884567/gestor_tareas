function agregarTarea() {
    const input = document.getElementById("nuevaTarea");
    const texto = input.value.trim();
    if (texto === "") return;
  
    const li = document.createElement("li");
    li.textContent = texto;
  
    li.addEventListener("click", () => {
      li.classList.toggle("completado");
    });
  
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.style.marginLeft = "10px";
    btnEliminar.onclick = () => li.remove();
  
    li.appendChild(btnEliminar);
  
    document.getElementById("listaTareas").appendChild(li);
    input.value = "";
  }
  // Función de Luis para agregar tareas
function agregarTarea(tarea) {
  console.log("Tarea agregada:", tarea);
}