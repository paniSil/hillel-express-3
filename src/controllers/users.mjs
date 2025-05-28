const VALID_USER_ID = '123'
const users = [
    { id: '123', name: 'Jane', email: 'jane@jmail.com', age: 25 },
    { id: '456', name: 'John', email: 'john@jmail.com', age: 30 }
];

const getUsersHandler = (req, res) => {
    //res.end('Get users route')
    res.render('users.pug', { users: users });
}

const postUsersHandler = (req, res) => {
    //const userData = req.body;
    const { name, email, age } = req.body;
    const newUser = { id: (users.length + 1).toString(), name, email, age };

    if (newUser && newUser.name) {
        users.push(newUser)
        res.status(201).send('Post users route')
    } else {
        res.status(400).send('Bad Request')
    }
}

const getUserByIdHandler = (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);
    if (user) { //(userId === VALID_USER_ID)
        // res.status(200).send(`Get user by Id route: ${userId}`)
        console.log('User found:', user)
        res.render('user-profile.pug', { user: user })
    } else {
        res.status(404).send('Not Found')
    }
}

const putUserByIdHandler = (req, res) => {
    const userId = req.params.id;
    const userData = req.body;

    if (userId === VALID_USER_ID) {
        if (userData && userData.name) {
            res.status(200).send(`Put user by Id route: ${userId}`)
        } else { res.status(400).send('Bad Request') }
    } else {
        res.status(404).send('Not Found')
    }
}

const deleteUserByIdHandler = (req, res) => {
    const userId = req.params.id;
    if (userId === VALID_USER_ID) {
        res.status(204).send()
    } else {
        res.status(404).send('Not Found')
    }

}
export { getUsersHandler, postUsersHandler, getUserByIdHandler, putUserByIdHandler, deleteUserByIdHandler }
