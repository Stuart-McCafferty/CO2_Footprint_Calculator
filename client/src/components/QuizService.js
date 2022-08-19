const baseURL = 'http://localhost:9000/api/users';

const QuizService =  {
  getUsers() {
    return fetch(baseURL)
      .then(res => res.json());
  }
}