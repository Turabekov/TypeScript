// enum RequestType {
//     GET = "get",
//     POST = "post",
// }

function fetchWithAuth(url: string, method: "post" | "get"): 1 | -1 {
    return 1;
}

fetchWithAuth("s", "post");
// fetchWithAuth("s", "get");

let method = "post";

fetchWithAuth("s", method as "post");
