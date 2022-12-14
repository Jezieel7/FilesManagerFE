import { Component, OnInit } from '@angular/core';
import { FileControllerService } from '../openapi';
import { ModelFile } from '../openapi/model/modelFile';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  fileList:ModelFile[]=[];

  constructor(private service:FileControllerService) { 
    this.loadList();
  }

  loadList(){
    this.service.fileControllerFind().subscribe((lista)=>{
      this.fileList=lista
    });
  }
    
  ngOnInit(): void {
  }

  getFiles(){
    return 
  }

  onEdit(file: ModelFile){
  }

  onRemove(aFile: ModelFile){
    if(aFile.id){
      this.service.fileControllerDeleteById(aFile.id).subscribe(()=>this.loadList());
    }
  }


}
