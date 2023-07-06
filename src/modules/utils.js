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
                <div style="background-image:url(${show.image.medium})" class="modal-hero-image">
                </div>
                <h3 class="text-center modal-show-title">${show.name}</h3>
                <p class='show-summary'> ${show.summary}</p>
                <div class="comments">
                  <h3 class="text-center">Comments (2)</h3>
                  <ul class="comments-list">
                  </ul>
                </div>
                <form class="comment-form" id="form-test" action="" method="post">
                  <h2 class="form-header">Add Comment</h2>
                  <ul class="form-list">
                    <li>
                      <input type="text" name="name" placeholder="Your Name"/>
                    </li>
                    <li class="form-input">
                      <textarea name="insight" id="" cols="30" rows="3" placeholder="Your Insights"></textarea>
                    </li>
                  </ul>
                  <button title="comment" class="form-submit btn" type="submit">Comment</button>
                </form>
            </div>
        `
}

export {
    openPopUpWindow
}