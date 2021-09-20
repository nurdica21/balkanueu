export class signInData{

    private email: string;
    private pwd:string;
    private crud_req:string;

    constructor(email:string, pwd:string, crud_req:string){

        this.email=email;
        this.pwd=pwd;
        this.crud_req = crud_req;

    }

    getEmail():string{
        return this.email;
    }

    getPassword():string{
        return this.pwd;
    }

    getCrud_req():string{
        return this.crud_req;
    }
}