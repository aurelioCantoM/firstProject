import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayArray'
})
export class DisplayArrayPipe implements PipeTransform {

  transform(value: Record<string, any>[], ...args: string[]): Record<string, any>[] {
    if(!args[0] || !args[1])
      {
        return value;
      }
      var sortField=args[0] ||"productId";
      var sortOrder=args[1] ||"asc";
      if(sortOrder =="asc")
        {
          return value.sort((e1:any,e2:any)=>{
            if(e1[sortField] > e2[sortField])
              {
                return 1;
              }
            else
            {
              if(e1[sortField]<e2[sortField])
                {
                  return -1;

                }
                else
                {
                  return 0;
                }
            }
          })
        }
        else
        {
          return value.sort((e1:any,e2:any)=>{
            if(e1[sortField] > e2[sortField])
              {
                return -1;
              }
            else
            {
              if(e1[sortField]<e2[sortField])
                {
                  return 1;

                }
                else
                {
                  return 0;
                }
            }
          })
        }
      

    return value;
  }

}
/*
var arr=[{empId:101,empName:"sara"},{empId:99,empName:"tara"},{empId:102,empName:"sita"}];
      // sort the arr on basis of empId;
      arr.sort((e1,e2)=>{
        // asc sort
        if(e1.empId >e2.empId)
          return 1
        else
          if(e1.empId< e2.empId)
            return -1
          else
            return 0;
      });//pass a compare function

for(i=0;i<arr.length,i++)
  {
    for(j=i+1;j<arr.length;j++)
      {
        // compare the arr[i] and arr[j] -- call the compare function which has been sent as a param
      }
  }
*/
