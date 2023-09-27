import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${user.body.firstName} ${user.body.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}

