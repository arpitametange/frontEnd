import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mediaData: any =[]
  array:any=[]
  reels:any
  title = 'project';
  url='https://instagram-scraper-20231.p.rapidapi.com/userreels/25025320/12/%7Bend_cursor%7D'
  headers=new HttpHeaders({ 'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
  'X-RapidAPI-Host': 'instagram-scraper-20231.p.rapidapi.com'})
  constructor(private http:HttpClient){
this.get()
  }
  get(){
    this.http.get(this.url,{headers:this.headers}).subscribe((res:any)=>{
      console.log('reels',res.data.items);
      this.array=res.data.items
      this.mediaData==this.array
      console.log('array',this.mediaData.url);
    //  this.mediaData==this.array.media.can_see_insights_as_brand
     this.reels==res.data.items
console.log('data',this.reels.caption.text );

    
  })
}}
