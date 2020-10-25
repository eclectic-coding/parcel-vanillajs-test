import { fetchPosts, square } from './lib'

document.getElementById('message').innerText =
  'Hello World! The Square of 2 is " + square(2)'

fetchPosts()
