const newTaskInput = document.getElementById('new-task'); // champ de texte pour saisir le nom de la nouvelle tâche
const addTaskButton = document.getElementById('addTask'); // bouton pour ajouter la nouvelle tâche à la liste
const toDoList = document.getElementById('to-do-list'); // liste pour afficher les tâches à faire 
const doneList = document.getElementById('done-list'); // liste pour afficher les tâches complétées 


// fonction pour ajouter  une tâche à la liste
function addTask() {
    const taskText = newTaskInput.value;
    if (taskText === '') return;

// créer li   
    const newTask = document.createElement('li');
    newTask.classList.add('task-item');
//    newTask.textContent = taskText;

    // Créer une checkbox et label
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const label = document.createElement('label');
    label.appendChild(checkbox);
    label.append(taskText);
    newTask.appendChild(label);

    // Créer un bouton de suppression
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';

    newTask.appendChild(label);
    newTask.appendChild(deleteButton);
    

    toDoList.appendChild(newTask);
    newTaskInput.value = '';

    // Événement pour la suppression
    deleteButton.addEventListener('click', () => {
        toDoList.removeChild(newTask);
        doneList.removeChild(newTask);
    });

    // Evenement listener pour la checkbox
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            doneList.appendChild(newTask);
        } else {
            toDoList.appendChild(newTask);
        }
    }); 

    // créer des boutons pour supprimer et marquer comme terminé
    // const deleteButton = document.createElement('button');
    //deleteButton.textContent = 'Supprimer';
    //deleteButton.addEventListener('click', () => {
      //  toDoList.remove(newTask); // supprimer la tâche de la liste 
       // doneList.remove(newTask); // supprimer la tâche de la liste des tâches complétées
   // });

    // ajouter les boutons au li
   // newTask.appendChild(deleteButton); // ajouter le bouton de suppression
    

   // const doneButton = document.createElement('button');
   // doneButton.textContent = 'Terminé';
   // doneButton.addEventListener('click', () => {
     //   toDoList.remove(newTask); // supprimer la tâche de la liste
     //   doneList.appendChild(newTask); // ajouter la tâche à la liste des tâches complétées
      //  toDoList.remove(deleteButton); // supprimer le bouton de suppression
       // toDoList.remove(doneButton); // supprimer le bouton de marquage comme terminé

  //  });
   // newTask.appendChild(doneButton); // ajouter le bouton de marquage comme terminé
   // console.log(newTask);
  //  toDoList.appendChild(newTask);


}

addTaskButton.addEventListener('click', addTask);