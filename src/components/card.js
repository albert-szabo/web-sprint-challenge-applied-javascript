
import axios from 'axios';

// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>
//

const Card = (article) => {
  const articleWrapper = document.createElement('div');
  const headline = document.createElement('div');
  const authorSection = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');
  const authorName = document.createElement('span');

  articleWrapper.classList.add('card');
  headline.classList.add('headline');
  authorSection.classList.add('author');
  imageContainer.classList.add('img-container');

  headline.textContent = article.headline;
  image.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  articleWrapper.appendChild(headline);
  articleWrapper.appendChild(authorSection);
  authorSection.appendChild(imageContainer);
  imageContainer.appendChild(image);
  authorSection.appendChild(authorName);

  articleWrapper.addEventListener('click', () => {
    console.log(headline);
  })

  return articleWrapper;
}

// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//

const cardAppender = (selector) => {
  axios.get('http://localhost:5001/api/articles')
  .then(response => {
    response.data.articles.bootstrap.forEach(article => {
      document.querySelector(selector).appendChild(Card(article));
    })
    response.data.articles.javascript.forEach(article => {
      document.querySelector(selector).appendChild(Card(article));
    })
    response.data.articles.jquery.forEach(article => {
      document.querySelector(selector).appendChild(Card(article));
    })
    response.data.articles.node.forEach(article => {
      document.querySelector(selector).appendChild(Card(article));
    })
    response.data.articles.technology.forEach(article => {
      document.querySelector(selector).appendChild(Card(article));
    })
  })
  .catch(error => {
    console.error(error);
  })
}

export { Card, cardAppender }
