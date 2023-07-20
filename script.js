var items = ['item 1', 'item 2', 'item 3', 'item 4'];

var list = document.getElementById('myList');

function CreateItem(item) {

    var li = document.createElement('li');
    var t = document.createTextNode(item);
    li.className = 'list-group-item';
    li.appendChild(t);
    list.appendChild(li);

    var span = document.createElement('span');
    var test = document.createTextNode('\u00D7');

    span.className = 'close';
    span.appendChild(test),
        li.appendChild(span);

    span.onclick = function () {
        var li = this.parentElement;
        li.style.display = 'none';
        li.classList.remove('checked');
    }

}

items.forEach(function (item) {

    CreateItem(item);

});


list.addEventListener('click', function (item) {

    if (item.target.tagName == 'LI') {
        item.target.classList.toggle('checked');
        ToggleDeleteButton()
    }

});

document.querySelector('#deleteAll').onclick = function () {
    var elements = document.querySelectorAll('.checked');

    elements.forEach(function (item) {
        item.style.display = 'none';
    });
}

function ToggleDeleteButton() {
    var checkList = document.querySelectorAll('.list-group-item.checked');

    if (checkList.length > 0) {
        document.querySelector('#deleteAll').classList.remove('d-none');
    }
    else {
        document.querySelector('#deleteAll').classList.add('d-none');
    }
}

document.querySelector('#btnCreate').onclick = function () {

    var item = document.querySelector('#txtItem').value;
    if (item === '') {
        alert('Lutfen bir deger giriniz!');
        return;
    }
    CreateItem(item);
}