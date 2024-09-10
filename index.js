document.querySelectorAll('.menu-header').forEach(button => {
    button.addEventListener('click', () => {
        const menuContent = button.nextElementSibling;

        // Close all other open menus
        document.querySelectorAll('.menu-content').forEach(content => {
            if (content !== menuContent) {
                content.style.maxHeight = null;
            }
        });

        // Toggle the clicked menu
        if (menuContent.style.maxHeight) {
            menuContent.style.maxHeight = null;
        } else {
            menuContent.style.maxHeight = menuContent.scrollHeight + "px";
        }
    });
});
