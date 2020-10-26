import { fetchPosts, square } from './lib'

fetchPosts()

const toggle = document.getElementById('toggle')

// Toggle navigation
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
)

// hide modal on outside click
window.addEventListener('click', (e) =>
  e.target === modal ? modal.classList.remove('show-modal') : false
)
