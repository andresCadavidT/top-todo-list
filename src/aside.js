import { projects } from "./createProject"

console.log(projects.getMyProjects())

function aside(){
    return {
        alert: function(){
            console.log("Alert")
            // myProjects.forEach((aProject)=>{myAsideArray.push(aProject)})
        }
    }
}

export {aside}

