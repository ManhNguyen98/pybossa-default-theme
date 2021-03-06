let table = document.getElementById('tblCustomers');
$(document).ready(function() {
  $('.deleteBtn').on('click', deleteItem);
});
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

function deleteItem(e) {
  e.preventDefault();
  let totalRows = CountRows();
  if (totalRows > 1) {
    $(this)
      .closest('.labelImport')
      .remove();
  }
  const labelId = $(this).attr('data-id');
  $.ajax({
    type: 'POST',
    url: `labels/${labelId}/delete`,
    contentType: 'application/json',
    headers: {
      'Content-Type': 'application/json',
    },
    success: function(res) {
      console.log(res)
    },
  });
}

function addRow() {
  if (checkAllFieldIsFill()) {
    let row = buildNewRow();
    $('#tableBody').append(row);
    $('.deleteBtn').on('click', this.deleteItem);
  }
  $('#createLabel').css('display', 'inline');
}

function checkAllFieldIsFill() {
  let keys = $('input[name="key"]');
  let values = $('input[name="value"]');
  if (keys.val() && values.val()) {
    return true;
  } else {
    return false;
  }
}

function buildNewRow() {
  let element = '';
  element += '<tr class="labelImport">';
  element += '    <td>';
  element += '        <input type="text" name="key" />';
  element += '    </td>';
  element += '    <td><input type="text" name="value" /></td>';
  element += '    <td>';
  element += '        <button type="button" class="deleteBtn">';
  element += '            <i class="fa fa-trash" aria-hidden="true"></i>';
  element += '       </button>';
  element += '    </td>';
  element += '</tr>';
  //   element.addEventListener('keyup', console.log('hi'));
  return element;
}
