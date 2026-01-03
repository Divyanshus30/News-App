import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import NewsItem from "../components/NewsItem"
import InfiniteScroll from 'react-infinite-scroll-component'

export default function HomePage() {
  const [page, setPage] = useState(1)
  const [articles, setArticles] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [q, setQ] = useState("")
  const [language, setLanguage] = useState("")
  const [searchParams] = useSearchParams()

  async function getAPIData(query, lang, pageNo = 1) {
    setPage(page+1)
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&pageSize=24&page=${page}&language=${lang}&sortBy=publishedAt&apiKey=40b927361f984f1ea768ccb4b1916ae6`
    )
    response = await response.json()

    if (response.status === "ok") {
      if (pageNo === 1) {
        setArticles(articles.concat(response.articles))
      } else {
        setArticles(prev => [...prev, ...response.articles])
      }
      setTotalResults(response.totalResults)
    }
  }

  // 🔹 initial + URL change
  useEffect(() => {
    let query = searchParams.get("q") ?? "All"
    let lang = searchParams.get("language") ?? "hi"

    setQ(query)
    setLanguage(lang)
    setPage(1)
    getAPIData(query, lang, 1)
  }, [searchParams])

  // 🔹 infinite scroll loader
  const fetchMoreData = () => {
    const nextPage = page + 1
    setPage(nextPage)
    getAPIData(q, language, nextPage)
  }

  return (
    <div className="container-fluid my-3">
      <h5 className="text-center p-2 bg-primary text-light text-capitalize">
        {q} News Articles ({totalResults})
      </h5>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<div className='my-5 text-center'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>}
        
      >
        <div className="row">
          {articles.map((item, index) => (
            <NewsItem
              key={index}
              source={item.source?.name}
              title={item.title}
              description={item.description}
              date={item.publishedAt}
              pic={item.urlToImage}
              url={item.url}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}
