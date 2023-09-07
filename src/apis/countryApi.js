import axios from "axios";

export const countryApi = axios.create({
  baseURL: 'https://api-football-beta.p.rapidapi.com/countries',
  headers: {
    'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
    'X-RapidAPI-Key': '80d34ba779msh09b28b9849e573fp119f5cjsn31c4d713cf06'
  }
});