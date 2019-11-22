import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(value: any, arg: any[]): any {
    const resultPost= [];
    for(const post of value){
      if(post.nombreempresa.toLowerCase().indexOf(arg)> -1){
        resultPost.push(post)
      }
      if(post.descripcion.toLowerCase().indexOf(arg)> -1){
        resultPost.push(post)
      }
      if(post.telefono.toLowerCase().indexOf(arg)> -1){
        resultPost.push(post)
      }
      if(post.direccion.toLowerCase().indexOf(arg)> -1){
        resultPost.push(post)
      }
    }
    return resultPost;
  }
  

}