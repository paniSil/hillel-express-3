const VALID_ARTICLE_ID = '456';
const articles = [
    { id: '123', title: 'Awesome Article', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis dui a purus condimentum facilisis eget et nunc. Morbi egestas viverra massa sed accumsan. Aliquam tempus neque magna, et interdum quam molestie id. Cras mollis metus purus, vitae porttitor nibh interdum vitae." },
    { id: '456', title: 'Oh Some Article', text: "Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque efficitur fringilla rutrum." }
]

const getArticlesHandler = (req, res) => {
    // res.end('Get articles route')
    const title = 'Article list (EJS)'
    res.render('articles.ejs', { title: title, articles: articles })
}

const postArticlesHandler = (req, res) => {
    const { title, text } = req.body;
    const newArticle = { id: (articles.length + 1).toString(), title, text };

    if (newArticle && newArticle.title) {
        res.status(201).send('Post articles route')
    } else {
        res.status(400).send('Bad Request')
    }
}

const getArticleByIdHandler = (req, res) => {
    const articleId = req.params.id;
    const article = articles.find(u => u.id === articleId);
    if (article) { //(articleId === VALID_ARTICLE_ID) 
        // res.status(200).send(`Get article by Id route: ${articleId}`)
        res.render('article.ejs', { article: article })
    } else {
        res.status(404).send('Not Found')
    }
}

const putArticleByIdHandler = (req, res) => {
    const articleId = req.params.id;
    const articleData = req.body;

    if (articleId === VALID_ARTICLE_ID) {
        if (articleData && articleData.title) {
            res.status(200).send(`Put article by Id route: ${articleId}`)
        } else { res.status(400).send('Bad Request') }
    } else {
        res.status(404).send('Not Found')
    }
}

const deleteArticleByIdHandler = (req, res) => {
    const articleId = req.params.id;
    if (articleId === VALID_ARTICLE_ID) {
        res.status(204).send()
    } else {
        res.status(404).send('Not Found')
    }
}

export { getArticlesHandler, postArticlesHandler, getArticleByIdHandler, putArticleByIdHandler, deleteArticleByIdHandler }