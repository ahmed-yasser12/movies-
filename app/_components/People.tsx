import React from 'react'
import { getPeople } from '../_utils/MoviesApis'
import Link from 'next/link';
interface People {
  popularity: number;
  name: string;
  media_type: string;
  id: number;
  profile_path: string;
}
async function People() {
    const data = await getPeople();
    const trendingPeople :People[] =data.results ;
return  <>
  <div className="grid grid-cols-4 flex-wrap gap-4 p-6">
        {/* Left Sidebar (1 column) */}
        <div className="    p-6 ">
          <div className="w-[150px] bg-black h-0.5"></div>
          <div className="py-4">
            <h3 className="text-xl font-bold">
              Trending person <br /> To Watch <br /> Right Now
            </h3>
            <p className="text-sm mt-2 text-gray-700">
              Most Watched person By Days
            </p>
          </div>
          <div className="w-full bg-black h-0.5"></div>
        </div>
        {/* Movies Grid (3 columns) */}
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingPeople.map((movie:any, index:any) => (
            <div className="relative" key={index}>
              <Link href={`/TrendingDetails/${movie.id}/${movie.media_type}`}>
                <div className="movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`}
                    className="w-full rounded"
                    alt={movie.name}
                  />
                  <h4 className="text-sm mt-2">{movie.name}</h4>
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-bl">
                    {movie.popularity.toFixed(1)}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div> 
  </>
 
}

export default People