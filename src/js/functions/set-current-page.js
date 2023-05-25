export default function setCurrentPage() {
  const currentPagePathname = document.location.pathname;

  const linkRef = document.querySelector(
    `.nav-link[href="${currentPagePathname}"]`
  );
  linkRef.setAttribute('aria-current', 'page');

  linkRef.classList.add('current');
}
