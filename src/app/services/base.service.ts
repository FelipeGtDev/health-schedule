import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroments/enviroments";


export abstract class BaseService {

    protected urlBaseApi = environment.urlBaseApi;

    constructor(protected http: HttpClient) {}

}