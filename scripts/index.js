const link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/styles.css';

document.head.appendChild(link);



fetch('../navbar.html')
  .then(response => response.text())
  .then(data => {
    // Insert the navbar HTML into the page
    document.getElementById('navbar').innerHTML = data;

    // Highlight the active tab
    const navLinks = document.querySelectorAll('#navbar a'); // Select all links in the navbar
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page filename

    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active'); // Add the 'active' class to the current link
      }
    });
  })
  .catch(error => console.error('Error loading navbar:', error));


const title = document.getElementById('title');

title.textContent = "Zanyar"


fetch('../footer.html')
  .then(response => response.text())
  .then(data => {
    // Insert the navbar HTML into the page
    document.getElementById('footer').innerHTML = data;

  })
  .catch(error => console.error('Error loading navbar:', error));



function showsidebar(){
  const sidebar = document.querySelector('.side-wrapper');
  sidebar.style.display = 'flex';
}



function hidebar(){
  const sidebar = document.querySelector('.side-wrapper');
  sidebar.style.display = 'none';
}






