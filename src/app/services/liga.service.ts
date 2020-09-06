import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigaService {
  url = 'https://www.thesportsdb.com/api/v1/json/';
  id = '4335';
  
  



constructor(private http: HttpClient) { }

getData(){
return this.http.get(`${this.url}1/lookupleague.php?id=${this.id}`);
}
getTeam(){
  return this.http.get(`${this.url}1/search_all_teams.php?l=Spanish%20La%20Liga`);
}
getEvent(){
  return this.http.get(`${this.url}1/eventsnextleague.php?id=${this.id}`);
}}

