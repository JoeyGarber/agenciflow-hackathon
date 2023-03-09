let apiUrl
const apiUrls = {
  production: 'agenciflow-hackathon-eb0u5wjkb-joeygarber.vercel.app',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl