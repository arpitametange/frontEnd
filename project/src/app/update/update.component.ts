import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private service:ServiceService,@Inject(MAT_DIALOG_DATA) public data: any,
  private ref: MatDialogRef<UpdateComponent>,private snackbar:MatSnackBar){
  
  }
  myData:any=[]
    ngOnInit(): void {
      this.myData = this.data.data;
      // this.myData=this.data.id
      console.log('mydaata===',this.data.data);
      console.log('mydaata.data',this.data)
    }
  
  
  update(title:any,description:any){
    this.myData.title=title
    this.myData.description=description
    this.service.updatedata(this.myData).subscribe(res=>{
      console.log('res',res);
      
    })
    this.snackbar.open('task updated successfullly','',{duration:500})
  }
}
