import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../domain/movie';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  httpOptions = {
    headers : new HttpHeaders ({
      'Content-Type' : 'application/json; charset=utf-8',
    })
  };

  constructor(private httpClient: HttpClient) { }

  /**
   * Get a list of top 250  movies
   * @returns 
   */
  async getTop250Movies() {
    const movies = <any> await this.httpClient.get(environment.moviesUrl.concat(`/Top250Movies/${environment.apiKey}`), this.httpOptions).toPromise();    
    return <Array<Movie>> movies.items;
  }


  /**
   * Get a list of top 250 tvs
   * @returns 
   */
   async getTop250Tvs() {
    const movies = <any> await this.httpClient.get(environment.moviesUrl.concat(`/Top250TVs/${environment.apiKey}`), this.httpOptions).toPromise();    
    return <Array<Movie>> movies.items;
  }

    /**
   * Get a list of Most Popular Movies
   * @returns 
   */
  async getMostPopularMovies() {
    const movies = <any> await this.httpClient.get(environment.moviesUrl.concat(`/MostPopularMovies/${environment.apiKey}`), this.httpOptions).toPromise();    
    return <Array<Movie>> movies.items;
  }

  /**
   * Get a list of Most Popular Tvs
   * @returns 
   */
  async getMostPopularTvs() {
    const movies = <any> await this.httpClient.get(environment.moviesUrl.concat(`/MostPopularTVs/${environment.apiKey}`), this.httpOptions).toPromise();    
    return <Array<Movie>> movies.items;
  }

    /**
   * Get a list of Movies In Theater
   * @returns 
   */
  async getInTheaters() {
    const movies = <any> await this.httpClient.get(environment.moviesUrl.concat(`/InTheaters/${environment.apiKey}`), this.httpOptions).toPromise();    
    return <Array<Movie>> movies.items;
  }

      /**
   * Get a list of Movies Coming Soon
   * @returns 
   */
  async getComingSoon() {
    const movies = <any> await this.httpClient.get(environment.moviesUrl.concat(`/ComingSoon/${environment.apiKey}`), this.httpOptions).toPromise();    
    return <Array<Movie>> movies.items;
  }

}