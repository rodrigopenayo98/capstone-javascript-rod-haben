const d = document;
const formTest = d.querySelector("#form-test")

const addCommentForm = () => {
  const divForm = d.createElement("div");
  divForm.id = "add-comment";

  divForm.innerHTML = `
    <h4>Add a Comment</h4>
    <form action="" id="comment-form">
      <input id="name-form" type="text" placeholder="Your name">
      <textarea id="textarea-form" name="" id="" cols="30" rows="10" placeholder="Your insights..."></textarea>
      <button type="submit" id="btn-form">Comment</button>
    </form>
  `;

  return divForm;
};

// Agregar el div al documento
formTest.appendChild(addCommentForm());

export { addCommentForm };