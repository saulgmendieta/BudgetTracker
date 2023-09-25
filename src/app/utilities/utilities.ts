export function parseErrorsAPI(response: any): string[]{
    const result: string[] = [];

    if(response.error){
        if(typeof response.error === "string"){
            result.push(response.error);
        } else if (Array.isArray(response.error)){
            response.error.forEach(value => result.push(value.description));
        } else {
            const errorsMap = response.error.errors;
            const inputs = Object.entries(errorsMap);
            inputs.forEach((errArray:any)=>{
                const field = errArray[0];
                errArray[1].forEach(errorMsg => {
                    result.push(`${field}: ${errorMsg}`);
                });
            });
        }
    }

    return result;
}