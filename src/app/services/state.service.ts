import 'rxjs/add/operator/map';
import {  
    Injectable  
} from '@angular/core';
import { Http,RequestOptions,Response } from "@angular/http";
 
@Injectable()  
export class StateService {  
     constructor(private http: Http) { }
    getStates() {  
return this.http.get('http://localhost:55504/api/Dropdown/GetState').map(res => res.json());
    }
   
}
 

   


