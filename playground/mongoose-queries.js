const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a19efd3988c70b43ad156a1';
//
// if (!ObjectId.isValid(id)) {
//   console.log('Id not valid');
// }

var userId = '59c55c375b3bc9b06c11364c';

if (!ObjectId.isValid(userId)) {
  console.log('User Id not valid');
}




// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User id not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
