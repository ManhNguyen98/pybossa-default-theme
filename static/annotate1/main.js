let table = document.getElementById('tblCustomers');
function CountRows() {
  let rowCount = 0;
  let rows = table.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].getElementsByTagName('td').length > 0) {
      rowCount++;
    }
  }
  return rowCount;
}
function handleKeyup() {
  let valueInputs = document.getElementsByName('value');
  valueInputs.forEach(item => {
    item.addEventListener('keyup', function(e) {
      let buttonDelete = item.parentElement.parentElement.children[3];
      let button = buttonDelete.getElementsByTagName('button');
      if (item.value !== '') {
        button[0].removeAttribute('disabled');
      } else {
        button[0].setAttribute('disabled', true);
      }
    });
  });
}

function deleteItem() {
  confirm('Are you sure?');
}

function addRow() {
  if (checkAllFieldIsFill()) {
    let stt = CountRows();
    let row = buildNewRow(stt);
    $('#tableBody').append(row);
  }
}

function checkAllFieldIsFill() {
  let inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    if (element.value === '') {
      return false;
    }
  }
  return true;
}

function buildNewRow(number) {
  let element = '';
  element += '<tr>';
  element += '    <td>' + (number + 1) + '.</td>';
  element += '    <td>';
  element += '        <input type="text" name="key" />';
  element += '    </td>';
  element += '    <td><input type="text" name="value" /></td>';
  element += '    <td>';
  element +=
    '        <button type="button" disabled="true" class="deleteBtn" onclick="deleteItem()">';
  element += '            <i class="fa fa-trash" aria-hidden="true"></i>';
  element += '       </button>';
  element += '    </td>';
  element += '</tr>';
  //   element.addEventListener('keyup', console.log('hi'));
  return element;
}
