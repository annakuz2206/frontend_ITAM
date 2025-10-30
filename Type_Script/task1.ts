interface User{
    username: string;
}

interface ApiResponse<T>{
    data: T;
    status: "error" | "success";
    message?: string;
    initialized?: null;
}

let response: ApiResponse<User> = {
    data:{
        username: "Alexey"
    },
    status: "success",
    initialized: null,
}


