export function createPost() {
  //Contenedor de todos los elemntos de la sección crear post y timeline
  const postContainer = document.createElement("div");
  postContainer.classList.add("postContainer");

  //Flecha para volver a atrás
  const goBack = document.createElement("img");
  goBack.classList.add("goBack");
  postContainer.appendChild(goBack);

  //Contedor con elementos de crear post
  const createPostContainer = document.createElement("div");
  createPostContainer.classList.add("createPostContainer");
  postContainer.appendChild(createPostContainer);

  //Foto de perfil
  const profilePhoto = document.createElement("img");
  profilePhoto.classList.add("profilePhoto");
  createPostContainer.appendChild(profilePhoto);

  //Input para escribir el post
  const inputCreatePost = document.createElement("input");
  inputCreatePost.classList.add("inputCreatePost");
  inputCreatePost.setAttribute("type", "text");
  inputCreatePost.setAttribute("placeholder", "What are you thinking?");
  createPostContainer.appendChild(inputCreatePost);

  //Contenedor de enlazar imagen, ubicación y boton GO
  const extraContainer = document.createElement("div");
  extraContainer.classList.add("extraContainer");
  createPostContainer.appendChild(extraContainer);

  //Opción de añadir imagen
  const addImage = document.createElement("img");
  addImage.classList.add("addImage");
  extraContainer.appendChild(addImage);

  //Opción para añadir ubicación
  const addLocation = document.createElement("img");
  addLocation.classList.add("addLocation");
  extraContainer.appendChild(addLocation);
  
  //Botón para publicar post
  const goButton = document.createElement("button");
  goButton.classList.add("goButton");
  extraContainer.appendChild(goButton);

  //Contenedor de timeline

  const timelineContainer = document.createElement("div");
  timelineContainer.classList.add("timelineContainer");
  postContainer.appendChild(timelineContainer);

  //Boton de cerrar sesión
  const logoutButton = document.createElement("button");
  logoutButton.classList.add("logoutButton");
  timelineContainer.appendChild(logoutButton);

  return postContainer;
}
