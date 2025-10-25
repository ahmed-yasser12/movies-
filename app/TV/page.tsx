import Link from 'next/link'
import React from 'react'
import { getTvs } from '../_utils/MoviesApis';
interface Tv {
  vote_average: number;
  name: string;
  media_type: string;
  id: number;   
  poster_path: string;
}

async function page() {
     const data = await getTvs();
      const trendingTvs: Tv[] = data.results;
  return <>
<div className="grid grid-cols-4 flex-wrap gap-4 p-6">
        {/* Movies Grid (3 columns) */}
        <div className="col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingTvs.slice(0, 10).map((movie, index) => (
            <div className="relative" key={index}>
              <Link href={`/TrendingDetails/${movie.id}/${movie.media_type}`}>
                <div className="movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="w-full rounded"
                    alt={movie.name}
                  />
                  <h4 className="text-sm mt-2">{movie.name}</h4>
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-bl">
                    {movie.vote_average.toFixed(1)}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
  
  </>
}

export default page