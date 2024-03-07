import {sum} from '../sum';

test("Checking sum",()=>{
     const result = sum(5,5)
     
     expect(result).toBe(10);
})