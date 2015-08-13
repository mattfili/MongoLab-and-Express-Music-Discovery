var secrets = {
  MONGODB_URL: 'mongodb://4483tank2225:4483tank2225@ds031613.mongolab.com:31613/mongolab-music'
}

if (process.env.NODE_ENV === 'production') {
  secrets
}

Object.keys(secrets).forEach(function(key) {
  process.env[key] = process.env[key] || secrets[key];
});

