type Content = {
    text: boolean
}

export type ArticleProps = {
    title : string,
    subtitle: string,
    from?: string,
    date: Date,
    ArticleBody: [Content]
}

class Article{
    public props

    constructor(props:ArticleProps){
        this.props = {props}
        this.props.ArticleBody = []
    }
    
}