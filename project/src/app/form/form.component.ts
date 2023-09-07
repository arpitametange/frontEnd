import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
data:any=[]
  constructor(private service:ServiceService,private dialogue:MatDialog){
this.getdata()
  }


 ///read data
 getdata(){
  this.service.get().subscribe(res=>{
    this.data=res
  })
}

  ///create data
  onsumbit(title:any,description:any){
    var dataa={
     "title":title,
      "description":description
    }
    this.service.post(dataa).subscribe(res=>{
      console.log('post data',res);
      
    })
  setTimeout(() => {
    this.getdata()
  },500);
  }


 
  //edit data
  update(data:any){
    let opendiogue=this.dialogue.open(UpdateComponent,{
      data:{data}
    })
    this.service.get()
    console.log('update data',data);
    
  }

  //delete data
  deletedata(id:any){
    console.log(id,'id');
    
   this.service.delete(id).subscribe(res=>{
  console.log("delete",res);
  
})
setTimeout(() => {
  this.getdata()
},500);
  }
}
