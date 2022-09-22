import {logout} from "../components/firebaseauth.js"

export function createPost() {
  //Contenedor de todos los elemntos de la sección crear post y timeline
  const postContainer = document.createElement("div");
  postContainer.classList.add("postContainer");

  //Encabezado
  const headerPost = document.createElement("div");
  headerPost.classList.add("headerPost");
  postContainer.appendChild(headerPost);

  //Logo header
  const logoHeader = document.createElement("div");
  logoHeader.classList.add("logoHeader");
  headerPost.appendChild(logoHeader);

  //Titulo
  const titlePost = document.createElement("h3");
  titlePost.classList.add("titlePost");
  titlePost.textContent = "Go Wild Nature"
  headerPost.appendChild(titlePost);

  //Contedor con elementos de crear post
  const createPostContainer = document.createElement("div");
  createPostContainer.classList.add("createPostContainer");
  postContainer.appendChild(createPostContainer);

  //Contenedor de foto e input
  const userPost = document.createElement("div");
  userPost.classList.add("userPost");
  createPostContainer.appendChild(userPost);

  //Foto de perfil
  const profilePhoto = document.createElement("div");
  profilePhoto.classList.add("profilePhoto");
  userPost.appendChild(profilePhoto);

  //Input para escribir el post
  const inputCreatePost = document.createElement("input");
  inputCreatePost.classList.add("inputCreatePost");
  inputCreatePost.setAttribute("type", "text");
  inputCreatePost.setAttribute("placeholder", "    What are you thinking?");
  userPost.appendChild(inputCreatePost);

  //Contenedor de enlazar imagen, ubicación y boton GO
  const extraContainer = document.createElement("div");
  extraContainer.classList.add("extraContainer");
  createPostContainer.appendChild(extraContainer);

  //Opción de añadir imagen
  const addImage = document.createElement("div");
  addImage.classList.add("addImage");
  extraContainer.appendChild(addImage);

  //Opción para añadir ubicación
  const addLocation = document.createElement("div");
  addLocation.classList.add("addLocation");
  extraContainer.appendChild(addLocation);
  
  //Botón para publicar post
  const goButton = document.createElement("button");
  goButton.classList.add("goButton");
  goButton.textContent = "Go"
  extraContainer.appendChild(goButton);

  //Contenedor de timeline

  const timelineContainer = document.createElement("div");
  timelineContainer.classList.add("timelineContainer");
  postContainer.appendChild(timelineContainer);

  //Contenedor del botón logout
  const logoutContainer = document.createElement("div");
  logoutContainer.classList.add("logoutContainer");
  timelineContainer.appendChild(logoutContainer);

  //Boton de cerrar sesión
  const logoutButton = document.createElement("button");
  logoutButton.classList.add("logoutButton");
  logoutButton.textContent = "Logout"
  logoutContainer.appendChild(logoutButton);

  logoutButton.addEventListener("click", () => {
    logout();
  })

  return postContainer;
}
