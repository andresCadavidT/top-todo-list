export default function createToDo(title, description, dueDate, notes, priority, checklist = false){
    return{
        title,
        description,
        dueDate,
        notes,
        priority,
        checklist
    }
}