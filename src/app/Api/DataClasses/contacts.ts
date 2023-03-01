export interface Contacts {
    success:boolean;
    message:string;
    notes:note[];
}

export interface note{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:number;
    created_at:string;
    updated_at:string;
}
