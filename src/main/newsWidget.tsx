import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/general/loader.tsx";

const News: React.FC<{ page: number }> = ({page}) => {
  const apikey: string = "2b159166f56f4b2aad3d08a9f8b4e314";

  const fetchNews = async (page: number) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const url = `https://newsapi.org/v2/everything?q=coding&language=en&sortBy=popularity&pageSize=10&page=${page}&apiKey=${apikey}`;
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
      <div className="flex flex-col justify-center border-orange-500 border-2 shadow-orange-600 items-center bg-neutral-800 h-[38vh] rounded-lg shadow-md">
        <Loader />
      </div>
    );

  if (error instanceof Error)
    return (
      <div className="flex flex-col border-orange-500 border-2 shadow-orange-600 bg-neutral-800 h-[38vh] rounded-lg shadow-md">
        <p>Error: {error.message}</p>
      </div>
    );

  return (
    <div className="relative flex flex-col border-orange-500 border-2 shadow-orange-600 bg-zinc-700 h-[38vh] rounded-lg shadow-md">
      <Swiper
        className="h-full w-full max-w-[800px]"
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data?.map((article: any, index: number) => (
          <SwiperSlide key={index} className="flex flex-col h-full">
            <div className="relative flex flex-col h-full">
              <img
                src={article.urlToImage || "https://via.placeholder.com/800x400?text=No+Image"}
                alt={article.title}
                className="h-[20vh] w-full object-cover object-top-left z-0 rounded-t-lg" // Ensure z-index is lower
              />
              <div className="relative z-10 p-2 h-[18vh] overflow-hidden bg-zinc-800 rounded-b-lg">
                <h2 className="text-xs font-bold text-yellow-400 line-clamp-2">{article.title}</h2>
                <p className="text-[0.7rem] text-gray-400 line-clamp-2">
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

export default News;