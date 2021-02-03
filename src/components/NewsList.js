import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import { API_KEY } from '../API_KEY';
import axios from 'axios';

const NewsListBlock = styled.div`</span>
  <span class="co33">box-sizing</span><span class="co34">:</span> <span class="co33">border-box</span><span class="co36">;</span>
  <span class="co33">padding-bottom</span><span class="co34">:</span> <span class="co32">3rem</span><span class="co36">;</span>
  <span class="co33">width</span><span class="co34">:</span> <span class="co32">768px</span><span class="co36">;</span>
  <span class="co33">margin</span><span class="co34">:</span> <span class="co32">0</span> <span class="co33">auto</span><span class="co36">;</span>
  <span class="co33">margin-top</span><span class="co34">:</span> <span class="co32">2rem</span><span class="co36">;</span>
  <span class="co46">@media</span> <span class="co32">screen</span> <span class="co35">and</span><span class="co36"> (</span><span class="co33">max-width</span><span class="co34">:</span> <span class="co32">768px</span><span class="co36">) {</span>
    <span class="co33">width:</span> <span class="co32">100%</span><span class="co36">;</span>
    <span class="co33">padding-left:</span> <span class="co32">1rem</span><span class="co36">;</span>
    <span class="co33">padding-right:</span> <span class="co32">1rem</span><span class="co36">;</span>
  }
<span class="co31">`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
