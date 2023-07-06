import {saveComment,fetchShowComments} from './apiComments';
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

const fetchShowDetail = async (showId) => {
    try {
        const response = await fetch('https://api.tvmaze.com/shows/'+showId);
        const show = await response.json();
        return show
    } catch (err) {
        return null;
    }
}
const openPopUpWindow = async (showId) => {
    modal.classList.remove('hide');
    const comments = await fetchShowComments(showId);
    const show = await fetchShowDetail(showId);

    modalBody.innerHTML = modalTemplate({...show,comments});

    const formElementContainer = ()=> {
    const   formWrapper = document.createElement('div');
    formWrapper.setAttribute('id','form-test');
    const formTitle = document.createElement('h4');
    formTitle.innerText = 'Add a Comment';
    const formElement = document.createElement('form');
    formElement.setAttribute('id','comment-form');
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('id','name-input');
    nameInput.setAttribute('placeholder','Your Name');

    const commentInput = document.createElement('textarea');
    commentInput.setAttribute('id','comment-input');
    commentInput.setAttribute('placeholder','Your Insights');

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type','submit');
    submitBtn.setAttribute('id','btn-form');
    submitBtn.innerText = 'Comment';
    
    formElement.appendChild(nameInput);
    formElement.appendChild(commentInput);
    formElement.appendChild(submitBtn);
    formElement.addEventListener('submit', async ($e) => {
        $e.preventDefault();
        await saveComment({
            item_id: showId,
            username: nameInput.value,
            comment: commentInput.value,
        });
        const comments = await fetchShowComments(showId);
        modalBody.innerHTML = modalTemplate({...show,comments});
        modalBody.appendChild(formElementContainer());
    })
    formWrapper.appendChild(formTitle);
    formWrapper.appendChild(formElement);
    return formWrapper;
    }

    modalBody.appendChild(formElementContainer());

    modal.classList.add('show');
}

const modalTemplate = (show) => {
    return `     
                <img src="${show.image.medium}" alt="" class="modal-hero-image">
                <h3 class="text-center modal-show-title">${show.name}</h3>
                <p class='show-summary'> ${show.summary}</p>
                <div class="comments">
                  <h3 class="text-center">Comments (${show.comments.length})</h3>
                  <ul class="comments-list">
                        ${show.comments.map(comment=>{return `<li class="comment-item">${comment.username} : ${comment.comment} </li>`}).join(' ')}
                  </ul>
                </div>
        `
}

export {
    openPopUpWindow
}