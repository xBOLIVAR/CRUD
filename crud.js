const cars = [
    {
        id: 0,
        mark: 'BMW',
        model: 'serie 1',
        color: 'black',
        year: 2000,
        price: '$30000'
    },
    {
        id: 1,
        mark: 'Audi',
        model: 'A1',
        color: 'red',
        year: 2001,
        price: '$40000'
    },
    {
        id: 2,
        mark: 'Ford',
        model: 'model T',
        color: 'green',
        year: 2002,
        price: '$50000'
    }
]

function printCar(dataCar){
    let container = document.getElementById("mark-container");
    container.innerHTML = '';
    dataCar.forEach(car => {
        let htmlCar = `<tr>
                        <td>${car.mark}</td>
                        <td>${car.model}</td>
                        <td>${car.color}</td>
                        <td>${car.year}</td>
                        <td>${car.price}</td>
                        <td>
                        <button class="btn btn-danger" onclick="deleteCar(${car.id})">Delete</button>
                        <button class="btn btn-warning" onclick="editCar(${car.id})">Edit</button>
                        </td>
                       </tr>`
        container.innerHTML += htmlCar;
    });

}



function addCar(){
    const inputMark = document.getElementById('inputMark').value;
    const inputModel = document.getElementById('inputModel').value;
    const inputColor = document.getElementById('inputColor').value;
    const inputYear = document.getElementById('inputYear').value;
    const inputPrice = document.getElementById('inputPrice').value;
    
    const newCar = {
        id: generateId(),
        mark: inputMark,
        model: inputModel,
        color: inputColor,
        year: inputYear,
        price: inputPrice
    }

    cars.push(newCar);
    printCar(cars)
    resetForm();
    hideFormContainer();
}

function generateId(){
    let biggerId = 0;
    cars.forEach((car) => {
        if(car.id > biggerId){
            biggerId = car.id;
        }
    });
    return biggerId + 1;
}

function deleteCar(id){
   let index = cars.findIndex((car) => car.id === id);
    cars.splice(index, 1);
    printCar(cars)
}

function editCar(id){
    let index =  cars.findIndex((car) => car.id === id);
    let car = cars[index]; 
    const inputMark = document.getElementById('inputMark').value = car.mark;
    const inputModel = document.getElementById('inputModel').value = car.model;
    const inputColor = document.getElementById('inputColor').value = car.color ;
    const inputYear = document.getElementById('inputYear').value = car.year;
    const inputPrice = document.getElementById('inputPrice').value = car.price;
    showFormContainer();
    changeTextEditButton();
}

function resetForm(){
    document.getElementById('carForm').reset()
}

function hideFormContainer(){
    document.getElementById('new-car').classList.add('d-none')
}

function showFormContainer(){
    document.getElementById('new-car').classList.remove('d-none')
    changeCreatButton();
}

function changeTextEditButton(){
    let button = document.getElementById('btn-car-form');
    button.innerHTML = 'edit'
    button.classList.remove('btn-primary')
    button.classList.add('btn-warning')
}

function changeCreatButton(){
    let button = document.getElementById('btn-car-form');
    button.innerHTML = 'Safe'
    button.classList.remove('btn-warning')
    button.classList.add('btn-primary')
}

printCar(cars);