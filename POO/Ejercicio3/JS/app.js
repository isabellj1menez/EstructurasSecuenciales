const listaTweetd = document.getElementById('lista-tweets');
let tweetToDelete = '';

EventListner();

function EventListner(){
  document.querySelector('#formulario').addEventListener('submit', addTweet);
  listaTweetd.addEventListener('click', removeTweet);

  document.addEventListener('DOMContentLoaded',LocalStorageReady)
}

let Tweet = new tweet();

function addTweet(){

  let contentTweet = document.getElementById('tweet').value.trim();
  // console.log(contentTweet)
  Tweet.addTweet(contentTweet);
  document.getElementById('tweet').value = '';

}

function removeTweet(event){
// console.log('click')
event.preventDefault();

if(event.target.tagName === 'SPAN'){

  tweetToDelete = event.target.parentElement.parentElement.textContent.slice(0,-1);
  console.log(tweetToDelete)

  Swal.fire({
    title: 'Advertencia',
    text: `Se eliminara el tweer ${tweetToDelete}`,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar'
  }).then((result) => {
    if (result.value) {
     event.target.parentElement.parentElement.remove();
     Tweet.removeTweetLS(tweetToDelete);
     Swal.fire({
      position: 'top-end',
      type: 'warning',
      title: 'Tweet eliminado',
      showConfirmButton: false,
      timer: 1500
    })
    }
  })

}

}

function LocalStorageReady(){
  let tweets = Tweet.getLocalStorage();

  tweets.forEach(function(tweet){
    Tweet.CreateTweee(tweet)
  })
}

