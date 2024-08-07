import * as React from "react";
import { useCallback } from "react";
import ArticleList from "./ArticleList";
import AddArticle from "./AddArticle";

const id = (function* () {
    let i = 1;
    while (true) {
      yield i;
      i += 1;
    }
  })();


function MyFeature(){

    const [articles,setArticles] = React.useState([
        {
            id: id.next(),
            title: "Article 1",
            summary: "Article 1 Summary",
            display: "none",
          },
          {
            id: id.next(),
            title: "Article 2",
            summary: "Article 2 Summary",
            display: "none",
          },
    ]);
    const [title,setTitle] = React.useState('');
    const [summary,setSummary] = React.useState('');

    const onChangeTitle = useCallback((e) =>{
        setTitle(e.target.value);
    },[]);

    const onChangeSummary = useCallback((e) =>{
            setSummary(e.target.value);
    },[]);

    const onClickAdd = useCallback(() =>{
        setArticles((state) => [
            ...state,
            {
                id: id.next(),
                title: title,
                summary: summary,
                display: "none",
              },
        ]);

        setTitle('');
        setSummary('');

    },[summary,title]);



    const onClickRemove = React.useCallback((id) => {
      setArticles((state) => state.filter((article) => article.id !== id));
    }, []);


    return (
        <section>
            <AddArticle
            name="Articles"
            title={title}
            summary={summary}
            onChangeTitle={onChangeTitle}
            onChangeSummary={onChangeSummary}
            onClickAdd={onClickAdd}
            />
            <ArticleList articles={articles} onClickRemove={onClickRemove} /> 
        </section>
  
)
}


export default MyFeature;