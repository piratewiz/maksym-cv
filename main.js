

function filterBar(skills) {

  var input = document.getElementById('filter')
  var filter = input.value.toUpperCase()
  var ul = document.getElementById('elements')
  var li = ul.getElementsByTagName('li')

  for (var i = 0; i < li.length; i++) {
    var languageP = li[i].getElementsByTagName('p')[0]
    var languageValue = languageP.textContent || languageP.innerText;

    if (languageValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = 'block'
    } else {
      li[i].style.display = 'none'
    };
  };
};
