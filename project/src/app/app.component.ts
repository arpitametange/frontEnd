import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
url='https://youtube-audio-video-download.p.rapidapi.com/geturl'

headers= {
  'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
  'X-RapidAPI-Host': 'youtube-audio-video-download.p.rapidapi.com'
}
constructor(private http:HttpClient){
this.get()
}

get(){
this.http.get(this.url,{headers:this.headers}).subscribe(res=>{
console.log(res,'res');

})
}
}
