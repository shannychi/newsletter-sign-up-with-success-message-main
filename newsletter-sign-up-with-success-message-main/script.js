function switchVisible() {
  if (document.getElementById('a')) {

      if (document.getElementById('a').style.display == 'none') {
          document.getElementById('a').style.display = 'block';
          document.getElementById('b').style.display = 'none';
      }
      else {
          document.getElementById('a').style.display = 'none';
          document.getElementById('b').style.display = 'block';
      }
  }
}