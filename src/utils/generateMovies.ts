export interface Movie {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  favorite: boolean;
  booked: boolean;
}
const generateRandomText = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};

export const generateMovies = (count: number): Movie[] => {
  const movies: Movie[] = [];
  for (let i = 0; i < count; i++) {
    movies.push({
      id: i,
      title: `Movie ${Math.random().toString(36).substring(2, 7)}`,
      description: `Description: ${generateRandomText(100)}`,
      thumbnail: `https://picsum.photos/200/300?random=${i}`,
      favorite: false,
      booked: false,
    });
  }
  return movies;
};