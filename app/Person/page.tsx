import React from "react";
import { getPeople } from "../_utils/MoviesApis";
import Link from "next/link";
import { GetServerSideProps } from "next";
interface People {
  popularity: number;
  name: string;
  media_type: string;
  id: number;
  profile_path: string;
}

export default async function page() {
  const data = await getPeople();
  const trendingPeople: People[] = data.results;
  return (
    <>
      <div className="grid grid-cols-4 flex-wrap gap-4 p-6">
        {/* Movies Grid (3 columns) */}
        <div className="col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingPeople.map((movie: any, index: any) => (
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
  );
}
