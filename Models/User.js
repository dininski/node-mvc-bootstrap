/**
 * A basic user model
 */
var User = {
    /**
     * The username that will be used to log in
     */
    username: String,

    /**
     * The user's real name
     */
    name: String,

    /**
     * The user's password
     */
    password: String,

    /**
     * The user's email
     */
    email: String
};

module.exports = User;