// selecione todos os elementos .navbara
const navbaras = document.querySelectorAll('.navbara');

// verifique as dimensões da janela do navegador sempre que a janela for redimensionada
window.addEventListener('resize', () => {
  const width = window.innerWidth;
 

  // verifique se a largura e a altura atendem às suas condições
  if (width === 425  || width <= 425 ) {
    // itere sobre todos os elementos .navbara e oculte-os se as condições forem atendidas
    navbaras.forEach(navbara => {
      navbara.style.display = 'none';
    });
  } else {
    // itere sobre todos os elementos .navbara e exiba-os novamente se as condições não forem atendidas
    navbaras.forEach(navbara => {
      navbara.style.display = '';
    });
  }
});
