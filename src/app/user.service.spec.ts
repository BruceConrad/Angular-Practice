import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service"


describe("UserService", () => {
    let service:UserService;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserService);
    })


    it("should be created", () => {
        expect(service).toBeTruthy();
    })
    
    it("should return a user", () => {
        let user = service.findUserById(1);
        expect(user).toEqual({id:1, name:'Bruce'});
    })
})


// describe("Sample", () => {
//     it("should be true", () => {
    
    
//         expect(true).toBe(true);
//     })
    
//     it("should be greater than", () => {
//         //
    
//         expect(4).toBeGreaterThan(3);
//     })

//     describe("Sub Test Suite", () => {
//         it("should be true", () => {
        
        
//             expect(true).toBe(true);
//         })
        
//         it("should be greater than", () => {
//             //
        
//             expect(4).toBeGreaterThan(3);
//         })
//     })
// })

// describe("Sample 2", () => {
//     it("should be true", () => {
    
    
//         expect(true).toBe(true);
//     })
    
//     it("should be greater than", () => {
//         //
    
//         expect(4).toBeGreaterThan(3);
//     })
// })