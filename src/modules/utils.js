const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

const openPopUpWindow = async (showId) => {
    console.log('series.id',showId);
    modal.classList.remove('hide');
    const response = await fetch('https://api.tvmaze.com/shows/'+showId);
    const show = await response.json();

    modalBody.innerHTML = modalTemplate(show)
    modal.classList.add('show');
}

const modalTemplate = (show) => {
    return `     
                <img src="${show.image.medium}" alt="" class="modal-hero-image">
                <h3 class="text-center modal-show-title">${show.name}</h3>
                <p class='show-summary'> ${show.summary}</p>
                <div class="comments">
                  <h3 class="text-center">Comments (2)</h3>
                  <ul class="comments-list">
                  </ul>
                </div>
                <div id="form-test">
                <h4>Add a Comment</h4>
                <form action="" id="comment-form">
                  <input id="name-form" type="text" placeholder="Your name">
                  <textarea id="textarea-form" name="" id="" cols="30" rows="10" placeholder="Your insights..."></textarea>
                  <button type="submit" id="btn-form">Comment</button>
                </form>
                </div>
            </div>
        `
}

export {
    openPopUpWindow
}