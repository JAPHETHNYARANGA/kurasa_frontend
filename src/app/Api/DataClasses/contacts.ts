export interface Contacts {
    success:boolean;
    message:string;
    notes:note[];
}

export interface note{
    id:number | null;
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:number | null;
    created_at:string;
    updated_at:string;
}
