// Synchronous code
//
// console.log("Before");
// getuser(1);
// console.log("After");
// function getuser(id) {
//     setTimeout(() => {
//       console.log("Reading a user from a database");
//       return { id: id, githubUser: "mosh" };
//     }, 2000);

//     return 1;
//   }

// Deal with asynchronous code
// 1) callbacks
// 2) Promises
// 3) Async/await

// 1) CallBack

// console.log("Before");
// getuser(1, function(user) {
//   console.log("User :", user);

//   getRepositories(user.githubUser, username => {
//     console.log("The Repositories are", username);
//   });
// });
// console.log("After");
// function getuser(id, callback) {
//   setTimeout(() => {
//     console.log("Reading a user from a database");
//     callback({ id: id, githubUser: "Bhaskar" });
//   }, 2000);
// }

// function getRepositories(username, callback) {
//   setTimeout(() => {
//     console.log("Getting GitHub Repository...");
//     callback(["repo1", "repo2", "repo3"]);
//   }, 2000);
// }

//2) Promises

// const p = getuser(1);
// p.then(user => getRepositories(user.githubUser))
//   .then(name => console.log(name))
//   .catch(err => console.log("Error", err.message));

// console.log("After");

// function getuser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Reading a user from a database");
//       resolve({ id: id, githubUser: "Bhaskar" });
//     }, 2000);
//   });
// }

// function getRepositories(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting GitHub Repository...");
//       resolve(["repo1", "repo2", "repo3"]);
//     }, 2000);
//   });
// }

//Promise.all([p1, p2]);  -> will resolve when both pormises are resolve
// Promise.race([p1,p2]); -> will resolve with value of promise resolved first

//3) Async and Await

// async function displayCommits() {
//   try {
//     const user = await getuser(1);
//     const repos = await getRepositories(user.githubUser);
//     console.log(repos);
//   } catch (err) {
//     console.log("Error", err.message);
//   }
// }

// displayCommits();

// console.log("After");

// function getuser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Reading a user from a database");
//       resolve({ id: id, githubUser: "Bhaskar" });
//     }, 2000);
//   });
// }

// function getRepositories(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting GitHub Repository...");
//       reject(["repo1", "repo2", "repo3"]);
//     }, 2000);
//   });
// }
