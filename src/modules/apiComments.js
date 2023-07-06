const idApiComment = "RfJpwLbuNZkYmafYdHPm";
const apiComment = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idApiComment}/comments`;
const commentForm = document.getElementById("comment-form");
const nameInput = document.getElementById("name-form");
const textareaInput = document.getElementById("textarea-form");

const handleFormSubmit = async (event) => {
  event.preventDefault();
  
  const username = nameInput.value;
  const comment = textareaInput.value;
   
    const cardId =  event.target.getAttribute("id");

  const newComment = {
    item_id: cardId,
    username,
    comment,
  };

  nameInput.value = "";
  textareaInput.value = "";
  try {
    const response = await fetch(apiComment, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
    if (response.ok) {
    }
  } catch (error) {
    console.log("Error en la solicitud:", error);
  }
};

commentForm.addEventListener("submit", handleFormSubmit);
