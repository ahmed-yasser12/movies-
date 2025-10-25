export async function getDetails(id:number,type:string) {
     const res = await fetch
     (`https://api.themoviedb.org/3/${type}/${id}?api_key=e88bc33fe6aaf110ee2023e3ee114148&language=en-US`,{
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('not found');

  const data = await res.json();
  return data;
}