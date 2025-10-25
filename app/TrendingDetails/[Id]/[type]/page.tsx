import { getDetails } from "@/app/_utils/DetailsApis";
import React from "react";

interface Props {
  params: { Id: number; type: string };
}
interface Type {
  title: string;
  name?: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  profile_path:string
  genres: [
    {
      id: number;
      name: string;
    }
  ];
}
async function pageDetails({ params: { Id, type } }: Props) {
  const data: Type = await getDetails(Id, type);
  return (
    <>
      <div className="grid grid-cols-4 my-10 gap-4 justify-center">
        {/* frist  */}
        <div className="col-span-4 md:col-span-2 ">
            {data.profile_path ?<img   src={"https://image.tmdb.org/t/p/w500"+data.profile_path}
            className="w-[70%] h-[80%] mx-auto"
            alt={`${data.name}`}
          /> :<img   src={"https://image.tmdb.org/t/p/w500"+data.poster_path}
            className="w-[70%] h-[80%] mx-auto"
            alt={`${data.title}`}
          />  }
          
        </div>
        {/* second  */}
        <div className="col-span-4 md:col-span-2 grid  text-center md:text-start md:my-20">
          <div>
            <h4 className="text-xl font-bold">
              {data.title ? data.title : data.name}
            </h4>
            <p className="text-gray-900">{data.overview}</p>
            {data.vote_average ? (
              <p className="text-md font-bold my-5">
                {" "}
                Vote :{" "}
                <span className="bg-sky-400 p-2 text-white">
                  {" "}
                  {data.vote_average.toFixed(1)}{" "}
                </span>
              </p>
            ) : (
              ""
            )}
            {data.genres ? 
            data.genres.map((x) => (
              <span key={x.id} className="mx-2">
                {" "}
                {x.name}
              </span>
            )) :""}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default pageDetails;
