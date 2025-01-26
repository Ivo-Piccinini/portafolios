
function useFunctions() {

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',  // Esto hace que el desplazamiento sea suave
      });
    };

    const scrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

  return {
    scrollToTop,
    scrollToElement,
  }
}

export default useFunctions