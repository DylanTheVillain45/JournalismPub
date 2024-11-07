import { useState } from "react";
import { articles } from "../data/articles";

const useArticles = () => {
  const [articleData, setArticleData] = useState(articles); // Start with the static articles data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Update like count in the global article data
  const updateLikeCount = (index, newLikeCount) => {
    setArticleData((prevData) => {
      return prevData.map((article, idx) =>
        idx === index ? { ...article, likes: newLikeCount } : article
      );
    });
  };

  return { articleData, loading, error, updateLikeCount };
};

export default useArticles;
