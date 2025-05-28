const getRootHandler = (req, res) => {
    const text = 'This is example of using PUG and EJS for page render'
    res.render('index.pug', { text })
    //res.end('Get root route')
}

export { getRootHandler }