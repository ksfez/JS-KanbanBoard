let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
  const item= document.createElement('div');
  item.classList.add('item');
  item.id='item-'+order;
  item.draggable=true;
  item.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text', event.target.id);
  });
  item.addEventListener('dragend', event => {
    event.dataTransfer.clearData()
  });
  const input= document.createElement('input');
  item.appendChild(input);
  const save_btn = document.createElement('button');
  save_btn.innerHTML='Save'
  save_btn.addEventListener('click', () => {
    error="";
    if(input.value!= "") {
      order+=1;
      item.innerHTML=input.value;
      item.adding=false;
    }
  })
};

document.querySelectorAll('.drop').forEach(element => {
});