/** The SideBarBtns class */
import './scrolltop.css'

class SideBarBtns {
  /** Used to register the scroll event handler */
  Initialize = () => {
    /** When the user scrolls down 300px from the top of the document, show the buttons */
    window.addEventListener('scroll', this.ToggleButtons)
    /** Event handler for scroll to top button */
    document
      .getElementById('scroll-btn')
      .addEventListener('click', this.ScrollToTop)
  }

  /** Displays/Hides the buttons */
  ToggleButtons = () => {
    this.myElement = document.getElementById('scroll-btn')
    /** If the current current scroll is 300px or more */
    if (this.myElement !== null) {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        /** The scroll to top button is displayed */
        this.myElement.style.display = 'block'
      } else {
        /** The scroll to top button is hidden */
        this.myElement.style.display = 'none'
      }
    }
  }

  /** When the user clicks on the button, scroll to the top of the document */
  ScrollToTop = () => {
    this.doc = document
    /** The user is scrolled to the top of the page */
    this.doc.body.scrollTop = 0
    this.doc.documentElement.scrollTop = 0
  }
}

export default SideBarBtns
