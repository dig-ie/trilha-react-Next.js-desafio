import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dywwwfbppcxupcfdowij.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5d3d3ZmJwcGN4dXBjZmRvd2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwOTcxMDcsImV4cCI6MjAyNzY3MzEwN30.ZxIlaYA55p-pzE3ANdp17SKvDuRr2fPwjRh1wlPvJE0',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5d3d3ZmJwcGN4dXBjZmRvd2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwOTcxMDcsImV4cCI6MjAyNzY3MzEwN30.ZxIlaYA55p-pzE3ANdp17SKvDuRr2fPwjRh1wlPvJE0',
  },
});

export const apiRange = axios.create({
  baseURL: 'https://dywwwfbppcxupcfdowij.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5d3d3ZmJwcGN4dXBjZmRvd2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwOTcxMDcsImV4cCI6MjAyNzY3MzEwN30.ZxIlaYA55p-pzE3ANdp17SKvDuRr2fPwjRh1wlPvJE0',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5d3d3ZmJwcGN4dXBjZmRvd2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwOTcxMDcsImV4cCI6MjAyNzY3MzEwN30.ZxIlaYA55p-pzE3ANdp17SKvDuRr2fPwjRh1wlPvJE0',
    Range: '9',
  },
});
