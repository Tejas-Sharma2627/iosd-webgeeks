import React from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState , useEffect} from "react";
import Spinner from "./Spinner";
const News = (props) => {
    const [articles, setarticles] = useState([]);
  const [totalcards, settotalcards] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);

  const { setprogressbar, category} = props;
   useEffect(async () => {
    setprogressbar(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7f50577e05c84ae086b154b4659aadb1&page=1&pageSize=16`;
    let data = await fetch(url);
    setprogressbar(30);
    let newdata = await data.json();
    setprogressbar(70);
    setarticles(newdata.articles)
    settotalcards(newdata.totalResults)
    setloading(false)
    setprogressbar(100);
  },[])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7f50577e05c84ae086b154b4659aadb1&page=${page+1}&pageSize=16`;
    setpage(page+1);
    setloading(true);
    let data = await fetch(url);
    let newdata = await data.json();
    setarticles(articles.concat(newdata.articles));
    setloading(false);
  };
    return (
        <>
        <div className="container my-3 ">
          <h1 style={{marginTop: '70px',marginBottom: '20px',marginLeft:'20px'}}>News-Hub Headlines</h1>

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={totalcards !== articles.length}
            loader={loading && <Spinner/>}
          >
            <div className="row container">
              {
                articles.map((element) => {
                  return (
                    <div className="col md-4" key={element.url}>
                      <Newsitem
                        title={element.title}
                        description={element.description}
                        imageurl={element.urlToImage}
                        newsurl={element.url}
                        author={element.author}
                      />
                    </div>
                  );
                })}
            </div>
          </InfiniteScroll>
          <hr />
        </div>
      </>
    );
}

export default News
