export async function getMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=e88bc33fe6aaf110ee2023e3ee114148`,{
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Product not found');

  const data = await res.json();
  return data;
}
export async function getTvs() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=e88bc33fe6aaf110ee2023e3ee114148`,{
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Product not found');

  const data = await res.json();
  return data;
}
export async function getPeople() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/person/week?api_key=e88bc33fe6aaf110ee2023e3ee114148`,{
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Product not found');

  const data = await res.json();
  return data;
}