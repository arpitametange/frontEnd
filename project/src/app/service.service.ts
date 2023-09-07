import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   ulr="http://localhost:3000/crud/getTodoList"
   posturl="http://localhost:3000/crud/addTodo"
   deleteUrl="http://localhost:3000/crud/deleteTodo"
   updateUrl="http://localhost:3000/crud/updateTodo"

   headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json')
httpOptions={
headers:this.headers
}

  constructor(private http:HttpClient) { }

  get(){
   return this.http.get(this.ulr)
  }

  post(body:any){
   return this.http.post(this.posturl,body)
  }

  delete(id: number): Observable<any> {
    // const url=`${this.deleteUrl}/${id}`
    return this.http.delete(`${this.deleteUrl}/${id}`);
  }

  updatedata(body:any){
    return this.http.put(`${this.updateUrl}/${body._id}`,body)
  }


}
