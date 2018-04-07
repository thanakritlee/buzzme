const express = require('express');
const router = express.Router();

/**
 * The mock user data.
 * Just keeps the users in an array format.
 * 
 * TODO
 * Implement MongoDB.
 * Create a database to store the users.
 */
var users_array = [
    {id: 0,
    fname: 'Charlie', lname: 'Lee',  contact: '0466789220', email: 'chalee@gmail.com', address:'16 Hawthorn road Victoria'},
    {id: 1,
    fname: 'Jimmy',lname: 'Chan', contact: '0456245772', email: 'jimchan@gmail.com', address:'134 glenferri road Victoria' },
    {id: 2,
    fname: 'Kevin', lname: 'Bern' contact: '0456234889', email: 'kebbern@gmail.com', address: '19 blackburn road Victoria'},
];

/**
 * id_counter for adding new users.
 * Once MongoDB is implemented, the database can generate the id
 * for us and id_counter won't be needed anymore.
 */
var id_counter = 3;

function findUser (user_id) {
    /**
     * This function takes a user id and loop through the user_array,
     * the "user database" and return a matched user object.
     * If no user match found, then return false.
     */
    for (let user of users_array) {
        if (user.id == user_id) {
            return user;
        }
    }
    return false;
}

function deleteUser (user_id) {
    /**
     * This function takes a user id and loop through the user_array,
     * the "user database" and if match on the id is found the array
     * is sliced and manipulated so that the matched user is deleted from
     * the array.
     * If not found then do nothing, because the http.delete callback
     * already handle the case where the id does not exist in the database.
     */
    let count = 0;
    let temp_arr;
    for (let user of users_array) {
        if (user.id == user_id) {
            temp_arr = users_array.slice(0, count);
            users_array = temp_arr.concat(users_array.slice(count+1, users_array.length));
            break;
        }
     count += 1;
    }
}

router.route('/')
    /**
     * For route directory http://localhost:3000/api/users/
     */
    .get((req, res) => {
        /**
         * Return a list of all users.
         */
        res.json(users_array);
    })
    .post((req, res) => {
        /**
         * Add a new user to the database.
         * Getting the provided request user name and add it to the
         * database where the user id is generated.
         */
        
        // Creating the User object.
        user = {
            id: id_counter,
            fname: req.body.fname
        };
        // Add it to the database.
        users_array.push(user);

        id_counter += 1;
        res.json({ message: 'User added.'});
    });

router.route('/:user_id')
    /**
     * For route directory http://localhost:3000/api/users/:user_id/
     */
    .get((req, res) => {
        /**
         * Find the user in the datbase.
         * If user is found, then return user.
         * Otherwise, return a failed message.
         */
        user = findUser(req.params.user_id);
        if (user) {
            res.json(user);
        }
        else {
            res.json({ message: 'User id invalid.'});
        }
    })
    .put((req, res) => {
        /**
         * Update the user in the database.
         * If the user is found in the database, then update the
         * user name and return a success message.
         * Otherwise, if user is not found, then return a failed
         * message.
         */
        user = findUser(req.params.user_id);
        if (user) {
            user.name = req.body.name;
            res.json({ message: 'User updated.' });
        }
        else {
            res.json({ message: 'User id invalid.' });
        }
    })
    .delete((req, res) => {
        /**
         * Delete the user from the database.
         * If the user is found in the database, then delete the
         * user from the database and return a success message.
         * Otherwise, if the user is not found, then return a failed 
         * message.
         */
        user = findUser(req.params.user_id);
        if (user) {
            deleteUser(req.params.user_id);
            res.json({ message: 'User deleted.' });
        }
        else {
            res.json({ message: 'User id invalid.' });
        }
    });



module.exports = router;