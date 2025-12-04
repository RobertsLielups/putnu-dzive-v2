import './style.css'

const yearElement = document.getElementById("year")

if (yearElement) {
  const currentYear = String(new Date().getFullYear())
  yearElement.textContent = currentYear;
}
