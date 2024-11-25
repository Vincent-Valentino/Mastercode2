import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";

export const News: React.FC<{ page: number }> = ({ page }) => {
  const apikey: string = "2b159166f56f4b2aad3d08a9f8b4e314";

  const fetchNews = async (page: number) => {
    const url = `https://newsapi.org/v2/everything?q=programming+software&language=en&sortBy=publishedAt&pageSize=10&page=${page}&apiKey=${apikey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const data = await response.json();
    return data.articles;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["techNews", page],
    queryFn: () => fetchNews(page),
  });

  if (isLoading)
    return (
      <div className="flex flex-col bg-neutral-800 h-[50vh] w-2/5 rounded-lg shadow-md">
        <p>Loading...</p>
      </div>
    );

  if (error instanceof Error)
    return (
      <div className="flex flex-col bg-neutral-800 h-[50vh] w-2/5 rounded-lg shadow-md">
        <p>Error: {error.message}</p>
      </div>
    );

  return (
    <div className="flex flex-col bg-neutral-800 h-[50vh] w-2/5 rounded-lg shadow-md">
      <Swiper
        className="h-[50vh] w-full max-w-[800px]"
        modules={[ Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data?.map((article: any, index: number) => (
          <SwiperSlide key={index} className="flex flex-col h-full">
            <div className="flex flex-col h-full">
              <img
                src={article.urlToImage || "https://via.placeholder.com/800x400?text=No+Image"}
                alt={article.title}
                className="h-[30vh] w-full object-cover object-top"
              />
              <div className="mt-2 p-3 h-[20vh] overflow-hidden">
                <h2 className="text-sm font-bold text-yellow-400">{article.title}</h2>
                <p className="text-xs text-gray-400 line-clamp-3">
                  {article.description || "No description available."}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xs hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
