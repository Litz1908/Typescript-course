export class Calculator {  
  
    private _total: number;  
      
    constructor() {  
        this._total = 0;  
    }  
        
    get total(): number {  
        return this._total;  
    }  
      
} 