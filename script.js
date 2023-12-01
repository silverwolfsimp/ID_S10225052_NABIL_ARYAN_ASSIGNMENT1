document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');
    const header = document.querySelector('.header');

    function toggleSidebar() {
        sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
        header.classList.toggle('push-content');
    }

    menuIcon.addEventListener('click', toggleSidebar);

    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (link.getAttribute('href') !== '#') {
                toggleSidebar(); // Close the sidebar when a link is clicked
            }
        });
    });
});

// Function to enlarge merch item
function enlargeMerch(item) {
    const enlargedMerch = document.querySelector('.enlarged-merch');
    const enlargedMerchImg = enlargedMerch.querySelector('img');
    const merchImg = item.querySelector('img');

    enlargedMerchImg.src = merchImg.src;
    enlargedMerch.style.display = 'flex';
}

// Function to close enlarged merch popup
function closeEnlargedMerch() {
    document.querySelector('.enlarged-merch').style.display = 'none';
}

// Function to close sidebar
function closeSidebar() {
    document.querySelector('.sidebar').style.width = '0';
    document.querySelector('.header').classList.remove('push-content');
}
