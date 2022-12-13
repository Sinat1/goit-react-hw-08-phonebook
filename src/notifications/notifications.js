import Notiflix from 'notiflix';

function ifAddingContactSuccessfulNotification() {
  Notiflix.Notify.success('Contact is successfully added');
}

function ifDeletingContactNotification() {
  Notiflix.Notify.success('Contact is successfully deleted');
}
function ifErrorNotification() {
  Notiflix.Notify.failure('An unexpected error occured 😟');
}

function ifAccountIsMissingNotification() {
  Notiflix.Notify.failure('There is no registered account via this email');
}

export {
  ifAddingContactSuccessfulNotification,
  ifDeletingContactNotification,
  ifErrorNotification,
  ifAccountIsMissingNotification,
};
