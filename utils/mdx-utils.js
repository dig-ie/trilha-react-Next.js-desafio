import { api, apiRange } from '../services/api';

export const getPosts = async () => {
  const { data } = await api.get('/posts');

  if (data) {
    return data;
  }

  return [];
};

export const getPostById = async (id) => {
  try {
    const { data, error } = await apiRange.get(`/posts?id=eq.${id}&select=*`);

    if (error) {
      console.error('Error fetching post:', error);
      return null;
    }

    // Check if data is an array and return the first element
    if (Array.isArray(data) && data.length > 0) {
      return data[0];
    }

    return null;
  } catch (err) {
    console.error('Error fetching post:', err);
    return null;
  }
};
